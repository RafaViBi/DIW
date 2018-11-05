const convivencia = require('../models/convivencia.model.js');

// Crear y salvar
exports.create = (req, res) => {

    // Validamos el convivencia
    if (!req.body) {
        console.log(req.body);
        return res.status(400).send({
            message: "convivencia Vacia..."
        });
    }

    if (req.body.tipoConvivencia = "leve") {
        const convivencia = new convivencia({
            nombreAlumno: req.body.nombreAlumno || "No nombre",
            grupoAlumno: req.body.grupoAlumno || "Sin grupo",
            nombreProfesor: req.body.nombreProfesor || "No nombre Profesor",
            horarioAtencion: req.body.horarioAtencion || "No hora atencion",
            fechaIncidente: req.body.fechaIncidente || "No nombre",
            horaIncidente: req.body.horaIncidente || "No nombre",
            lugarIncidente: req.body.lugarIncidente || "No nombre",
            opcionA: req.body.opcionA || "No A" ,
            opcionB: req.body.opcionB || "No B",
            opcionC: req.body.opcionC || "No C",
            opcionD: req.body.opcionD || "No D",
            fechaTareaInicio: req.body.fechaTareaInicio || "No nombre",
            fechaTareaFin: req.body.fechaTareaFin || "No nombre",
            horaTareaInicio: req.body.horaTareaInicio || "No nombre",
            horaTareaFin: req.body.horaTareaFin || "No nombre",
            opcionE: req.body.opcionE || "No nombre",
            opcionF: req.body.opcionF || "No nombre",
            fechaSuspActInicio: req.body.fechaSuspActInicio || "No nombre",
            fechaSuspActFin: req.body.fechaSuspActFin || "No nombre",
            fechaSuspAsisInicioF: req.body.fechaSuspAsisInicioF || "No nombre",
            fechaSuspAsisFinF: req.body.fechaSuspAsisFinF || "No nombre",
            descripcionIncidente: req.body.descripcionIncidente || "No nombre",
            tipificacion: req.body.tipificacion || "No nombre",
            telefonoPadres: req.body.telefonoPadres || "No nombre",
            emailPadres: req.body.emailPadres || "No nombre",
            fechaHoy: req.body.fechaHoy || "No nombre",
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

    } else {
        const convivencia = new convivencia({
            nombreAlumno: req.body.nombreAlumno || "No nombre",
            grupoAlumno: req.body.grupoAlumno || "No nombre",
            nombreProfesor: req.body.nombreProfesor || "No nombre" ,
            horarioAtencion: req.body.horarioAtencion || "No nombre",
            fechaIncidente: req.body.fechaIncidente || "No nombre",
            horaIncidente: req.body.horaIncidente || "No nombre",
            lugarIncidente: req.body.lugarIncidente || "No nombre",
            tipificacion: req.body.tipificacion || "No nombre",
            telefonoPadres: req.body.telefonoPadres || "No nombre",
            emailPadres: req.body.emailPadres || "No nombre",
            fechaHoy: req.body.fechaHoy || "No nombre",
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
};



// Obtener todas los convivencias
exports.findAll = (req, res) => {

    convivencia.find().then(convivencias => {
        res.send(convivencias);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};


// Obtener un convivencia por Id
exports.findOne = (req, res) => {
    convivencia.findById(req.params.convivenciaId)
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
    convivencia.findByIdAndUpdate(req.params.convivenciaId, {
        nombre: req.body.nombre || "Sin nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.puntosVida || 0,
        puntosCordura: req.body.puntosCordura || 0
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
    convivencia.findByIdAndRemove(req.params.convivenciaId)
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