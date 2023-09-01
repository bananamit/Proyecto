import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Login} from './Paginas/Login/Login.jsx'
import {Registro} from "./Paginas/Registro/Registro.jsx"
import { Home } from './Paginas/Home/Home.jsx'
import { AlojamientoPub } from './Paginas/AlojamientoPub/AlojamientoPub.jsx'
import { ComprobarReserva } from './Paginas/ComprobarReserva/ComprobarReserva.jsx'
import { Mensajes } from './Paginas/Mensajes/Mensajes.jsx'
import { ReservaR } from './Paginas/ReservaR/ReservaR.jsx'
import { VisualizacionA } from './Paginas/VisualizacionA/VisualizaciónA.jsx'
import { AptosFinales } from './Componentes/AptosFinales/Aptos Finales.jsx'
import { Logo } from './Componentes/Logo/Logo.jsx'
import { Mapa } from './Componentes/Mapa/Mapa.jsx'
import { Perfil } from './Componentes/Perfil/Perfil.jsx'
import { Fotos } from './Componentes/Fotos/Fotos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <Registro />
    <Home />
    <AlojamientoPub />
    <ComprobarReserva/>
    <Mensajes/>
    <ReservaR/>
    <VisualizacionA/>
    <AptosFinales/>
    <Logo/>
    <Mapa/>
    <Perfil/>
    <Fotos/>

  </React.StrictMode>,
)
