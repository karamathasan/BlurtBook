import { useState } from "react"
import "../components/styles/Note.css"

export default function Creating_new_note(){
    const [topic, setTopic] = useState("");
    const [notes, setNotes] = useState("");
    const [textWidth, updateTextWidth] = useState(window.innerWidth/10);

    const postNote = ()=>{

        fetch("http://localhost:3000/notes", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "topic": topic,
                "notes": notes
            })
        }).then(res=>{
            if (res.ok){
                return res.text();
            }
            else{
                throw new Error("Network error");
            }
        }).then(text=>{

            console.log(text);
        })

    }

    return (
        <>
        {/* {updateTextWidth(window.innerWidth/10)} */}
        <h1> Create New note </h1>
        
        <form onSubmit={postNote}>
            <input type = "text" placeholder="Enter topic name" onChange={(e)=>{setTopic(e.target.value)}}></input>
            <br></br>
            <ul className = "submitHeader"> 
                <li><h2> Enter your notes</h2></li>
                <li><button onClick={postNote}> Submit </button></li>
            </ul>
            
            <br></br>
            <textarea rows={5} cols={textWidth} onChange={(e)=>{setNotes(e.target.value)}}></textarea>
        </form>

        </>
    )
}