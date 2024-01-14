import { useEffect, useState } from "react"
import Note from "../Note";
import "../components/styles/Note.css"


export default function Your_Notes(){
    const [topics, setTopics] = useState(["AP US History Notes", "AP Micro Notes"]);
    //joe's id '65a13b6973f7995b127e5b4e'
    // setTopics(users.)

    fetch("http:/localhost:3000/users", {
        method:"get",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if (res.ok){
            console.log(res.type);
            // setTopics(res.body)
        }
        else{
            throw new Error("Network error");
        }
    }).then(text=>{
        console.log(text);
    })

    const redirect = ()=>{
        window.location.href += "/creating_new_note"
    }

    return (
        <>
            <h1> Your Notes </h1>
            <br></br>
            <button onClick={redirect}> + new note </button>
            <br></br>
            <br></br>

            {topics.map(topic => (
                <Note name={topic}></Note>
            ))}

        </>
    )
}
