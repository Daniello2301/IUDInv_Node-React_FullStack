import React from "react";
import { useState, useEffect } from "react";

import * as API from '../../services/iventarios-services';
import * as API_U from '../../services/usuarios-services';
import * as API_M from '../../services/marcas-service';
import * as API_E from '../../services/estados-service';
import * as API_T from '../../services/tipos-service';
import { Link, useParams } from "react-router-dom";
import { NavBar } from "../../components/navBar/NavBar";

import Swal from 'sweetalert2';
import "sweetalert2/src/sweetalert2.scss";
import dayjs from "dayjs";
import "dayjs/locale/es"

export function EditarInventario(){

    const { id } = useParams();
    const [inventario, setInventario] = useState({});
    const [usuarios, setUsuarios] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [estadosEquipo, setEstadosEquipo] = useState([]);
    const [tiposEquipo, setTiposEquipo] = useState([]);


    const getTiposEquipo = async () => {
        try {
            const tiposEquipo = await API_T.getTipos();
            setTiposEquipo(tiposEquipo);
            console.log(tiposEquipo);
        } catch (error) {
            consoler.log(error);
        }
    }

    const getEstadosEquipos = async () => {
        try {
            const estadosEquipo = await API_E.getEstados();
            setEstadosEquipo(estadosEquipo);
            console.log(estadosEquipo);
        } catch (error) {
            
        }
    } 

    const getMarcas = async () => {
        try {
            const marcas = await API_M.getMarcas();
            setMarcas(marcas);
            console.log(marcas);
        } catch (error) {
            console.log(error);
        }
    }

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

    const getInventario = async () => {
       try 
       {
        const inventario = await API.getInventario(id);
        setInventario(inventario);
        console.log(inventario);
       } catch (error) {
          console.log(error); 
       }
    }

    useEffect(() => {
        getUsuarios();
        getMarcas();
        getEstadosEquipos();
        getTiposEquipo();
    },[])

    useEffect(() => {
        setDataForm({
            serial: inventario.serial,
            modelo: inventario.modelo,
            descripcion: inventario.descripcion,
            foto: inventario.foto,
            color: inventario.color,
            fechaCompra: inventario.fechaCompra,
            precio: inventario.precio,
            estado: inventario.estado,
            usuario: inventario.usuario,
            marca: inventario.marca,
            estadoEquipo: inventario.estadoEquipo,
            tipoEquipo: inventario.tipoEquipo

        });
    },[inventario]);

    useEffect(() => {
        getInventario();
    },[id]);

    const [dataForm, setDataForm] = useState({});

    const { serial='', modelo='', descripcion='', foto='', color='', 
        fechaCompra='', precio='', estado='', usuario='', marca='', estadoEquipo='', tipoEquipo='' } = dataForm;

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inventario = {
            serial,
            modelo,
            descripcion,
            foto,
            color,
            fechaCompra,
            precio,
            estado,
            usuario:{
                email: usuario
            },
            marca:{
                nombre: marca
            },
            estadoEquipo:{
                nombre: estadoEquipo
            },
            tipoEquipo:{
                nombre: tipoEquipo
            }
        }

        try {
            const response = await API.updateInventario(id, inventario);
            console.log(response);

            Swal.fire({
                icon: 'success',
                title: 'Actualizado!',
                text: 'Se ha actualizado el inventario correctamente!!',
                showConfirmButton: true,                
            })
        } catch (error) {
            console.log(error);
        }
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
                        <div className="card mb-3" style={{width: 90+ "%"}}>
                            <div className="row g-0">
                                 <div className="col-md-4">
                                <img src={inventario.foto} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                         <form onSubmit={handleSubmit}>
                                            <div className="row my-2">
                                                <div className="form-group" style={{width: 10+ "rem"}}>
                                                    <label htmlFor="serial">Serial</label>
                                                    <input type="text" className="form-control" id="serial" name="serial" value={serial} onChange={handleChange} />
                                                </div>
                                                <div className="form-group" style={{width: 10+ "rem"}}>
                                                    <label htmlFor="modelo">Modelo</label>
                                                    <input type="text" className="form-control" id="modelo" name="modelo" value={modelo} onChange={handleChange} />
                                                </div>
                                                <div className="form-group" style={{width: 10+ "rem"}}>
                                                    <label htmlFor="descripcion">Descripcion</label>
                                                    <input type="text" className="form-control" id="descripcion" name="descripcion" value={descripcion} onChange={handleChange} />
                                                </div>
                                                <div className="form-group" style={{width: 10+ "rem"}}>
                                                    <label htmlFor="foto">Foto</label>
                                                    <input type="text" className="form-control" id="foto" name="foto" value={foto} onChange={handleChange} />
                                                </div>
                                            </div> 
                                            <div className="row my-2 d-flex justify-content-center">
                                                <div className="form-group"  style={{width: 8+ "rem"}}>
                                                    <label htmlFor="color">Color</label>
                                                    <input type="text" className="form-control" id="color" name="color" value={color} onChange={handleChange} />
                                                </div>
                                                <div className="form-group" style={{width: 10 + "rem"}}>
                                                    <label htmlFor="fechaCompra">Fecha de Compra</label>
                                                    <input type="date" className="form-control" id="fechaCompra" name="fechaCompra" value={dayjs(fechaCompra).locale("es").format('YYYY-MM-DD')} onChange={handleChange} />
                                                </div>
                                                <div className="form-group" style={{width: 8+ "rem"}}>
                                                    <label htmlFor="precio" >Precio</label>
                                                    <input type="number" className="form-control" id="precio" name="precio" value={precio} onChange={handleChange} />
                                                </div>
                                                <div className="form-group" style={{width: 8+ "rem"}}>
                                                    <label htmlFor="estado">Estado</label>
                                                    <select className="form-control" id="estado" name="estado" value={estado} onChange={handleChange} >
                                                        <option value="">Seleccione el estado</option>
                                                        <option value="Activo">Activo</option>
                                                        <option value="Inactivo">Inactivo</option>
                                                    </select>
                                                </div>
                                            </div>
                                             <div className="row">
                                                <div className="form-group my-2 " style={{width: 10 + "rem"}}>
                                                    <label htmlFor="usuario" >Usuario</label>
                                                    <select className="form-control border-secondary" id="usuario" name="usuario" value={usuario} onChange={handleChange}>
                                                        <option value="">Seleccione un usuario</option>
                                                        {
                                                            usuarios.map(usuario => (
                                                                <option key={usuario._id} value={usuario.email}>{usuario.nombre}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                 <div className="form-group my-2" style={{width: 10 + "rem"}} >
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
                                                <div className="form-group my-2" style={{width: 10 + "rem"}} >
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
                                                <div className="form-group my-2" style={{width: 10 + "rem"}}  >
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
                                            <div className="row">
                                                <div className="col d-flex justify-content-center" >
                                                    <button type="submit" className="btn btn-primary btn-block" style={{width: 10 + "rem"}} >Guardar</button>         
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <Link to={'/inventarios'} className="btn btn-secondary btn-block" style={{width: 10 + "rem"}} >Cancelar</Link>
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
