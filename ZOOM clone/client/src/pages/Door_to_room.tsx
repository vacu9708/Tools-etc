import React from 'react'
import {useNavigate} from "react-router-dom";

const find_roomID=()=>{
    let url=window.location.href
    let p=url.length-1
    while(url[p]!=='/') p--
    localStorage.setItem('roomID', url.substring(p+1, url.length))
}

const Door_to_room=()=>{
    find_roomID()
    const navigate = useNavigate();
    return(
        <>
        <input onChange={(e) => localStorage.setItem('name', e.target.value)} className="name_box" type="text" placeholder="name"
        style={{fontSize: '30px'}}/>
        <button className={`join room button`} onClick={()=>(navigate(`/room`))}style={{fontSize: '30px'}}>Join room</button>
        </>
    )
}
export default Door_to_room