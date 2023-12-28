import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import Your_Notes from './pages/Your_Notes'

function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/Your_Notes":
      component = <Your_Notes/>
      break
    
  }
  return (
    <>
    <Navbar></Navbar>
    {component}
    </>
  )
}

export default App
