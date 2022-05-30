import React from "react";
import Logout from "./auth/Logout";

const Navbar = () => {
  return(
    <div className="flex justify-between bg-green-400 p-8 text-white">
      <p className="font-bold text-lg">To-do with authentification</p>
      <p className="font-bold text-lg">Name: {localStorage.getItem('name')}</p>
      <Logout />
    </div>
  )
}

export default Navbar;