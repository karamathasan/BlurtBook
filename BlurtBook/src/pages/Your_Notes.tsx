import { useState } from "react"
import Note from "../Note";
import "../Note.css"
export default function Your_Notes(){
    const [notes, setNotes] = useState(["AP US History Notes", "AP Micro Notes"]);
    // const CreateNewNote = ()=> NoteInProgress();
    const [newNoteActive, toggleNewNoteActive] = useState(false);

    const createNewNote = ()=>{
        // setNotes(notes.concat(""))
        toggleNewNoteActive(!newNoteActive);
        console.log("this works")
    }
    return (
        <>
            <h1> Your Notes </h1>
            <br></br>
            <button onClick={createNewNote}> + new note </button>
            <br></br>
            <br></br>

            {notes.map(note => (
                <Note name={note}></Note>
            ))}

            <NoteInProgress active = {String(newNoteActive)}></NoteInProgress>
        </>
    )
}

function NoteInProgress(prop: any){
    if (prop.active == "true"){
        return (
            <>
            <div className = "note">
                <form onSubmit={() => console.log()}>
                <ul>
                    <li><input type = "text" placeholder = "Enter note name"></input></li>
                    {/* <li><input type = "submit" value={"Confirm"}></input></li> */}
                    <li> <button className ="confirm" type = "submit"> Confirm </button></li>
                </ul>
                </form>
            </div>
            <br></br>
            </>
        )
    }
    else if (prop.active == "false"){
        
    } 

}