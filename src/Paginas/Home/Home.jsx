import { Logo } from "../../Componentes/Logo/Logo"
import { Perfil } from "../../Componentes/Perfil/Perfil"
import { RegistraAlojamiento } from "./RegistraAlojamiento/RegistraAlojamiento"
import { Search } from "./Search/Search"
import { Filtros } from "./Filtros/Filtros"
import { Inmobiliario } from "./Inmobiliario/Inmobiliario"

export const Home = () => {
    return <>
        <p>Pagina Principal</p>
        <Logo />
        <Perfil />
        <RegistraAlojamiento />
        <Search />
        <Filtros />
        <Inmobiliario />
    </>
    
}