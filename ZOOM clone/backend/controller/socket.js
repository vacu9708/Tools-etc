const websocket = require('ws');

const rooms=new Map()
const clients_info=new Map()
const connected_ips=new Map()
const server_socket=new websocket.Server({port:4001})

server_socket.on('connection', (client, req)=>{
    // Prevent multiple connections from one IP
    if(connected_ips.has(req.socket.remoteAddress)){
        client.send(`{"type": "err", "msg": "Existing IP"}`)
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
            participants+=`${name},`
        return participants.substring(0,participants.length-1)
    }

    client.on('message', (msg)=>{
        //try{
            const json=JSON.parse(msg)
            if(json.target=='join_room'){
                let name=json.name
                if(name==='')
                    name='guest'+clients_info.size.toString()
    
                rooms.get(json.roomID).set(client, name)
                clients_info.set(client, [name, json.roomID])
                emit_msg(`{"type": "new_participant", "msg": "${name} has entered the room", "participants": "${get_participants()}"}`)
            }
            else if(json.target==='chat_msg'){
                emit_msg(`{"type": "msg", "msg": "${clients_info.get(client)[0]}: ${json.msg}"}`)
            }
        //}
        //catch{
            //client.send('error')
        //}
    })

    client.on('close', (code, reason)=>{
        try{
            connected_ips.delete(req.socket.remoteAddress)
            rooms.get(clients_info.get(client)[1]).delete(client)
            clients_info.delete(client)
        }catch{}
    })
})

module.exports={rooms}