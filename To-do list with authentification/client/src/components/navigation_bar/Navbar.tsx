import React from "react";
import Logout from "./Logout";
import EditProfile from "./EditProfile";
import axios from "axios";

function Navbar() {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    axios.get('/user', {headers: {token: localStorage.getItem('token')}})
      .then(res => {
        if (res.status === 200){
          setName(res.data.name)
        }
    })
  }, [])


  return(
    <div className="flex justify-between p-8 text-white" style={{background:'#263747'}}>
      <p style={{fontSize: '33px', color: '#b2c0cc'}} className="font-bold text-lg">To-do list</p>
      <div className="flex justify-between" style={{width:'11%'}}>
        <p style={{fontSize: '33px', color: '#b2c0cc'}} className="font-bold">Name:</p> 
        <p style={{fontSize: '33px', color:'#b2c0cc'}} className='fond-bold'>{name}</p>
      </div>
      <div className="flex justify-between " style={{width:'13%'}}>
        <EditProfile/>
        <Logout />
      </div>
    </div>
  )
}

export default Navbar;