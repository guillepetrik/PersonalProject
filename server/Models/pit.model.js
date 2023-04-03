const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const { db1 } = require('../Config/mongoose.config');

const PitSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'El minimo es de 3 caracteres'],
        required: [true, 'El nombre es requerido']
    },
    type: {
        type: String,
        enum:['Normal', 'Morada']
    },
    dpt: {
        type: String,
        minlength: [3, 'El minimo es de 3 caracteres'],
        required: [true, 'Agregar una breve descripcion']
    },
    lat:  { type: Number },
    lng: { 
        type: Number,
        unique: true
    },
    createdBy: {
        type: String,
        required: true
    }
}, { timestamps: true });
PitSchema.plugin(uniqueValidator);

const pitModel = db1.model('Pit', PitSchema);
module.exports = { pitModel };