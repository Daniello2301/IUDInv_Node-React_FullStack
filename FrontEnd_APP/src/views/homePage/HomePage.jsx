import React from "react";

import { NavBar } from "../../components/navBar/NavBar";
import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <>
        <NavBar />
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex justify-content-center">
                    <div className="card" style={{width: 18 + "rem" }}>
                        <div class="card-body text-center">
                            <h5 class="card-title">Inventario IUD</h5>
                            <h6 class="card-subtitle mb-2 text-muted"> Gestion de inventario </h6>
                            <div className="d-flex justify-content-center mt-5" >
                                <Link to="/inventarios" className="btn btn-primary mx-2">Listar Inventarios</Link>
                                <Link to="/inventarios/create" className="btn btn-primary m-x2">Crear Inventario</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{width: 18 + "rem" }}>
                        <div class="card-body text-center">
                            <h5 class="card-title">Usuarios IUD</h5>
                            <h6 class="card-subtitle mb-2 text-muted"> Gestion de usaurios </h6>
                            <div className="d-flex justify-content-center mt-5" >
                                <Link to="/usuarios" className="btn btn-primary mx-2">Listar Usuarios</Link>
                                <Link to="/usuarios/create" className="btn btn-primary m-x2">Crear Usaurio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div className="card" style={{width: 18 + "rem" }}>
                        <div class="card-body text-center">
                            <h5 class="card-title">Marcas IUD</h5>
                            <h6 class="card-subtitle mb-2 text-muted"> Gestion de marcas </h6>
                            <div className="d-flex justify-content-center mt-5" >
                                <Link to="/marcas" className="btn btn-primary mx-2">Listar Marcas</Link>
                                <Link to="/marcas/create" className="btn btn-primary m-x2">Crear Marca</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: 18 + "rem" }}>
                        <div class="card-body text-center">
                            <h5 class="card-title">Tipos de Equipos IUD</h5>
                            <h6 class="card-subtitle mb-2 text-muted"> Gestion de Tidos de Equipos </h6>
                            <div className="d-flex justify-content-center mt-5" >
                                <Link to="/tipos" className="btn btn-primary mx-2">Listar Tipos</Link>
                                <Link to="/tipos/create" className="btn btn-primary m-x2">Crear Tipo</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card" style={{width: 18 + "rem" }}>
                        <div class="card-body text-center">
                            <h5 class="card-title">Estados de Equipos IUD</h5>
                            <h6 class="card-subtitle mb-2 text-muted"> Gestion de Estados de Equipo </h6>
                            <div className="d-flex justify-content-center mt-5" >
                                <Link to="/usuarios" className="btn btn-primary mx-2">Listar Estados</Link>
                                <Link to="/usuarios/create" className="btn btn-primary m-x2">Crear Estado</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}