import { useState } from "react"
import Note from "../Note";
export default function Your_Notes(){
    const [notes, setNotes] = useState(["AP US History Notes", "AP Micro Notes"]);
    // const CreateNewNote = ()=> NoteInProgress();
    const [newNoteActive, toggleNewNoteActive] = useState(false);

    const createNewNote = ()=>{
        setNotes(notes.concat(""))
        console.log("this works")
    }
    return (
        <>
            <h1> Your Notes </h1>
            <br></br>
            <button onClick={createNewNote}> + new note </button>
            <br></br>
            <br></br>
            <NoteInProgress active = {newNoteActive}></NoteInProgress>

            {notes.map(note => (
                <Note name={note}></Note>
            ))}
        </>
    )
}

function NoteInProgress(prop: any){
    if (prop.active === "true"){
        return (
            <>
            <div>
                new note
            </div>
            <br></br>
            </>
        )
    }
    else if (prop.active === "false"){
        
    } 

}