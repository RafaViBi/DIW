module.exports = (app) => {
    const convivencia = require('../controllers/convivencia.controllers.js');

    // Create a new convivencia
    app.post('/convivencia', convivencia.create);

    // Retrieve all convivencia
    app.get('/convivenciaGrave', convivencia.findAllGraves);

    // Retrieve all convivencia
    app.get('/convivenciaLeve', convivencia.findAllLeves);

    // Retrieve a single convivencia with investigadorId
    app.get('/convivencia/:convivenciaId', convivencia.findOne);

    // Update a convivencia with investigadorId
    app.put('/convivencia/:convivenciaId', convivencia.update);

    // Delete a convivencia with investigadorId
    app.delete('/convivencia/:convivenciaId', convivencia.delete);
}