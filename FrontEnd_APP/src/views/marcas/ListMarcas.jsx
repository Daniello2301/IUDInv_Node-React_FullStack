import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import {NavBar} from "../../components/navBar/NavBar";
import * as API from '../../services/marcas-service';
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss';

export function ListMarcas(){

    const [marcas, setMarcas] = useState([]);

    const getMarcas = async () => {
        Swal.fire({
            icon: 'success',
            title: 'Cagando..',
            showConfirmButton: false,
            timer: 800
        })
        const marcas = await API.getMarcas();
        setMarcas(marcas);
        console.log(marcas);
    };

    useEffect(() => {
        getMarcas();
    },[])

    const handleDelete = async (id) => {
        try {
            await API.deleteMarca(id);
            getMarcas();
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <NavBar />
            <div className="container">
            <div className="row my-3 text-center">
                <div className="col" >
                    <h1>Lista de marcas</h1>
                </div>
                <div className="col">
                    <Link to={`/marcas/create`} className="btn btn-primary w-50">Crear Marca</Link>
                </div>
            </div>
            <div className="row" >
                <div className="col">
                <div className="col col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>   
                            </tr>
                        </thead>
                        <tbody>
                            {
                                marcas.map(marca => (
                                <tr key={marca._id} >
                                    <th scope="row"> {marca._id} </th>
                                    <td> {marca.nombre} </td>
                                    <td> {marca.usuario?.nombre} </td>
                                    <td> {marca.estado} </td>
                                    <td> <Link to={`/marcas/edit/${marca._id}`} className="btn btn-secondary"> <FaEdit/> </Link> </td>
                                    <td> <button className="btn btn-danger" onClick={() => {handleDelete(marca._id)}} > <FaTrash /> </button> </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}