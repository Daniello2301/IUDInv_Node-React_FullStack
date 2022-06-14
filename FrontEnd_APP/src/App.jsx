import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from "react"

import { Routes, Route } from "react-router-dom"

import { HomePage } from './views/homePage/HomePage'
import { ListUsuarios } from './views/usuarios/ListUsuarios'
import { CreateUsuario } from './views/usuarios/CreateUsuario';
import { ListInventarios } from './views/inventarios/ListInventarios'
import { CreateInventario } from './views/inventarios/CreateInventario';
import { ListMarcas } from './views/marcas/ListMarcas';
import { CreateMarca } from './views/marcas/CreateMarca';

export function App() {

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventarios" element={<ListInventarios />} />
        <Route path="/inventarios/create" element={<CreateInventario />} />
        <Route path="/usuarios" element={<ListUsuarios />} />
        <Route path="/usuarios/create" element={<CreateUsuario />} />
        <Route path="/marcas" element={<ListMarcas />} />
        <Route path="/marcas/create" element={<CreateMarca />} />
      </Routes>
    </div>
  )
}
