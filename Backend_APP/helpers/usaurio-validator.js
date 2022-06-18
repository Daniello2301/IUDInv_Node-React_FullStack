const usuarioValidator = (req) => {
    
        const validations = [];

        if(!req.body.nombre) validations.push("El nombre es requerido");
        if(!req.body.email) validations.push("El email es requerido");
        if(!req.body.estado) validations.push("El estado es requerido");

        return validations;
}

exports = module.exports = usuarioValidator;