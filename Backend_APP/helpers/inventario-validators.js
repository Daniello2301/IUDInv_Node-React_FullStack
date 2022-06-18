const inventarioValidator = (req) => {

    const validations = [];

    if(!req.body.serial){
        validations.push('El serial es requerido');
    }
    if(!req.body.modelo){
        validations.push('El modelo es requerido');
    }
    if(!req.body.descripcion){
        validations.push('El descriocion es requerido');
    }
    if(!req.body.foto){
        validations.push('El foto es requerido');
    }
    if(!req.body.fechaCompra){
        validations.push('La fecha de Compra es requerida ( aaa-mm-dd )');
    }
    if(!req.body.precio){
        validations.push('El precio es requerido');
    }
    if(!req.body.estado){
        validations.push('El estado es requerido ( Activo o Inactivo )');
    }
    if(!req.body.usuario){
        validations.push('El Usuario es requerido');
    }
    if(!req.body.marca){
        validations.push('La marca es requerido');
    }
    if(!req.body.estadoEquipo){
        validations.push('El estado del equipo es requerido');
    }
    if(!req.body.tipoEquipo){
        validations.push('El tipo del equipo es requerido');
    }

    return validations;
}

exports = module.exports = inventarioValidator;