import {Detalles} from "./Detalles/Detalles"
import {Fecha}  from "./Fecha/Fecha"
import {FeedbackReserva} from "./FeedbackReserva/FeedbackReserva"
import {FormPago} from "./FormPago/FormPago"
import {Perfil} from "../../Componentes/Perfil/Perfil"
import {Logo} from "../../Componentes/Logo/Logo"

export const Registro = () => {
    return <>
        <p>Solicitud  de Reserva</p>
        <Detalles />
        <Logo />
        <Fecha />
        <FeedbackReserva />
        <FormPago />
        <Perfil />
    </>
    
}
