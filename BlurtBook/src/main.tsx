import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Input from './Input'
import './index.css'
import Toggle from './Toggle'
import Navbar from './Navbar'
//cd BlurtBook

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Input />
  </React.StrictMode>,
)
