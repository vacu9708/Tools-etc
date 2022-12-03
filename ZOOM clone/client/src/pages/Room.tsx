import React from "react";
import Messages from '../components/Messages'
import {Msg} from '../components/Messages'
import My_websocket from '../my_websocket'
import Streams from '../components/Streams'

let ws: My_websocket
const Room = () => {
  const [render, set_render] = React.useState(false);
  const [input_msg, set_input_msg] = React.useState("");
  const [participants, set_participants] = React.useState<string[]>([])
  const [messages, set_messages]=React.useState<Msg[]>([])
  const messages_ref=React.useRef<Msg[]>([])
  const message_window=React.useRef<any>()

  React.useEffect(()=>{
    ws=new My_websocket("wss://localhost:4000")
    ws.add_target('err', (json: any)=>{
      window.location.reload()
      console.log(json)
    })
    ws.add_target('participant', (json: any)=>{
      set_participants(json.participants.split('/'))
      json={target: json.target, name: json.name, msg: json.msg}
      messages_ref.current=[...messages_ref.current, json]
      set_messages(messages_ref.current)
    })
    ws.add_target('chat_msg', (json: any)=>{
      json={target: json.target, name: json.name, msg: json.msg}
      messages_ref.current=[...messages_ref.current, json]
      set_messages(messages_ref.current)
    })
    const interval=setInterval(()=>{
      if(ws.is_open){
        // Find roomID
        let url=window.location.href
        let p=url.length-1
        while(url[p]!=='/') p--
        sessionStorage.setItem('roomID', url.substring(p+1, url.length))

        ws.send(`{"target": "join_room", "name": "${sessionStorage.getItem('name')}", "roomID": "${sessionStorage.getItem('roomID')}"}`)
        clearInterval(interval)
        set_render(!render)
      }
    }, 1)
  },[])

  React.useEffect(()=>{
    message_window.current.scrollTop = message_window.current.scrollHeight
  },[messages])

  const send_msg=(e: any)=>{
    if(e.key!=='Enter')
      return
    e.preventDefault()
    ws.send(JSON.stringify({target: 'chat_msg', msg: input_msg}))
    set_input_msg('')
  }

  return(
    <div className="room_frame">
      <div className="left_window" style={{fontSize: '50px', textAlign: 'center'}}>
        {ws? <Streams ws={ws}/>: <></>} 
        <div className="controller" style={{fontSize: '50px', textAlign: 'center'}}>
          
        </div>
      </div>
      <div className="chat_window">
        <div className="chat_header">
          Chat<br/>
          <div className='participants'>{participants}</div>
        </div>
        <div className="message_window" ref={message_window}>
          <Messages messages={messages}/>
        </div>
        <textarea className="msg_input" onChange={
          (e) => set_input_msg(e.target.value)} onKeyDown={send_msg} placeholder='target message here' value={input_msg} />
      </div>
    </div>
  )
}
export default Room;