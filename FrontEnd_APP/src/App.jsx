import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from "react"

import { Routes, Route } from "react-router-dom"

import { HomePage } from './views/homePage/HomePage'
import { ListUsuarios } from './views/usuarios/ListUsuarios'
import { CreateUsuario } from './views/usuarios/CreateUsuario';
import { EditUsuario } from './views/usuarios/EditUsuario';
import { ListInventarios } from './views/inventarios/ListInventarios'
import { CreateInventario } from './views/inventarios/CreateInventario';
import { EditarInventario } from './views/inventarios/EditarInventario';
import { ListMarcas } from './views/marcas/ListMarcas';
import { CreateMarca } from './views/marcas/CreateMarca';
import { EditarMarca } from './views/marcas/EditarMarca';
import { ListTipos } from './views/tipos/ListTipos';
import { CreateTipo } from './views/tipos/CreateTipo';
import { EditarTipo } from './views/tipos/EditarTipo';
import { ListEstados } from './views/estados/ListEstados';
import { CreateEstado } from './views/estados/CreateEstado';
import { EditarEstado } from './views/estados/EditarEstado';

export function App() {

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventarios" element={<ListInventarios />} />
        <Route path="/inventarios/create" element={<CreateInventario />} />
        <Route path="/inventarios/edit/:id" element={<EditarInventario />} />
        <Route path="/usuarios" element={<ListUsuarios />} />
        <Route path="/usuarios/create" element={<CreateUsuario />} />
        <Route path="/usuarios/edit/:id" element={<EditUsuario />} />
        <Route path="/marcas" element={<ListMarcas />} />
        <Route path="/marcas/create" element={<CreateMarca />} />
        <Route path="/marcas/edit/:id" element={<EditarMarca />} />
        <Route path="/tipos" element={<ListTipos />} />
        <Route path="/tipos/create" element={<CreateTipo />} />
        <Route path="/tipos/edit/:id" element={<EditarTipo />} />
        <Route path="/estados" element={<ListEstados />} />
        <Route path="/estados/create" element={<CreateEstado />} />
        <Route path="/estados/edit/:id" element={<EditarEstado />} />
      </Routes>
    </div>
  )
}
