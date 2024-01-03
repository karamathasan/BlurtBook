import { useState } from "react"
import "../Note.css"

export default function Creating_new_note(){
    const [noteName, setNoteName] = useState("")
    const [textWidth, updateTextWidth] = useState(window.innerWidth/10)

    return (
        <>
        {/* {updateTextWidth(window.innerWidth/10)} */}
        <h1> Create New note </h1>
        <form>
            <input type = "text" placeholder="Enter note name"></input>
            <br></br>
            <h2> Enter your notes</h2>
            <br></br>
            <textarea rows={5} cols={textWidth}></textarea>
        </form>

        </>
    )
}