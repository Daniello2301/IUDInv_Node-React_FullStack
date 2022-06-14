import React from "react";
import { useState} from "react";
import * as API from '../../services/usuarios-services'
import Swal from "sweetalert2/dist/sweetalert2.js";
import 'sweetalert2/src/sweetalert2.scss';


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
        Swal.fire({
            title: 'Usuario creado',
            text: 'El usuario se creó correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
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
                <div className="row">
                    <div className="col-md-12 w-100 d-flex justify-content-center ">
                        <form onSubmit={handleSubmit} className="form_container w-50" >
                            <div class="mb-3">
                                <label for="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={e => handleChange(e) } required='' />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={e => handleChange(e) } value={email} required='' />
                            </div>
                            <div className="mb-3">
                                <label for="contrasena" className="form-label">Password</label>
                                <input type="password" className="form-control" id="contrasena"name="contrasena" onChange={e => handleChange(e) } value={contrasena} required='' />
                            </div>
                            <div className="mb-3">
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