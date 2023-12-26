import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Toggle from './Toggle';

function Input() {
  const [Ptext, PsetText] = useState("text");//P denotes private
  const [text, setText] = useState("text");
  //a "public" and "private" variable of text is used becuase the only way that i know to read the text input is 
  //with onChange, meaning the text is constantly updated
  //I want it so that the text displayed only changes once submit is hit, but i also don't know the proper way to do that

  const Submit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div>
      <form className='textfield' onSubmit={Submit}>
        <input type = 'text' onChange={(e) => PsetText(e.target.value)}></input>
        <input type = 'submit' onClick={() => setText(Ptext)}></input>
      </form>      

      <Toggle text = {text}></Toggle>
    </div>    
  )
}

export default Input
