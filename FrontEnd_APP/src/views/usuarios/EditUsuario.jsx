import React from 'react';

import Swal from 'sweetalert2';

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect} from 'react';	
import * as API from '../../services/usuarios-services';
import { NavBar } from '../../components/navBar/NavBar';

export function EditUsuario() {
    
        const { id } = useParams();

        const [usuario, setUsuario] = useState({});

        const { nombre, email, estado } = usuario;

        const getUsuario = async () => {
            const usuario = await API.getUsuario(id);
            setUsuario(usuario);
            console.log(usuario);
        }

        useEffect(() => {
            getUsuario();
        },[id]);


        const handleSubmit = async (e) => {

            e.preventDefault();
            try {
                await API.updateUser(id, usuario);
                Swal.fire({
                    title: 'Usuario actualizado',
                    text: 'El usuario se actualizó correctamente',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                console.log(usuario);
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo actualizar el usuario',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
    
            } 
        }

        const handleChange = (e) => {
            setUsuario({...usuario, [e.target.name]: e.target.value});
        }


        return (
            <>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">Editar Usuario</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" name="nombre" value={nombre} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" value={email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Estado</label>
                                    <select className="form-control" name="estado" value={estado} onChange={handleChange}>
                                        <option value="">Seleccione un estado</option>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Actualizar</button>
                                    <Link to="/usuarios" className="btn btn-secondary">Volver</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
}
