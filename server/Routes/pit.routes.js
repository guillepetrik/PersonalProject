const PitController = require('../Controllers/pit.controller');

module.exports = function(app){
    app.post('/api/pit', PitController.createPit);
    app.get('/api/pit', PitController.getAllPit);
    app.get('/api/userpit', PitController.getPitsByEmail);
    app.get('/api/pit/:id', PitController.getPit);
    app.put('/api/pit/:id', PitController.updatePit);
    app.delete('/api/pit/:id', PitController.deletePit);
}