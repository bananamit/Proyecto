import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Login} from './Paginas/Login/Login.jsx'
import {Registro} from "./Paginas/Registro/Registro.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <Registro />
  </React.StrictMode>,
)
