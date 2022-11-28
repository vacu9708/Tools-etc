import React from "react";
import Messages from '../components/Messages'
import {Msg} from '../components/Messages'

const Room = () => {
  const [msg, set_msg] = React.useState("");
  const [participants, set_participants] = React.useState<any>("");
  const [messages, set_messages]=React.useState<Msg[]>([])
  const messages_ref=React.useRef<Msg[]>([])
  const ws=React.useRef(new WebSocket("ws://125.240.141.53:4001"))

  React.useEffect(()=>{
    ws.current.onopen = () => {
      ws.current.send(`{"target": "join_room", "name": "${localStorage.getItem('name')}", "roomID": "${localStorage.getItem('roomID')}"}`)
    }
    ws.current.onclose = (msg) => {
      console.log(msg)
    };
    ws.current.onerror = (error) => {
      console.log(error)
    };
    ws.current.onmessage = (msg)=>{
      let new_msg=JSON.parse(msg.data)
      if(new_msg.type==='err'){
        window.location.reload()
        return
      }
      if(new_msg.type==='new_participant')
        set_participants(new_msg.participants)

      new_msg={type: new_msg.type, msg: new_msg.msg}
      set_messages([...messages, new_msg])
      messages_ref.current=[...messages_ref.current, new_msg]
    };
  },[])

  const send_msg=(e: any)=>{
    if(e.key!=='Enter')
      return
    e.preventDefault()
    ws.current.send(`{"target": "chat_msg", "msg": "${msg}"}`)
    set_msg('')
  }

  return(
    <div className="room_frame">
      <div className="left_window" style={{fontSize: '50px', textAlign: 'center'}}>
        <div className="video_grid">

        </div>
        <div className="controller" style={{fontSize: '50px', textAlign: 'center'}}>
          
        </div>
      </div>
      <div className="chat_window">
        <div className="chat_header">
          Chat<br/>
          <div className='participants'>{participants}</div>
        </div>
        <div className="message_window">
          <Messages messages={messages_ref.current}/>
        </div>
        <textarea className="msg_input" onChange={(e) => set_msg(e.target.value)} onKeyDown={send_msg} placeholder='Type message here' value={msg} />
      </div>
    </div>
  )
}
export default Room;