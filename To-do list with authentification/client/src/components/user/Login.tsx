import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

interface LoginProps {
  renderSignup: () => void;
}
const Login = ({renderSignup}: LoginProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  
  const onSubmit = () => {
    axios.post('/login', {
      username: username,
      password: password
    }).then(res => { // Login sucessful
      const token = res.data.token
      localStorage.setItem('token', token)
      history.push("/dashboard") // This is way faster than window.location.href
      //window.location.href="/dashboard"
    })
    .catch(error=>{
      // Login failed
      console.log(error.response)
      alert(error.response.data.error)
    })
  }

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