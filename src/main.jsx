import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './assets/useContext/MainApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
   //</React.StrictMode>,

  <BrowserRouter>
    <MainApp />
  </BrowserRouter>

)
