import React from "react";
import axios from "axios";

interface User{
    username: string;
    name: string;
}

function Users_inquiry(){
    const [user_list, set_user_list] = React.useState<User[]>([]);

    React.useEffect(() => {
        axios.get('/all_users')
            .then(res=>{
                if (res.status === 200)
                    set_user_list(res.data.users)
                })
    }, [])

    return(
        <>
        {user_list.map((user, index)=>( // THE FUCKING ERROR IS HERE, THE PARENTHESIS
            <div className="flex border border-green-400 p-3 rounded-md mb-4 items-center" key={user.username}
                style={{borderWidth:'medium', justifyContent:'space-evenly'}}>
                <label>Index: {index+1}</label>
                <label>ID: {user.username}</label>
                <label>Name: {user.name}</label>
            </div>
        ))}
        </>
    )
}

export default Users_inquiry;