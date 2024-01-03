import { useState } from "react"

export default function Login(){
    const [userID, setID] = useState("")
    return (
        <>
        <h1> Login </h1>
        <ul> 
            <li> Username </li><li> <input type ='text'></input></li>
        </ul>
        <ul>
            <li> Password </li><li> <input type ='text'></input></li>
        </ul>
        </>
    )
}