import React from "react";
import {useHistory} from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  return(
    <input type="button" className="px-3 py-3 bg-gray-400 text-white rounded-md cursor-pointer" value="Log out" 
          onClick={() => {
            localStorage.removeItem('token');
            history.push("/dashboard");
          }}
    />
  )
}

export default Logout;