const mongoose = require('mongoose');

const convivenciaGraveSchema = mongoose.Schema({
    nombreAlumno: String,
    grupoAlumno: String,
    nombreProfesor: String,
    horarioAtencion: String,
    fechaIncidente: String,
    horaIncidente: String,
    lugarIncidente: String,
    tipificacion: Array,
    telefonoPadres: String,
    emailPadres: String,
    fechaHoy: String,

}, {
        timestamps: true
    });

module.exports = mongoose.model('convivenciaGrave', convivenciaGraveSchema);