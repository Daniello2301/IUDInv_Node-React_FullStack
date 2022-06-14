import React from "react";
import { useState, useEffect } from "react";

import * as API from '../../services/iventarios-services';
import * as API_U from "../../services/usuarios-services";
import * as API_M from "../../services/marcas-service";
import * as API_T from "../../services/tipos-service";
import * as API_E from "../../services/estados-service";
import { Link, useParams } from "react-router-dom";
import { NavBar } from "../../components/navBar/NavBar";

export function EditarInventario(){

    const [usuarios, setUsuarios] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [tiposEquipo, setTiposEquipos] = useState([]);
    const [estadosEquipo, setEstadosEquipos] = useState([]);
    const [inventario, setInventario] = useState({});
    const { id } = useParams();

    const getInventario = async () => {
       try 
       {
            const { response } = await API.getInventario(id);
            setInventario(response);
            console.log(response);
       } catch (error) {
          console.log(error); 
       }
    }

    const getUsuarios = async () => {
        try {
            const { response } = await API_U.getUsuarios();
            setUsuarios(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const getMarcas = async () => {
        try {
            const { response } = await API_M.getMarcas();
            setMarcas(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const getTiposEquipos = async () => {
        try {
            const { response } = await API_T.getTipos();
            setTiposEquipos(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const getEstadosEquipos = async () => {
        try {
            const { response } = await API_E.getEstados();
            setEstadosEquipos(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsuarios();
        getMarcas();
        getTiposEquipos();
        getEstadosEquipos();
    },[]);

    useEffect(() => {
        getInventario();
    },[id]);

    useEffect(() => {
        setDataForm({
            serial: inventario.serial,
            marca: inventario.marca,
            descripcion: inventario.descripcion,
            
        });
    },[inventario]);

    const [dataForm, setDataForm] = useState({});

    const { serial='', modelo='', descripcion='', foto='', color='', 
        fechaCompra='', precio='', estado='', email='', marca='', estadoEquipo='', tipoEquipo='' } = dataForm;

    const handleChange = (e) => {
        const { name, value } = target;
        setDataForm({
            ...dataForm,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }


    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row my-3 text-center">
                    <div className="col" >
                        <h1>Editar Inventario</h1>
                    </div>
                </div>
                <div className="row" >
                    <div className="col d-flex justify-content-center" >
                        <div className="card mb-3" style={{width: 80+ "%"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={inventario?.foto} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit} >
                                            <div className="row">
                                                <div className="form-group">
                                                    <label htmlFor="serial">Serial</label>
                                                    <input type="text" className="form-control" id="serial" name="serial" value={inventario.serial} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="modelo">Modelo</label>
                                                    <input type="text" className="form-control" id="modelo" name="modelo" value={inventario.modelo}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="descripcion">Descripcion</label>
                                                    <input type="text" className="form-control" id="descripcion" name="descripcion" value={inventario.descripcion} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="foto">Foto</label>
                                                    <input type="text" className="form-control" id="foto" name="foto" value={inventario.foto}/>
                                                </div>
                                            </div> 
                                            <div className="row">
                                                <div className="form-group">
                                                    <label htmlFor="color">Color</label>
                                                    <input type="color" className="form-control" id="color" name="color" value={inventario.color}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="fechaCompra">Fecha de Compra</label>
                                                    <input type="date" className="form-control" id="fechaCompra" name="fechaCompra" value={inventario.fechaCompra}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="precio" >Precio</label>
                                                    <input type="number" className="form-control" id="precio" name="precio" value={inventario.precio}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="estado">Estado</label>
                                                    <select className="form-control" id="estado" name="estado">
                                                        <option value="">Seleccione el estado</option>
                                                        <option value="Activo">Activo</option>
                                                        <option value="Inactivo">Inactivo</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group my-2 ">
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
                                                <div className="form-group my-2">
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
                                                <div className="form-group my-2">
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
                                                <div className="form-group my-2">
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
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
