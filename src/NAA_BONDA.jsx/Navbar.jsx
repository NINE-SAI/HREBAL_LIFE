import React from "react";
import { Navigate } from "react-router-dom"

const Navbar = ()=>{
    return(
        <div>
            <Navigate to="/home"/>
            <h2>@</h2>
        </div>
    )
}

export default Navbar