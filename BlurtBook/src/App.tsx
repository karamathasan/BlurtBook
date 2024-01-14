import './components/styles/App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Your_Notes from './pages/Your_Notes'
import Creating_new_note from './pages/Creating_new_note'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/Log_in":
      component = <Login></Login>
      break
    case "/Sign_up":
      component = <SignUp></SignUp>
      break
    case "/Your_Notes":
      component = <Your_Notes/>
      break
    case "/Your_Notes/creating_new_note": 
      component = <Creating_new_note></Creating_new_note>
      break
    
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
