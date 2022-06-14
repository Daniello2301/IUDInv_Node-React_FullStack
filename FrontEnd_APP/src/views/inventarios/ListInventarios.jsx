import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as API from "../../services/iventarios-services";

import { NavBar } from "../../components/navBar/NavBar";

export function ListInventarios(){

    const [inventarios, setInventarios] = useState([]);

    const getInventarios = async () => {
        const inventarios = await API.getInventarios();
        setInventarios(inventarios);
        console.log(inventarios);
    }

    useEffect(() => {
        getInventarios();
    },[]);

    return(
        <>
        <NavBar />
        <div className="container">
            <div className="row">
                <div className="col" >
                    <h1>Lista de Inventarios</h1>
                </div>
                <div className="col">
                    <Link to={`/inventarios/create`} className="btn btn-primary">Create</Link>
                </div>           
            </div>
            <div className="row" >
                    {
                        inventarios.map(inventario => (
                            <>
                                <div className="card" style={{width: 18 + "rem"}}>
                                    <img src={inventario.foto} className="card-img-top" alt="image..."/>
                                    <div className="card-body">
                                        <h5 className="card-title"> { inventario.descripcion ? inventario.descripcion : "Not Content"} </h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">An item</li>
                                        <li className="list-group-item">A second item</li>
                                        <li className="list-group-item">A third item</li>
                                    </ul>
                                    <div className="card-body">
                                        <Link to={`/inventarios/${inventario._id}`} className="card-link">Ver</Link>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
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