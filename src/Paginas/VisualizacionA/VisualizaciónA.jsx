import {Logo} from "../../Componentes/Logo/Logo"
import {RegistraAlojamiento} from "../../Paginas/Home/RegistraAlojamiento/RegistraAlojamiento"
import { Perfil } from "../../Componentes/Perfil/Perfil"
import { Fotos } from "../../Componentes/Fotos/Fotos"
import { Descripcion } from "./Descripcion/Descripcion"
import { Mapa } from "../../Componentes/Mapa/Mapa"
import { Reservando } from "./Reservando/Reservando"

export const VisualizacionA = () => {
    return <>
        <p>Visualizacion del alojamiento</p>
        <RegistraAlojamiento />
        <Logo />
        <Perfil />
        <Fotos />
        <Descripcion />
        <Mapa />
        <Reservando />
    </>
    
}