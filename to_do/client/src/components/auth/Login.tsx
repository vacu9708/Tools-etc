import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
//const api_url='http://localhost:3001'

interface LoginProps {
  renderSignup: () => void;
}
const Login = ({renderSignup}: LoginProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logged_in, set_logged_in]=React.useState(false)
  
  const onSubmit = () => {
    axios.post('/login', {
      username: username,
      password: password
    }).then(res => {
      if (res.status === 200) { // sucessful, save the token
        const token = res.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('name', res.data.name)
        set_logged_in(true) // This CANNOT be before setting the token!!
        console.log(res.data.title)
      } else { // login failed
        console.log(res.data.title)
      }
    });
  }

  if(logged_in)
    return <Redirect to={'/dashboard'} />

  return(
    <div style={{height: '300px'}}>
      <h1 style={{fontSize:'33px'}} className="text-center text-green-400 font-bold">Log in page</h1>
      <div className="mb-4">
        <label>username</label>
        <input onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" type="text" placeholder="username" />
      </div>
      <div className="mb-4">
        <label>password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" type="password" placeholder="password" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>No account? <span className="text-green-400 cursor-pointer" onClick={renderSignup}>Sign up</span></p>
        </div>
        <button className="rounded-lg px-6 py-3 font-bold bg-green-400 text-white" onClick={() => onSubmit()}>Log in</button>
      </div>
    </div>
  )
}

export default Login;