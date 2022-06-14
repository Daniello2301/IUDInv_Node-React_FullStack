import React from "react";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import * as API_I from "../../services/iventarios-services";
import * as API_U from "../../services/usuarios-services";
import * as API_M from "../../services/marcas-service";
import * as API_T from "../../services/tipos-service";
import * as API_E from "../../services/estados-service";

import { NavBar } from "../../components/navBar/NavBar";

export function CreateInventario() {

    const [marcas, setMarcas] = useState([]);

    const getMarcas = async () => {
        try 
        {
            const marcas = await API_M.getMarcas();
            setMarcas(marcas);
            console.log(marcas); 
        } catch (error) {
            console.log(error);
        }
    }

    const [tiposEquipo, setTiposEquipos] = useState([]);

    const getTipos = async () => {
        try 
        {
            const tipos = await API_T.getTipos();
            setTiposEquipos(tipos);
            console.log(tipos);
        } catch (error) {
            console.log(error);
        }
    }

    const [estadosEquipo, setEstadosEquipos] = useState([]);

    const getEstados = async () => {
        try {
            const estados = await API_E.getEstados();
            setEstadosEquipos(estados);
            console.log(estados);
        } catch (error) {
            console.log(error);
        }
    }

    const [usuarios, setUsuarios] = useState([]);

    const getUsuarios = async () => {
        try{
            const usuarios = await API_U.getUsuarios();
            setUsuarios(usuarios);
            console.log(usuarios);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getMarcas();
        getTipos();
        getEstados();
        getUsuarios();
    },[]);

    const [ dataForm, setDataForm ] = useState({});

    const { serial, modelo, descripcion, foto, color, 
                fechaCompra, precio, estado, email, marca, estadoEquipo, tipoEquipo } = dataForm;
    
    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    }

    const data = {
        serial: dataForm.serial,
        modelo: dataForm.modelo,
        descripcion: dataForm.descripcion,
        foto: dataForm.foto,
        color: dataForm.color,
        fechaCompra: dataForm.fechaCompra,
        precio: dataForm.precio,
        estado: dataForm.estado,
        usuario: {
            email: dataForm.email,
        },
        marca: {
            nombre: dataForm.marca,
        },
        tipoEquipo: {
            nombre: dataForm.tipoEquipo,
        },
        estadoEquipo: {
            nombre: dataForm.estadoEquipo,
        }
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            e.target.reset();
            await API_I.createInventario(data);
            console.log(data);
            setDataForm({
                serial: '',
                modelo: '',
                descripcion: '',
                foto: '',
                color: '',
                fechaCompra: '',
                precio: '',
                estado: '',
                usuario: { email: '' },
                marca: { nombre: '' },
                estadoEquipo: { nombre: '' },
                tipoEquipo: { nombre: '' }

            })
        } catch (error) {
            
        }
    }

    return(
        <>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col my-2 text-center">
                        <h1>Create Inventario</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex flex-colum justify-content-center">
                        <form onSubmit={handleSubmit} style={{width: 80 + "%"}} className='p-5 shadow-lg' >
                            <div className="row" >
                                <div className="form-group my-2 w-50">
                                    <label htmlFor="serial" >Serial</label>
                                    <input type="text" className="form-control border-secondary" id="serial" name="serial" value={serial} onChange={handleChange} />
                                </div>
                                <div className="form-group my-2 w-50">
                                    <label htmlFor="modelo" >Modelo</label>
                                    <input type="text" className="form-control border-secondary" id="modelo" name="modelo" value={modelo} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group my-2 w-50">
                                    <label htmlFor="descripcion" >Descripcion</label>
                                    <input type="text" className="form-control border-secondary" id="descripcion" name="descripcion" value={descripcion} onChange={handleChange} />
                                </div>
                                <div className="form-group my-2 w-50">
                                    <label htmlFor="foto" >Foto</label>
                                    <input type="text" className="form-control border-secondary" id="foto" name="foto" value={foto} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="form-group my-2" style={{width: 13 + 'rem'}}>
                                    <label htmlFor="color" >Color</label>
                                    <input type="color" className="form-control border-secondary" id="color" name="color" value={color} onChange={handleChange} />
                                </div>
                                <div className="form-group my-2" style={{width: 13 + "rem"}} >
                                    <label htmlFor="fechaCompra" >Fecha de Compra</label>
                                    <input type="date" className="form-control border-secondary" id="fechaCompra" name="fechaCompra" value={fechaCompra} onChange={handleChange} />
                                </div>
                                <div className="form-group my-2" style={{width: 13 + "rem"}}>
                                    <label htmlFor="precio" >Precio</label>
                                    <input type="number" className="form-control border-secondary" id="precio" name="precio" value={precio} onChange={handleChange} />
                                </div>
                                <div className="form-group my-2" style={{width: 15 + "rem"}}>
                                    <label htmlFor="estado" >Estado</label>
                                    <select className="form-control border-secondary" id="estado" name="estado" value={estado} onChange={handleChange}>
                                        <option value="">Seleccione un estado</option>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="form-group my-2 " style={{width: 15 + "rem"}}>
                                    <label htmlFor="email" >Usuario</label>
                                    <select className="form-control border-secondary" id="email" name="email" value={email} onChange={handleChange}>
                                        <option value="">Seleccione un usuario</option>
                                        {
                                            usuarios.map(usuario => (
                                                <option key={usuario._id} value={usuario.email}>{usuario.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group my-2" style={{width: 15 + "rem"}}>
                                    <label htmlFor="marca" >Marca</label>
                                    <select className="form-control border-secondary" id="marca" name="marca" value={marca} onChange={handleChange}>
                                        <option value="">Seleccione una marca</option>
                                        {
                                            marcas.map(marca => (
                                                <option key={marca._id} value={marca.nombre}>{marca.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group my-2" style={{width: 15 + "rem"}}>
                                    <label htmlFor="estadoEquipo" >Estado Equipo</label>
                                    <select className="form-control border-secondary" id="estadoEquipo" name="estadoEquipo" value={estadoEquipo} onChange={handleChange}>
                                        <option value="">Seleccione un estado</option>
                                        {
                                            estadosEquipo.map(estadoEquipo => (
                                                <option key={estadoEquipo._id} value={estadoEquipo.nombre}>{estadoEquipo.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group my-2" style={{width: 15 + "rem"}}>
                                    <label htmlFor="tipoEquipo" >Tipo Equipo</label>
                                    <select className="form-control border-secondary" id="tipoEquipo" name="tipoEquipo" value={tipoEquipo} onChange={handleChange}>
                                        <option value="">Seleccione un tipo</option>
                                        {
                                            tiposEquipo.map(tipoEquipo => (
                                                <option key={tipoEquipo._id} value={tipoEquipo.nombre}>{tipoEquipo.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row my-5">
                                <button type="submit" className="btn btn-primary my-2">Crear</button>
                                <Link to="/inventarios" className="btn btn-secondary">Volver</Link>
                            </div>
                        </form>             
                    </div>
                </div>
            </div>
        </>
    )
}