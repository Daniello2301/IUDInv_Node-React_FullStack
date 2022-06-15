import React from 'react'
import { useState, useEffect } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as API from '../../services/tipos-service';
import { NavBar } from '../../components/navBar/NavBar'
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export function ListTipos() {

    const [tipos, setTipos] = useState([]);

    const getTipos = async () => {
        Swal.fire({
            icon: 'success',
            title: 'Cagando..',
            showConfirmButton: false,
            timer: 800
        })
        const tipos = await API.getTipos();
        setTipos(tipos);
        console.log(tipos);
    }

    useEffect(() => {
        getTipos();
    },[])

    const handleDelete = async (id) => {
        await API.deleteTipo(id);
        getTipos();
        console.log(id);
    }


  return (
    <>
        <NavBar />
        <div className="container">
            <div className="row my-3 text-center">
                <div className="col" >
                    <h1>Lista de Tipos</h1>
                </div>
                <div className="col">
                    <Link to={`/tipos/create`} className="btn btn-primary w-50">Crear Tipo</Link>
                </div>
            </div>
            <div className="row" >
                <div className="col">
                <div clasName="col col-md-12">
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
                                tipos.map(tipo => (
                                    <tr key={tipo._id} >
                                        <th scope="row"> {tipo._id} </th>
                                        <td> {tipo.nombre} </td>
                                        <td> {tipo.usuario?.nombre} </td>
                                        <td> {tipo.estado} </td>
                                        <td> <Link to={`/tipos/edit/${tipo._id}`} className="btn btn-secondary"> <FaEdit/> </Link> </td>
                                        <td> <button className="btn btn-danger" onClick={() => handleDelete(tipo._id)}> <FaTrash /> </button> </td>                                   
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