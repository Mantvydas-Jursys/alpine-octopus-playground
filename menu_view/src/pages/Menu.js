import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export function Menu() {
    return(
        <>           
        <Link to={"/ingrida"}><Button className="m-2 ms-5">Ingrida</Button></Link>
        <Link to={"/daiva"}><Button className="m-2">Daiva</Button></Link>
        <Link to={"/mantas" }><Button className="m-2">Mantas</Button></Link>
        <Link to={"/mantvydas" }><Button className="m-2">Mantvydas</Button></Link>
        <Link to={"/vilmantas" }><Button className="m-2">Vilmantas</Button></Link>
        <Link to={"/vladislav" }><Button className="m-2">Vladislav</Button></Link>        
        </>
    )
}