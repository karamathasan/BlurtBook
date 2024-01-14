import { useState } from "react"
import "../components/styles/SignUp.css"

export default function SignUp(){
    const [username, changeUsername] = useState("")
    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")

    const SignUp = ()=>{
        fetch("http://localhost:3000/users", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:username,
                email:email,
                password:password
            })
        }).then(res=>{
            if (res.ok){
                return res.text()
            }
            else {
                // console.log(res.text())
                throw new Error("Error occured");
            }
        }).then(data=>{
            window.location.href = data
            console.log(data)
        })
    }

    const APItest = ()=>{
        fetch("http://localhost:3000/", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                message:"api test"
            })
        }).then(res=>{
            if (res.ok){
                return res.text()
            }
            else throw new Error("Error occured");
        }).then(data=>{
            console.log(data)
        })
    }
    return (
        <>
        <h1>Sign Up</h1>

        <ul className="login"> 
            <li> Username </li><li> <input required type ='text'onChange={(e)=>{changeUsername(e.target.value)}}></input></li>
        </ul>
        <ul className="login"> 
            <li> Email </li><li> <input required type ='text'onChange={(e)=>{changeEmail(e.target.value)}}></input></li>
        </ul>
        <ul className="login">
            <li> Password </li><li> <input required type ='password'onChange={(e)=>{changePassword(e.target.value)}}></input></li>
        </ul>
        <button onClick={SignUp}> Confirm </button>
        <button onClick={APItest}> test </button>
        </>
    )
}