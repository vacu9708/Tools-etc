import React from 'react'

export interface Msg{
    type: string;
    name: string
    msg: string;
}

interface Msgs{
    messages: Msg[]
}

const get_time=()=>{
    const date=new Date()
    const hour=date.getHours()
    const minute=date.getMinutes()
    return `${hour}:${minute}`
}

const Messages=({messages}: Msgs)=>{
    return(
    <>
    {messages.map((message, i)=>(
        message.type==='msg'?
        <div className='msg' key={i}>
            <div style={{fontSize: '20px'}}>{message.name} {`(${get_time()})`}</div>
            {message.msg}
        </div>
        : message.type==='new_participant'?
        <div className='new_participant_msg' key={i}>
            {`${message.name} has entered the room`}
        </div>
        :{}
    ))}
    </>)
}
// export default Messages
export default React.memo(Messages);