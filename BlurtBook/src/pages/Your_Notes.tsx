import { useEffect, useState } from "react"
import Note from "../Note";
import "../Note.css"


export default function Your_Notes(){
    const [topics, setTopics] = useState(["AP US History Notes", "AP Micro Notes"]);
    const [newNoteActive, toggleNewNoteActive] = useState(false);

    fetch("http:/localhost:3000/notes", {
        method:"get",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if (res.ok){
            console.log(res.type);
            res.text();
        }
        else{
            throw new Error("Network error");
        }
    }).then(text=>{
        console.log(text);
    })

    const redirect = ()=>{
        // fetch("http://localhost:3000",{
        //     method:"post",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         "message":"yes"
        //     })
        // })
        // .then(res=>{
        //     if (res.ok){
        //         return res.text();
        //     }
        //     else{
        //         throw new Error("Network error");
        //     }
        // }).then(text=>{
        //     console.log(text);
        // })


        window.location.href += "/creating_new_note"
        // fetch("/users").then(res=>{console.log(res.ok)})

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
