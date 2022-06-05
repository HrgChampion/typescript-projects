import { useState } from "react";

type AuthUser={
    name:string;
    email:string;
}

export const User=()=>{
    const [user,setUser]=useState<AuthUser|null>(null);

    const handleLogIn=()=>{
        setUser({
           name:'Himanshu',
            email:'hgaub@gmail.com'
        })
    };
    const handleLogOut=()=>{

        setUser(null)
    };
    return (
        <div>
            <button onClick={handleLogIn}>LogIn</button>
            <button onClick={handleLogOut}>LogOut</button>
            <div>User name is{user?.name}</div>
            <div>User email is{user?.email}</div>
        </div>
    )
}