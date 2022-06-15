import { Redirect } from "react-router";
import React from "react";

const Logout = () => {
  const [move, setMove] = React.useState(false);
  if(move)
    return <Redirect to={'/'}/>

  return(
    <input type="button" className="ml-3 px-3 py-3 bg-gray-400 text-white rounded-md cursor-pointer" value="Log out" 
          onClick={() => {
            localStorage.removeItem('token');
            setMove(!move)
          }}
    />
  )
}

export default Logout;