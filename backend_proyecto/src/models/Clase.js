const {Schema, model} = require('mongoose');

const claseSchema = new Schema({
    nombre_clase: String,
    codigo: {
        type: String,
        required: true
    },
    hora_inicio: String,
    hora_fin: String, 
    descripcion: String
},{
    timestamps: true
});

module.exports = model('Clase', claseSchema);