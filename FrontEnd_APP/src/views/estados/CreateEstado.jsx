import React from 'react'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import * as API_E from '../../services/estados-service';
import * as API_U from '../../services/usuarios-services';

import { NavBar } from '../../components/navBar/NavBar'

export function CreateEstado(){

    const [ usuarios, setUsuarios] = useState([]);

    const getUsuarios = async () => {
        try 
        {
            const usuarios = await API_U.getUsuarios();
            setUsuarios(usuarios);
            console.log(usuarios);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsuarios();
    },[]);

    const [ dataForm, setDataForm ] = useState({});

    const { nombre, email, estado } = dataForm;

    const data = {
        nombre: dataForm.nombre,
        usuario: {
            email: dataForm.email,
        },
        estado: dataForm.estado,
    }

    const handleChange = (e) => {
        setDataForm({
            ...dataForm, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        try 
        {
            e.preventDefault();
            e.target.reset();
            await API_E.createEstado(data);
            setDataForm({
                nombre: '',
                usuario:{ email: '' },
                estado: ''
            });
            console.log(data);    
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row my-3 text-center">
                    <div className="col">
                        <h1>Create Estado</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={handleChange} />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="usaurio">Usuario</label>
                                <select className="form-control" id="usuario" name="email" value={email} onChange={handleChange}>
                                    <option value="">Seleccione un usuario</option>
                                    {
                                        usuarios.map(usuario => (
                                            <option key={usuario._id} value={usuario.email}>{usuario.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="estado">Estado</label>
                                <select className="form-control" id="estado" name="estado" value={estado} onChange={handleChange} required="" >
                                    <option value="">Seleccione un estado</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>
                            </div>
                            <div className="form-group d-flex justify-content-center my-3">
                                <button type="submit" className="btn btn-primary mx-3" style={{width: 8 + "rem" }}>Enviar</button>
                                <Link to="/estados" className="btn btn-secondary mx-3" style={{width: 8 + "rem" }}>Cancelar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}