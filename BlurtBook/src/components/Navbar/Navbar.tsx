// import "./src/styles/Navbar.css"
import { useState } from "react";
import "./Navbar.css"

// const UserLoggedIn = "false";

function LogIn(prop:any){
    // const[loggedIn, UpdateLoggedIn]= useState("false")
    if(prop.isLoggedIn == "false"){
        return(
            <li>
                <a href ="Log_in"> Log In</a>
            </li>
        )
    }
    else {
        return(
            <li> 
                <a href="/Your_Notes"> Your Notes</a>
            </li>
        )
    }
}

function Navbar(){
    const [UserLoggedIn,UpdateUser] = useState("false");
    // UpdateUser("false");

    return(
        <div className="textContainer">
            <nav className="nav">
                <h1 className ="title">
                    <a href = "/"> BlurtBook</a>
                </h1>
                <ul>
                    {/* <li> <a href="/Your_Notes"> Your Notes</a></li> */}
                    <LogIn isLoggedIn={UserLoggedIn}></LogIn>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar;