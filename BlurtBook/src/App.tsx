import './components/styles/App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Your_Notes from './pages/Your_Notes'

//API_KEY: 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

function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/Your_Notes":
      component = <Your_Notes/>
      break
    // case "/Your_Notes/" + : 
    
    
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
