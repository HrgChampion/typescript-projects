import { useState } from "react";

export const LoggedIn=()=>{
    const [loggedIn,setLoggedIn]=useState(false);
    
    const handleLogIn=()=>{
        setLoggedIn(true);
    };
    const handleLogOut=()=> {
        setLoggedIn(false);
    } ;

    return (
        <div>
            <button onClick={handleLogIn}>LogIn</button>
            <button onClick={handleLogOut}>LogOut</button>
            <div>User is {loggedIn?'LOgged In':'LOgged Out'}</div>
        </div>
    )
}