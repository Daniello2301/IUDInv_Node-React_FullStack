import React from "react";

import {useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";

import * as API from '../../services/marcas-service';
import * as APIU from '../../services/usuarios-services';

import { NavBar } from "../../components/navBar/NavBar";

export function CreateMarca() {

    const [usuarios, setUsuarios] = useState([]);

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [estado, setEstado] = useState('');

    const getUsuarios = async () => {
        try {
            const usuarios = await APIU.getUsuarios();
            setUsuarios(usuarios);
            console.log(usuarios);
        } catch (error) {
            console.log(error);
        }
    }

    const data ={
        nombre: nombre,
        usuario:{ email: email },
        estado: estado
    }

    const handleSubmit = async (e) => {
        try 
        {
            e.preventDefault();
            e.target.reset();
            await API.createMarca(data);
            setNombre('');
            setEmail('');
            setEstado('');
            console.log(data);  
        } catch (error) {
            console.log(error);
            alert(error.request?.response);
        }
        
    }

    useEffect(() => {
        getUsuarios();
    },[]);

    return (
        <>
        <NavBar />
        <div className="container">
                <div className="row">
                    <div className="col-md-12  text-center">
                        <h1>Crear Marca</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 w-100 d-flex justify-content-center ">
                        <form onSubmit={handleSubmit} className="form_container w-50" >
                            <div class="mb-3">
                                <label for="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value) } required='' />
                            </div>
                            <div className="fomr-group mb-3">
                                <label for="Select" className="form-label">Usuario</label>
                            <select id="Select" className="form-select" name="usuario" onChange={e => setEmail(e.target.value) }  value={email} required='' >
                                    {
                                        usuarios.map(usuario => (
                                            <option key={usuario._id} value={usuario.email}>{usuario.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label for="estado" className="form-label">Estado</label>
                                <select id="estado" className="form-select" name="estado" value={estado} onChange={e => setEstado(e.target.value)} required="" >
                                    <option >--Select--</option>
                                    <option value="Activo" >Activo</option>
                                    <option value="Inactivo" >Inactivo</option>
                                </select>
                            </div>
                            <div className="form-group mb-3 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary mx-3" style={{width: 8 + "rem" }}> Crear</button>
                                <Link to="/marcas" className="btn btn-secondary mx-3" style={{width: 8 + "rem" }}> Cancelar </Link>
                            </div>
                        </form>               
                    </div>
                </div>
            </div>
        </>
    );
}