module.exports = (app) => {
    const convivencia = require('../controllers/convivencia.controllers.js');

    // Create a new convivencia
    app.post('/convivencia', convivencia.create);

    // Retrieve all convivencia
    app.get('/convivencia', convivencia.findAll);

    // Retrieve a single convivencia with investigadorId
    app.get('/convivencia/:investigadorId', convivencia.findOne);

    // Update a convivencia with investigadorId
    app.put('/convivencia/:investigadorId', convivencia.update);

    // Delete a convivencia with investigadorId
    app.delete('/convivencia/:investigadorId', convivencia.delete);
}