const routes = require('express').Router();
const UserController = require('./app/controller/UserController');
const PetController = require('./app/controller/PetController');
const CityController = require('./app/controller/CityController');
const SessionController = require('./app/controller/SessionController');

routes.post('/session', SessionController.store);

routes.post('/user', UserController.create);

routes.post('/pet', PetController.create);
routes.put('/pet', PetController.update);
routes.get('/pet', PetController.index);
routes.delete('/pet', PetController.destroy);

routes.get('/city', CityController.index);

module.exports = routes;