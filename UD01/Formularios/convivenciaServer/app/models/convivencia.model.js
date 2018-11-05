const mongoose = require('mongoose');

const convivenciaLeveSchema = mongoose.Schema({
    nombreAlumno: String,
    grupoAlumno: String,
    nombreProfesor: String,
    horarioAtencion: String,
    fechaIncidente: String,
    horaIncidente: String,
    lugarIncidente: String,
    opcionA: Boolean,
    opcionB: Boolean,
    opcionC: Boolean,
    opcionD: Boolean,
    fechaTareaInicio: String,
    fechaTareaFin: String,
    horaTareaInicio: String,
    horaTareaFin: String,
    opcionE: Boolean,
    opcionF: Boolean,
    fechaSuspActInicio: Date,
    fechaSuspActFin: Date,
    fechaSuspAsisInicioF: Date,
    fechaSuspAsisFinF: Date,
    descripcionIncidente: String,
    tipificacion: Array,
    telefonoPadres: String,
    emailPadres: String,
    fechaHoy: String,
    telefonoPadres: String,
    emailPadres: String,
    fechaHoy: String,

}, {
        timestamps: true
    });

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
    telefonoPadres: String,
    emailPadres: String,
    fechaHoy: String,

}, {
        timestamps: true
    });

module.exports = mongoose.model('convivenciaGrave', convivenciaGraveSchema);
module.exports = mongoose.model('convivenciaLeve', convivenciaLeveSchema);