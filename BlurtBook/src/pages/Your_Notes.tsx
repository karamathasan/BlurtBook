import { useState } from "react"
import Note from "../Note";
import "../Note.css"


export default function Your_Notes(){
    const [notes, setNotes] = useState(["AP US History Notes", "AP Micro Notes"]);
    const [newNoteActive, toggleNewNoteActive] = useState(false);

    const redirect = ()=>{
        // window.location.href += "/creating_new_note"
        // fetch("/users").then(res=>{console.log(res.ok)})
        fetch("/users",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user:"user 1"
            })
        }).then(res=>{
            return res.json()
        })
        .then(data=> console.log(data))
        .catch(()=>console.log("ERROR"))
    }

    return (
        <>
            <h1> Your Notes </h1>
            <br></br>
            <button onClick={redirect}> + new note </button>
            <br></br>
            <br></br>

            {notes.map(note => (
                <Note name={note}></Note>
            ))}

        </>
    )
}
