const convivenciaLeve = require('../models/convivenciaLeve.model.js');
const convivenciaGrave = require('../models/convivenciaGrave.model.js');

// Crear y salvar
exports.create = (req, res) => {

    // Validamos el convivencia
    if (!req.body) {
        console.log(req.body);
        return res.status(400).send({
            message: "convivencia Vacia..."
        });
    }

    if (req.body.tipoConvivencia == "leve") {
        const convivencia = new convivenciaLeve({
            nombreAlumno: req.body.nombreAlumno || "No nombre",
            grupoAlumno: req.body.grupoAlumno || "Sin grupo",
            nombreProfesor: req.body.nombreProfesor || "No nombre Profesor",
            horarioAtencion: req.body.horarioAtencion || "No hora atencion",
            fechaIncidente: req.body.fechaIncidente || "00/00/0000",
            horaIncidente: req.body.horaIncidente || "No nombre",
            lugarIncidente: req.body.lugarIncidente || "No nombre",
            opcionA: comprobarBoolean(req.body.opcionA) || false,
            opcionB: comprobarBoolean(req.body.opcionB) || false,
            opcionC: comprobarBoolean(req.body.opcionC) || false,
            opcionD: comprobarBoolean(req.body.opcionD) || false,
            fechaTareaInicio: req.body.fechaTareaInicio || "00/00/0000",
            fechaTareaFin: req.body.fechaTareaFin || "00/00/0000",
            horaTareaInicio: req.body.horaTareaInicio || "No nombre",
            horaTareaFin: req.body.horaTareaFin || "No nombre",
            opcionE: comprobarBoolean(req.body.opcionE) || false,
            opcionF: comprobarBoolean(req.body.opcionF) || false,
            fechaSuspActInicio: req.body.fechaSuspActInicio || "00/00/0000",
            fechaSuspActFin: req.body.fechaSuspActFin || "00/00/0000",
            fechaSuspAsisInicioF: req.body.fechaSuspAsisInicioF || "00/00/0000",
            fechaSuspAsisFinF: req.body.fechaSuspAsisFinF || "00/00/0000",
            descripcionIncidente: req.body.descripcionIncidente || "No nombre",
            tipificacion: req.body.tipificacion || "No nombre",
            telefonoPadres: req.body.telefonoPadres || "No nombre",
            emailPadres: req.body.emailPadres || "No nombre",
            fechaHoy: req.body.fechaHoy || "No nombre",
        })

        convivencia.save().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something was wrong creating convivencia"
            });
        });

    }

    if (req.body.tipoConvivencia == "grave") {
        const convivencia = new convivenciaGrave({
            nombreAlumno: req.body.nombreAlumno || "No nombre",
            grupoAlumno: req.body.grupoAlumno || "No nombre",
            nombreProfesor: req.body.nombreProfesor || "No nombre",
            horarioAtencion: req.body.horarioAtencion || "No nombre",
            fechaIncidente: req.body.fechaIncidente || "No nombre",
            horaIncidente: req.body.horaIncidente || "No nombre",
            lugarIncidente: req.body.lugarIncidente || "No nombre",
            tipificacion: req.body.tipificacion || "No nombre",
            telefonoPadres: req.body.telefonoPadres || "No nombre",
            emailPadres: req.body.emailPadres || "No nombre",
            fechaHoy: req.body.fechaHoy || "No nombre",
        })

        convivencia.save().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something was wrong creating convivencia"
            });
        });

    }
    //res.redirect("/menu.html");
};

// Obtener todas las Faltas Leves
exports.findAllLeves = (req, res) => {

    convivenciaLeve.find().then(convivencia => {
        res.send(convivencia);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};

// Obtener todas las Faltas Graves
exports.findAllGraves = (req,res) => {

    convivenciaGrave.find().then(convivencia => {
        res.send(convivencia);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};

// Obtener un convivencia por Id
exports.findOne = (req, res) => {
    convivenciaLeve.findById(req.params.convivenciaId)
        .then(convivencia => {
            if (!convivencia) {
                return res.status(404).send({
                    message: "convivencia NOT FOUND con ID " + req.params.convivenciaId
                });
            }
            res.send(convivencia);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "convivencia no encontrado con ese id :" + req.params.convivenciaId
                });
            }
            return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" + req.params.convivenciaId
            });
        });

    convivenciaGrave.findById(req.params.convivenciaId)
        .then(convivencia => {
            if (!convivencia) {
                return res.status(404).send({
                    message: "convivencia NOT FOUND con ID " + req.params.convivenciaId
                });
            }
            res.send(convivencia);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "convivencia no encontrado con ese id :" + req.params.convivenciaId
                });
            }
            return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" + req.params.convivenciaId
            });
        });
};

