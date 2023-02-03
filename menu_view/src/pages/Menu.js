import { Link } from "react-router-dom";

export function Menu() {
    return(
        <>        
        <button><Link to={"/ingrida"}>Ingrida</Link></button>
        <button><Link to={"/daiva"}>Daiva</Link></button>
        <button><Link to={"/mantas" }>Mantas</Link></button>
        <button><Link to={"/mantvydas" }>Mantvydas</Link></button>
        <button><Link to={"/vilmantas" }>Vilmantas</Link></button>
        <button><Link to={"/vladislav" }>Vladislav</Link></button>
        </>
    )
}