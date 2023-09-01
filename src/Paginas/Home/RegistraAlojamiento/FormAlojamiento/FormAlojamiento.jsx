import { Fotos } from "../../../../Componentes/Fotos/Fotos"
import {Feedback} from "./Feedback/Feedback"
import {Mapa} from "../../../../Componentes/Mapa/Mapa"
import {Logo} from "../../../../Componentes/Logo/Logo"
import { Perfil } from "../../../../Componentes/Perfil/Perfil"


export const FormAlojamiento = () => {
    return <>
        <p>Registrar alojamiento</p>
        <Fotos />
        <Feedback />
        <Mapa />
        <Logo />
        <Perfil />
    </>
    
}
