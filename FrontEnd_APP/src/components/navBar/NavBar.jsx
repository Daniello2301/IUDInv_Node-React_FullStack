import React from "react";

import {NavLink} from "react-router-dom";

export function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <div className="container-fluid">
                <NavLink to={`/`} className="navbar-brand mx-2" >Inicio</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={`/inventarios`}   className="nav-link" >Inventarios</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to={`/usuarios`}  className="nav-link" >Usuarios</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to={`/marcas`}  className="nav-link" >Marcas</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to={`/tipos`}  className="nav-link" >Tipos</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to={`/estados`}  className="nav-link" >Estados</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
       