import React from "react";
import Logout from "./Logout";
import EditProfile from "./EditProfile";
import axios from "axios";

function Navbar() {
  const [name, setName] = React.useState("");

  React.useEffect(() => { // Password confirmation
    axios.get('/user', {headers: {token: localStorage.getItem('token')}})
      .then(res => {
        if (res.status === 200){
          setName(res.data.name)
        }
    })
  }, [])


  return(
    <div className="flex justify-between p-8 text-white" style={{background:'#34D399'}}>
      <p className="font-bold text-lg">To-do with authentification</p>
      <p className="font-bold text-lg">Name: {name}</p>
      <div className="flex justify-between">
        <EditProfile/>
        <Logout />
      </div>
    </div>
  )
}

export default Navbar;