import React from "react";
import axios from "axios";

interface SignupProps {
  renderLogin: () => void;
}

const Signup = ({renderLogin}: SignupProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const onSubmit = () => {
    axios.post('/signup', {
      username: username,
      password: password,
      name: name,
    }).then(res => console.log(res));
  }

  React.useEffect(() => { // Password confirmation
    if (password === confirmPassword) 
      setDisabled(false);
    else 
      setDisabled(true);
  }, [password, confirmPassword])

  return(
    <div style={{height: '300px'}}>
      <h1 style={{fontSize:'33px'}} className="text-center text-green-400 font-bold">Sign up page</h1>
      <div className="mb-4">
        <label>username</label>
        <input onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" 
        type="text" placeholder="username" />
      </div>
      <div className="mb-4">
        <label>password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" 
        type="password" placeholder="password" />
      </div>
      <div className="mb-4">
        <label>confirm password</label>
        <input onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" 
        type="password" placeholder="password" />
      </div>
      <div className="mb-4">
        <label>name</label>
        <input onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-md" 
        type="text" placeholder="name" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>Already a member? <span className="text-green-400 cursor-pointer" onClick={renderLogin}>Log in</span></p>
        </div>
        <button className={`rounded-lg px-6 py-3 font-bold text-white ${disabled ? "bg-gray-400" : "bg-green-400"}`} 
        disabled={disabled} onClick={() => onSubmit()}>Sign up</button>
      </div>
    </div>
  )
}

export default Signup;