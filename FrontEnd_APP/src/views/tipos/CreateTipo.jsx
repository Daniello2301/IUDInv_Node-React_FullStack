import React from 'react'

import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import { NavBar } from '../../components/navBar/NavBar'

import * as API_T from '../../services/tipos-service';
import * as API_U from '../../services/usuarios-services';


export function CreateTipo(){

    const [ usuarios, setUsuarios] = useState([]);

    const getUsuarios = async () => {
        try {
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
        })
        
    }

    const handleSubmit = async (e) => {
        try 
        {
            e.preventDefault();
            e.target.reset();
            await API_T.createTipo(data);
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
                <div className="row">
                    <div className="col-md-12  text-center">
                        <h1>Create Tipo</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 w-100 d-flex justify-content-center">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-2" style={{width: 40 + "rem" }}>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={handleChange} required='' />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="usuario">Usuario</label>
                                <select className="form-control" id="usuario" name="email" value={email} onChange={handleChange} required=''>
                                    {
                                        usuarios.map(usuario => (
                                            <option key={usuario._id} value={usuario.email}>{usuario.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="estado">Estado</label>
                                <select className="form-control" id="estado" name="estado" value={estado} onChange={handleChange} required=''>
                                    <option value="">Seleccione un estado</option>
                                    <option value="Activo">ACTIVO</option>
                                    <option value="Inactivo">INACTIVO</option>
                                </select>
                            </div>
                            <div className="form-group my-3 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary mx-3" style={{width: 8 + "rem" }}> Crear</button>
                                <Link to="/tipos" className="btn btn-secondary mx-3" style={{width: 8 + "rem" }}> Cancelar </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}