const tipoValitador = (req) => {

    const validations = [];

    if(!req.body.nombre) validations.push("El nombre es requerido");
    if(!req.body.estado) validations.push("El estado es requerido");
    if(!req.body.usuario.email) validations.push("El email es requerido");

    return validations;

}

exports = module.exports = tipoValitador;