// Actualizar un convivencia
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "convivencia vacio"
        });
    }

    // Find note and update it with the request body
    convivenciaLeve.findByIdAndUpdate(req.params.convivenciaId, {
        nombreAlumno: req.body.nombreAlumno || "No nombre",
        grupoAlumno: req.body.grupoAlumno || "Sin grupo",
        nombreProfesor: req.body.nombreProfesor || "No nombre Profesor",
        horarioAtencion: req.body.horarioAtencion || "No hora atencion",
        fechaIncidente: req.body.fechaIncidente || "00/00/0000",
        horaIncidente: req.body.horaIncidente || "No nombre",
        lugarIncidente: req.body.lugarIncidente || "No nombre",
        opcionA: comprobarBoolean(req.body.opcionA) || false,
        opcionB: comprobarBoolean(req.body.opcionB) || false,
        opcionC: comprobarBoolean(req.body.opcionC) || false,
        opcionD: comprobarBoolean(req.body.opcionD) || false,
        fechaTareaInicio: req.body.fechaTareaInicio || "00/00/0000",
        fechaTareaFin: req.body.fechaTareaFin || "00/00/0000",
        horaTareaInicio: req.body.horaTareaInicio || "No nombre",
        horaTareaFin: req.body.horaTareaFin || "No nombre",
        opcionE: comprobarBoolean(req.body.opcionE) || false,
        opcionF: comprobarBoolean(req.body.opcionF) || false,
        fechaSuspActInicio: req.body.fechaSuspActInicio || "00/00/0000",
        fechaSuspActFin: req.body.fechaSuspActFin || "00/00/0000",
        fechaSuspAsisInicioF: req.body.fechaSuspAsisInicioF || "00/00/0000",
        fechaSuspAsisFinF: req.body.fechaSuspAsisFinF || "00/00/0000",
        descripcionIncidente: req.body.descripcionIncidente || "No nombre",
        tipificacion: req.body.tipificacion || "No nombre",
        telefonoPadres: req.body.telefonoPadres || "No nombre",
        emailPadres: req.body.emailPadres || "No nombre",
        fechaHoy: req.body.fechaHoy || "No nombre",
    }, { new: true })
        .then(convivencia => {
            if (!convivencia) {
                return res.status(404).send({
                    message: "convivencia not found with id " + req.params.convivenciaId
                });
            }
            res.send(convivencia);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "convivencia not found with id " + req.params.convivenciaId
                });
            }
            return res.status(500).send({
                message: "Error updating convivencia with id " + req.params.convivenciaId
            });
        });

    convivenciaGrave.findByIdAndUpdate(req.params.convivenciaId, {
        nombreAlumno: req.body.nombreAlumno || "No nombre",
        grupoAlumno: req.body.grupoAlumno || "No nombre",
        nombreProfesor: req.body.nombreProfesor || "No nombre",
        horarioAtencion: req.body.horarioAtencion || "No nombre",
        fechaIncidente: req.body.fechaIncidente || "No nombre",
        horaIncidente: req.body.horaIncidente || "No nombre",
        lugarIncidente: req.body.lugarIncidente || "No nombre",
        tipificacion: req.body.tipificacion || "No nombre",
        telefonoPadres: req.body.telefonoPadres || "No nombre",
        emailPadres: req.body.emailPadres || "No nombre",
        fechaHoy: req.body.fechaHoy || "No nombre",
    }, { new: true })
        .then(convivencia => {
            if (!convivencia) {
                return res.status(404).send({
                    message: "convivencia not found with id " + req.params.convivenciaId
                });
            }
            res.send(convivencia);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "convivencia not found with id " + req.params.convivenciaId
                });
            }
            return res.status(500).send({
                message: "Error updating convivencia with id " + req.params.convivenciaId
            });
        });
};

// Borrar un convivencia 
exports.delete = (req, res) => {
    convivenciaLeve.findByIdAndRemove(req.params.convivenciaId)
        .then(convivencia => {
            if (!convivencia) {
                return res.status(404).send({
                    message: "convivencia no encontrado " + req.params.convivenciaId
                });
            }
            res.send({ message: "Cthulhu ha vencido !" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "convivencia not found with id " + req.params.convivenciaId
                });
            }
            return res.status(500).send({
                message: "No podemos matar a ese convivencia with id " + req.params.convivenciaId
            });
        });

    convivenciaGrave.findByIdAndRemove(req.params.convivenciaId)
        .then(convivencia => {
            if (!convivencia) {
                return res.status(404).send({
                    message: "convivencia no encontrado " + req.params.convivenciaId
                });
            }
            res.send({ message: "Cthulhu ha vencido !" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "convivencia not found with id " + req.params.convivenciaId
                });
            }
            return res.status(500).send({
                message: "No podemos matar a ese convivencia with id " + req.params.convivenciaId
            });
        });
};

function comprobarBoolean(elemento) {

    if (elemento == "on") {
        return true;
    } else {
        return false;
    }
}