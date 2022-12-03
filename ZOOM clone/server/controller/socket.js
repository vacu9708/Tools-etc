const websocket = require('ws');
const {v4} = require('uuid');

const rooms=new Map()
const clients_info=new Map()
const connected_ips=new Map()

const init=(server)=>{
    const server_socket=new websocket.Server({server: server})
    server_socket.on('connection', (client, req)=>{
        // Prevent multiple connections from one IP
        if(false&&connected_ips.has(req.socket.remoteAddress)){
            client.send(`{"target": "err", "msg": "Existing IP"}`)
            client.close()
            return
        }
        connected_ips.set(req.socket.remoteAddress, 'connected')

        const broadcast=(msg, except_self=false)=>{
            for(let [client_, name] of rooms.get(clients_info.get(client)[1])){
                if(except_self && client_===client)
                    continue
                client_.send(msg)
            }
        }
        
        const get_participants=()=>{
            let participants=''
            for(let [client_, name] of rooms.get(clients_info.get(client)[1]))
                participants+=`${name}, /`
            return participants
        }

        client.on('message', (msg)=>{
            //try{
                const json=JSON.parse(msg)
                if(json.target=='join_room'){
                    let name=json.name
                    if(!name || name=='null')
                        name='guest'+clients_info.size.toString()
                    rooms.get(json.roomID).set(client, name)
                    clients_info.set(client, [name, json.roomID])
                    broadcast(JSON.stringify({target: "participant", name: name, msg: "has entered the room", participants: get_participants()}))
                }
                else if(json.target==='chat_msg'){
                    broadcast(JSON.stringify({target: 'chat_msg', 'name': clients_info.get(client)[0], 'msg': json.msg}))
                    // broadcast(`{"target": "msg", "name": "${clients_info.get(client)[0]}", "msg": "${json.msg}"}`) // doesn't work
                }
                else if(json.target==='uuid'){
                    client.send(JSON.stringify({target: "uuid", uuid: v4()}))
                }
                else if(json.target==='new_peer'){
                    broadcast(JSON.stringify({target: 'new_peer', peerID: json.peerID}), true)
                }
            //}
            //catch{
                //client.send('error')
            //}
        })

        client.on('close', (code, reason)=>{
            try{
                connected_ips.delete(req.socket.remoteAddress)
                broadcast(`{"target": "participant", "name": "${clients_info.get(client)[0]}", "msg": "has left the room", "participants": "${get_participants()}"}`)
                rooms.get(clients_info.get(client)[1]).delete(client)
                clients_info.delete(client)
            }catch{}
        })
    })
}
module.exports={rooms, init}