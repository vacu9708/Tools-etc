import React from "react";
import Messages from '../components/Messages'
import {Msg} from '../components/Messages'

const Room = () => {
  const [msg, set_msg] = React.useState("");
  const [messages, set_messages]=React.useState<Msg[]>([])
  const messages_ref=React.useRef<Msg[]>([])
  const ws=React.useRef(new WebSocket("ws://125.240.141.53:4001"))

  React.useEffect(()=>{
    ws.current.onopen = () => {
      console.log("connected!!")
      ws.current.send(`{"target": "join room", "name": "${localStorage.getItem('name')}", "roomID": "${localStorage.getItem('roomID')}"}`)
    }
    ws.current.onclose = (error) => {
      console.log("disconnect")
      console.log(error)
    };
    ws.current.onerror = (error) => {
      console.log("connection error")
      console.log(error)
    };
    ws.current.onmessage = (msg)=>{
      if(msg.data=='Existing IP'){
        window.location.reload()
        return
      }
      const new_message=JSON.parse(msg.data)
      set_messages([...messages_ref.current, new_message])
      messages_ref.current=[...messages_ref.current, new_message]
    };
  },[])

  const send_msg=(e: any)=>{
    if(e.key!=='Enter')
      return
    e.preventDefault()
    ws.current.send(`{"target": "chat msg", "msg": "${msg}"}`)
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
        <div className="chat_header">Chat</div>
        <div className="message_window">
          <Messages messages={messages}/>
        </div>
        <textarea className="msg_input" onChange={(e) => set_msg(e.target.value)} onKeyDown={send_msg} placeholder='Type message here' value={msg} />
      </div>
    </div>
  )
}
export default Room;