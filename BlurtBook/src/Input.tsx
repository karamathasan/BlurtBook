import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Toggle from './Toggle';

function Input() {
  const [text, setText] = useState("text");

  const Submit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={Submit}>
        <input type = 'text' onChange={(e) => setText(e.target.value)}></input>
        {/* <input type = 'submit'></input> */}
      </form>      

      <Toggle text = {text}></Toggle>
    </div>    
  )
}

export default Input
