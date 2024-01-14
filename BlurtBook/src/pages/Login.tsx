import { useState } from "react"
import "../components/styles/Login.css"
import "../components/styles/App.css"
// import "BlurtBook/src/components/style/Login.css"

export default function Login(){
    //change these for security
    const [username, changeUsername] = useState("")
    const [password, changePassword] = useState("")

    const Login = ()=>{
        // console.log(username);
        // console.log(password);
        fetch("http://localhost:3000/users/login", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        }).then(res=>{
            if (res.ok){
                console.log(res.text())
            }
            else throw new Error("Error occured");
        })

    }

    return (
        <>
        <h1>Login</h1>

        <ul className="login"> 
            <li> Username </li><li> <input required type ='text'onChange={(e)=>{changeUsername(e.target.value)}}></input></li>
        </ul>
        <ul className="login">
            <li> Password </li><li> <input required type ='password'onChange={(e)=>{changePassword(e.target.value)}}></input></li>
        </ul>
        <button onClick={Login}> Confirm </button>
        <br/>

        {/* <button> Sign up </button> */}
        <br></br>
        <a href="./Sign_up" className = "signUp"> New user? Sign up!</a>

        </>
    )
}