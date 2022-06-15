import React from "react";

import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash} from "react-icons/fa";

import * as API from '../../services/usuarios-services'

import { NavBar } from "../../components/navBar/NavBar";

import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss';

export function ListUsuarios() {

    const [usuarios, setUsuarios] = useState([]);

    const getUsuarios = async () => {
        
        Swal.fire({
            icon: 'success',
            title: 'Cagando..',
            showConfirmButton: false,
            timer: 800
          })
        const usuarios = await API.getUsuarios();
        setUsuarios(usuarios);
        console.log(usuarios);
    }

    useEffect(() => {
        getUsuarios();
    },[]);

    const handleDelete = async (id) => {
        try 
        {
            await API.deleteUser(id);
            getUsuarios();
            console.log(id);    
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
                    <h1>Lista de Usuarios</h1>
                </div>
                <div className="col">
                    <Link to={`/usuarios/create`} className="btn btn-primary w-50">Crear Usuario</Link>
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
                                <th scope="col">Email</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>   
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map(usuario => (
                                <tr key={usuario._id} >
                                    <th scope="row"> {usuario._id} </th>
                                    <td> {usuario.nombre} </td>
                                    <td> {usuario.email} </td>
                                    <td> {usuario.estado} </td>
                                    <td> <Link to={`/usuarios/edit/${usuario._id}`}><FaEdit /></Link> </td>
                                    <td> <button className="btn btn-danger" onClick={() => {handleDelete(usuario._id)}}> <FaTrash /> </button> </td>
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
  );
}