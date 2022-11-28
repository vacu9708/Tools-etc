const {v4} = require('uuid');
const socket = require('./socket');

const create_room=(req, res) => {
    const uuid=v4()
    socket.rooms.set(uuid,new Map())
    return res.status(200).end(uuid)
}

module.exports={
    create_room
}