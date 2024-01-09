import { useEffect, useState } from "react"
import Note from "../Note";
import "../Note.css"


export default function Your_Notes(){
    const [notes, setNotes] = useState(["AP US History Notes", "AP Micro Notes"]);
    const [newNoteActive, toggleNewNoteActive] = useState(false);

    const redirect = ()=>{
        fetch("http://localhost:3000",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            // body:
        }).then(res=>{
            if (res.ok){
                console.log(res);
                return res.json();
            }
            else{
                throw new Error("Network error");
            }
        })


        window.location.href += "/creating_new_note"
        fetch("/users").then(res=>{console.log(res.ok)})

    }

    const APIcall = async ()=>{
        try {
            const response = await fetch('http://localhost:5173/', {mode:'cors'});
            console.log(response);
            const data = await response.json();
            console.log({ data })
        }
        catch (e) {
            console.log(e)
        }
    }

    // useEffect(()=>{
    //     APIcall();
    // }, [])

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
