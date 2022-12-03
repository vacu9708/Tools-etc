const websocket = require('ws');
const rooms=new Map()
const clients_info=new Map()
const connected_ips=new Map()

const init=(server)=>{
    const server_socket=new websocket.Server({server: server})
    server_socket.on('connection', (client, req)=>{
        // Prevent multiple connections from one IP
        if(connected_ips.has(req.socket.remoteAddress)){
            client.send(`{"target": "err", "msg": "Existing IP"}`)
            client.close()
            return
        }
        connected_ips.set(req.socket.remoteAddress, 'connected')

        const emit_msg=(msg)=>{
            for(let [client_, name] of rooms.get(clients_info.get(client)[1]))
                client_.send(msg)
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
                    emit_msg(`{"target": "participant", "name": "${name}", "msg": "has entered the room", "participants": "${get_participants()}"}`)
                }
                else if(json.target==='chat_msg'){
                    emit_msg(JSON.stringify({target: 'chat_msg', 'name': clients_info.get(client)[0], 'msg': json.msg}))
                    // emit_msg(`{"target": "msg", "name": "${clients_info.get(client)[0]}", "msg": "${json.msg}"}`) // doesn't work
                }
            //}
            //catch{
                //client.send('error')
            //}
        })

        client.on('close', (code, reason)=>{
            try{
                connected_ips.delete(req.socket.remoteAddress)
                emit_msg(`{"target": "participant", "name": "${clients_info.get(client)[0]}", "msg": "has left the room", "participants": "${get_participants()}"}`)
                rooms.get(clients_info.get(client)[1]).delete(client)
                clients_info.delete(client)
            }catch{}
        })
    })
}
module.exports={rooms, init}