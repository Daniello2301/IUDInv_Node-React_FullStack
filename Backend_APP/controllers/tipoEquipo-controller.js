const TipoEquipo = require('../models/TipoEquipo');
const Usuario = require('../models/Usuario');

const tipoValidator = require('../helpers/tipo-validator');

/* ******************************************************************************************************** */
// GET All topos de equipio 
const getAll = async(req, res) => {

    
    try 
    {
        const response = await TipoEquipo.find().populate({
            path: 'usuario', 
            select: 'nombre email estado'
        });

        console.log("GET/tiposequipos");
        res.status(200).send(response);

    } catch (error) {
        console.log("Error ", err)
        res.status(404).json({msj: error.message}).send("Ocurrió un error")
    }

}

/* ******************************************************************************************************** */
// GET tipo por Id
const getById = async(req, res) => {

    try 
    {
        console.log("GET/tiposequipos", req.params.id)
        const { id } = req.params;

        const query = { _id: id };
        
        const response = await TipoEquipo.findById(query);

        res.status(200).json(response);
    } catch (error) {
        
        console.log(error)
        res.status(500).json({msj: error.message}).send("Ocurrió un error")
    }
}



/* ******************************************************************************************************** */
// Get tipos qie tengan el usuario en estado activo 
const getUsersActive = async(req, res) => {

    try {

        console.log("GET/tiposactivos")
        const query = { estado : "Activo"}
        let response = await TipoEquipo.find(query).populate({
            path: 'usuario',
            select: 'nombre email estado'
        });
        
        response = response.filter( (t) => t.usuario != null);

        console.log(response)
        res.status(201).json(response);
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({msj: error.message}).send("Ocurrió un error")
    }

}



/* ******************************************************************************************************** */
// Creacion de tipo de equipo 
const create = async(req, res) => {

    try 
    {
        console.log("POST/tiposequipos")
        console.log(req.body)


        const validations = tipoValidator(req);

        if(tipoValidator.length > 0){
            return res.status(400).json({msj: validations});
        }


        const nombre = req.body.nombre.toUpperCase();
        const estado = req.body.estado;
        const email = req.body.usuario.email;

        
        // validamos que no exista
        const tipo = await TipoEquipo.findOne({ nombre });
        if(tipo){
            return res.status(500).json({ mjs: "La marca ya existe" });
        }

        // Validamos que el usuario que se este ingresando exista
        const usuarioExiste = await Usuario.findOne({ email });
        if(!usuarioExiste){
            return res.status(500).json({ mjs: "El usuario no existe" });
        }

        // declaramos un objeto en el que almacenamos el request enviado para pasarselo al metodo crear
        const data = {
            nombre,
            estado,
            usuario: usuarioExiste._id
        }

        // guardamos
        const tipoSave = new TipoEquipo(data);

        tipoSave.save();
        
        res.status(201).json(tipoSave);

    } catch (error) {
        console.log("Error", error)
        res.status(500).json({msj: error.message}).send("Ocurrió un error")
    }
}



/* ******************************************************************************************************** */
// Actuvalizacion d etipos de equipos 
const update = async (req, res) => {

    try 
    {
        console.log("PUT/tiposequipo/", req.params.id)

        const errors = tipoValidator(req);

        if(errors.length > 0){
            return res.status(500).send(errors);
        }

        
        const id = req.params.id

       let tipoEquipo = await TipoEquipo.findById({_id: id});
       if(!tipoEquipo){
           return res.status(404).send("Not found")
       }

       const {nombre, estado, usuario} = req.body;

       const tipoequipoExiste = await TipoEquipo.findOne({nombre: nombre, _id: {$ne: id}});
       if(tipoequipoExiste){
        return res.status(400).send("The Tipo is already exists");
       }

       const usuarioDB = await Usuario.findOne({ email: usuario.email});
        if(!usuarioDB){ return res.status(404).json({mjs: "El usuario no existe"})};
        
       tipoEquipo.nombre = nombre;
       tipoEquipo.estado = estado;
       tipoEquipo.usuario = usuarioDB._id;

       tipoEquipo = await tipoEquipo.save();

       console.log(tipoEquipo)
       res.status(202).jsonp(tipoEquipo)

    } catch (error) {
        
        console.log("Error ", error)
        res.status(500).json({msj: error.message}).send("Ocurrió un error")
    }

};


/* ******************************************************************************************************** */
// Borrador de equipos de equipos por Id
const deleteById = async(req, res) => {
    try 
    {
        console.log("DELETE/tiposequipo/", req.params.id)
        const id = req.params.id;
        const response = await TipoEquipo.findByIdAndDelete(id);
        
        res.status(200).json(response)
    } catch (error) {
        console.log("Error", error)
        res.status(404).json({msj: error.message}).send("Ocurrió un error")
    }
};

module.exports = { getAll, getUsersActive, getById, create, update, deleteById}