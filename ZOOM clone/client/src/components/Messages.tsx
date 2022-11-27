import React from 'react'

export interface Msg{
    type: string;
    msg: string;
}

interface Msgs{
    messages: Msg[]
}

const Messages=({messages}: Msgs)=>{
    return(
    <>
    {messages.map((message, i)=>(
        <div className={message.type==='msg'? 'msg': 'new_participant_msg'} key={i}>
            {message.msg}
        </div>
    ))}
    </>)
}
// export default Messages
export default React.memo(Messages);