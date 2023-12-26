import { useState } from "react";
import App from "./App";
import Note from "./Note";

function Toggle(prop: any){
    const [toggle, setToggle] = useState("false");
    const [displayText, setDisplayText] = useState("Show Text");

    let changeToggle = ()=>{
        if (toggle == "false"){
            setToggle((toggle)=>"true");
            setDisplayText("Hide Text");
        }
        else if (toggle == "true"){
            setToggle((toggle)=>"false");
            setDisplayText("Show Text");
        }
    }
    //define how to change the toggle
    return (
        <>
        <button onClick={changeToggle}>
            {displayText}
        </button>
        
        <Note active = {toggle} text = {prop.text}></Note>
        </>
    );
}

export default Toggle;