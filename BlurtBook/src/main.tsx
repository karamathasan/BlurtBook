import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Input from './Input'
import Note from './Note'
import './index.css'
import Toggle from './Toggle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Input />
  </React.StrictMode>,
)
