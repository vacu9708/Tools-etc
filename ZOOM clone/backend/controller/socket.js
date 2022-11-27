const websocket = require('ws');

const rooms=new Map()
const clients_info=new Map()
const connected_ips=new Map()
const server_socket=new websocket.Server({port:4001})
server_socket.on('connection', (client, req)=>{
    // Prevent multiple connections from one IP
    if(connected_ips.has(req.socket.remoteAddress)){
        console.log('IP already exists')
        client.send('Existing IP')
        client.close()
        return
    }
    connected_ips.set(req.socket.remoteAddress, 'connected')
    const emit_msg=(msg)=>{
        for(let [client_, name] of rooms.get(clients_info.get(client)[1]))
            client_.send(msg)
    }
    client.on('message', (msg)=>{
        //try{
            const json=JSON.parse(msg)
            if(json.target=='join room'){
                let name=json.name
                if(name==='')
                    name='guest'+clients_info.size.toString()
    
                rooms.get(json.roomID).set(client, name)
                clients_info.set(client, [name, json.roomID])
                emit_msg(`{"type": "new_participant", "msg": "${name} has entered the room"}`)
            }
            else if(json.target=='chat msg'){
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