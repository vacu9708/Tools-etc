import { Redirect } from "react-router";
import React from "react";

const EditProfile = () => {
  const [move, setMove] = React.useState(false);
  if(move)
    return <Redirect to={'/edit_profile'}/>

  return(
    <input type="button" className="py-3 px-3 bg-yellow-400 text-white rounded-md cursor-pointer" value="Edit profile" 
          onClick={() => {
            setMove(!move)
          }}
    />
  )
}

export default EditProfile;