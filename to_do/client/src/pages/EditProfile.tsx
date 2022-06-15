import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

const EditProfile = () => {
    const [nameToChange, setNameToChange] = React.useState("");
    const [move, setMove] = React.useState(false);

    function edit(nameToChange: string) {
        axios.patch('/user', {nameToChange: nameToChange}, {headers: {token: localStorage.getItem('token')}})
          .then(res => {
            if (res.status === 200){
                setMove(!move)
            }
          })
    }

    if(move)
        return <Redirect to={'/dashboard'}/>

    return(
        <div className="flex w-full h-screen">
            <div className="w-1/2 max-w-xs mx-auto relative">
                <div className="absolute inset-0 m-auto" style={{height: '300px'}}>
                    <h1 style={{fontSize:'33px'}} className="text-center text-green-400 font-bold">Edit profile</h1>
                    <div className="mb-4">
                        <label>Name to change</label>
                        <input onChange={(e) => setNameToChange(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-400 rounded-md" 
                        type="text" placeholder="Name to change" />
                    </div>
                    <button className={`rounded-lg px-6 py-3 font-bold text-white bg-green-400`} 
                    onClick={() => edit(nameToChange)}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;