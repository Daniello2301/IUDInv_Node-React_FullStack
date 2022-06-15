import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as API from "../../services/iventarios-services";

import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { NavBar } from "../../components/navBar/NavBar";
import './ListInventario.css';

export function ListInventarios(){

    const [inventarios, setInventarios] = useState([]);

    const getInventarios = async () => {
        try {
            Swal.fire({
                icon: 'success',
                title: 'Cagando..',
                showConfirmButton: false,
                timer: 500
              })
            const inventarios = await API.getInventarios();
            setInventarios(inventarios);
            console.log(inventarios);
        } catch (error) {
            console.log(error);
        }
            
    }

    useEffect(() => {
        getInventarios();
    },[]);

    return(
        <>
        <NavBar />
        <div className="container">
            <div className="row my-3 text-center">
                <div className="col" >
                    <h1>Lista de Inventarios</h1>
                </div>
                <div className="col">
                    <Link to={`/inventarios/create`} className="btn btn-primary">Agregar Inventario</Link>
                </div>           
            </div>
            <div className="row" >
                    {
                        inventarios.map(inventario => (
                            <>
                                <div key={inventario._id} className="card border-secondary position-relative" >
                                    <img src={inventario.foto} className="card-img-top" alt="image..."/>
                                    <div className="card-body">
                                        <h5 className="card-title"> { inventario.descripcion ? inventario.descripcion : "Not Disponible"} </h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> {inventario.modelo ? inventario.modelo : "No disponible" } </li>
                                        <li className="list-group-item"> {inventario.precio ? inventario.precio : "No disponibel" } </li>
                                        <li className="list-group-item"> {inventario.estado ? inventario.estado : "No disponible" } </li>
                                        <li className="list-group-item"> {inventario.usuario?.nombre ? inventario.usuario?.nombre: "No disponible" } </li>
                                    </ul>
                                    <div className="card-body">
                                        <Link to={`/inventarios/edit/${inventario._id}`} className="btn btn-secondary" >Editar</Link>
                                    </div>
                                </div>
                            </>
                        ))
                    }
            </div>

        </div>

        </>
    )

    
}