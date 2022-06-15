import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../services/estados-service';
import { NavBar } from '../../components/navBar/NavBar'
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export function ListEstados(){
    
    const [estados, setEstados] = useState([]);

    const getEstados = async () => {
        Swal.fire({
            icon: 'success',
            title: 'Cagando..',
            showConfirmButton: false,
            timer: 500
        })
        const estados = await API.getEstados();
        setEstados(estados);
        console.log(estados);
    }

    useEffect(() => {
        getEstados();
    },[])

    const handleDelete = async (id) => {
        await API.deleteEstado(id);
        getEstados();
        console.log(id);
    }

    return (
        <>
         <NavBar />
        <div className="container">
            <div className="row my-3 text-center">
                <div className="col" >
                    <h1>Lista de Estados</h1>
                </div>
                <div className="col">
                    <Link to={`/estados/create`} className="btn btn-primary w-50">Crear Estado</Link>
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
                                estados.map(estado => (
                                    <tr key={estado._id} >
                                        <th scope="row"> {estado._id} </th>
                                        <td> {estado.nombre} </td>
                                        <td> {estado.usuario?.nombre} </td>
                                        <td> {estado.estado} </td>
                                        <td> <Link to={`/estados/edit/${estado._id}`} className="btn btn-secondary"> <FaEdit/> </Link> </td>
                                        <td> <button onClick={() => handleDelete(estado._id)} className="btn btn-danger"> <FaTrash/> </button> </td>                                   
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