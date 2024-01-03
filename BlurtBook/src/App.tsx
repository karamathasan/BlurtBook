import './components/styles/App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Your_Notes from './pages/Your_Notes'
import Creating_new_note from './pages/Creating_new_note'

function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/Your_Notes":
      component = <Your_Notes/>
      break
    case "/Your_Notes/creating_new_note": 
      component = <Creating_new_note></Creating_new_note>
    
  }
  // if (window.location.pathname.includes(encodeURI()))
  return (
    <>
    <Navbar></Navbar>
    {component}
    </>
  )
}

export default App
