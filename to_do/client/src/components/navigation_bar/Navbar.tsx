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
    <div className="flex justify-between p-8 text-white" style={{background:'#34D399'}}>
      <p style={{fontSize: '33px'}} className="font-bold text-lg">To-do list</p>
      <div className="flex justify-between" style={{width:'11%'}}>
        <p style={{fontSize: '33px'}} className="font-bold">Name:</p> 
        <p style={{fontSize: '33px', color:'rgb(250,153,218)'}} className='fond-bold'>{name}</p>
      </div>
      <div className="flex justify-between " style={{width:'13%'}}>
        <EditProfile/>
        <Logout />
      </div>
    </div>
  )
}

export default Navbar;