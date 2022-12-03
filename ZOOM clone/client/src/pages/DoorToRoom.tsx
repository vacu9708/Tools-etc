import React from 'react'
import {useNavigate} from "react-router-dom";

const find_roomID=()=>{
    let url=window.location.href
    let p=url.length-1
    while(url[p]!=='/') p--
    return url.substring(p+1, url.length)
}

const DoorToRoom=()=>{
    const navigate = useNavigate();
    return(
        <>
        <input onChange={(e) => sessionStorage.setItem('name', e.target.value)} className="name_box" type="text" placeholder="name"
        style={{fontSize: '30px'}}/>
        <button className={`join room button`} onClick={()=>(navigate(`/room/${find_roomID()}`))}style={{fontSize: '30px'}}>Join room</button>
        </>
    )
}
export default DoorToRoom