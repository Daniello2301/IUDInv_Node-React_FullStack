import React from "react";
import { useState} from "react";

import * as API from '../../services/usuarios-services'

import { NavBar } from "../../components/navBar/NavBar";

export function CreateUsuario(){

    const [usuario, setUsuario] = useState({});

    const {nombre = "", email = "", contrasena = "", estado = " "} = usuario;


    const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.reset();
        await API.createUser(usuario);
        setUsuario({nombre: '', email: '', contrasena: '', estado: ''});
        console.log(usuario);
    }

    return(
        <>
        <NavBar />
        <div className="container">
                <div className="row">
                    <div className="col-md-12  text-center">
                        <h1>Create Usuario</h1>
                    </div>
                </div>
                <div clasName="row">
                    <div className="col-md-12 w-100 d-flex justify-content-center ">
                        <form onSubmit={handleSubmit} className="form_container w-50" >
                            <div class="mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" name="nombre" value={nombre} onChange={e => handleChange(e) } required='' />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={e => handleChange(e) } value={email} required='' />
                            </div>
                            <div class="mb-3">
                                <label for="contrasena" className="form-label">Password</label>
                                <input type="password" className="form-control" id="contrasena"name="contrasena" onChange={e => handleChange(e) } value={contrasena} required='' />
                            </div>
                            <div class="mb-3">
                                <label for="Select" className="form-label">Estado</label>
                                <select id="Select" className="form-select" name="estado" onChange={e => handleChange(e) }  value={estado} required='' >
                                    <option>--Select--</option>
                                    <option value="Activo" >Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>               
                    </div>
                </div>
            </div>
        </>
        )

}