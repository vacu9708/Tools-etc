import { Redirect } from "react-router";
import React from "react";

const Logout = () => {
  const [state, setState] = React.useState(false);
  if(state)
    return <Redirect to={'/'} />

  return(
    <input type="button" className="py-2 px-3 bg-gray-400 text-white rounded-md cursor-pointer" value="Log out" 
          onClick={() => {
            localStorage.removeItem('token');
            setState(!state)
          }} />
  )
}

export default Logout;