import React from "react";
import My_websocket from '../my_websocket'
import Peer from 'peerjs'

let my_stream: MediaStream
let peer: Peer
interface My_websocket_{
    ws: My_websocket;
}
const Streams=({ws}: My_websocket_)=>{
    const video_grid=React.useRef<any>()

    React.useEffect(()=>{
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            my_stream=stream
            const my_video = document.createElement('video')
            addVideoStream(my_video, my_stream)
        })
        .catch(err => {
            console.error("Failed to get local stream", err);
        })
        
        function addVideoStream(video: HTMLVideoElement, stream: MediaStream) {
            video.srcObject = stream
            video.addEventListener('loadedmetadata', () => {
            video.play()
            })
            video_grid.current.append(video)
        }
    
        ws.add_target('uuid', (json: any)=>{
            peer=new Peer(json.uuid)
            peer.on('open', peerID => {
                console.log('Join room as '+peerID)
                ws.send(JSON.stringify({target: "new_peer", peerID: peerID}))
            })
            peer.on('call', (call: any) => {
                console.log('Call from a peer')
                call.answer(my_stream)
                const video = document.createElement('video')
                call.on('stream', (remoteStream: MediaStream) => {
                    addVideoStream(video, remoteStream)
                })
            })
        })
        ws.send(JSON.stringify({target: 'uuid'}))
        ws.add_target('new_peer', (json: any)=>{ // New peer received
            console.log('Call a new peer')
            const call = peer.call(json.peerID, my_stream);
            const video = document.createElement('video')
            call.on("stream", (remoteStream) => { // answer of the call
                addVideoStream(video, remoteStream)
            });
            call.on('close', () => {
                video.remove()
            })
        })
    },[ws])

    return(
        <div className="video_grid" ref={video_grid}>
        </div>
    )
}
export default Streams