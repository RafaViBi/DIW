const mongoose = require('mongoose');

const convivenciaSchema = mongoose.Schema({
    nombreAlumno:String,
    grupoAlumno:String,
    nombreProfesor:String,
    horarioAtencion:String,
    fechaIncidente:String,
    horaIncidente:String,
    lugarIncidente:String,
    opcionA:String,
    opcionB:String,
    opcionC:String,
    opcionD:String,
    fechaTareaInicio:String,
    fechaTareaFin:String,
    horaTareaInicio:String,
    horaTareaFin:String,
    opcionE:String, 
    opcionF:String,
    fechaSuspActInicio:String,
    fechaSuspActFin:String,
    fechaSuspAsisInicio:String,
    fechaSuspAsisFin:String,
    descripcionIncidente:String,
    tipificacion:Array,
    telefonoPadres:String,
    emailPadres:String,
    fechaHoy:String,
    telefonoPadres:String,
    emailPadres:String,
    fechaHoy:String,

}, {
        timestamps: true
    });


module.exports = mongoose.model('Convivencia', convivenciaSchema);