const routes = require('express').Router();

const authMiddleware = require("./app/middleware/auth")

const UserController = require('./app/controller/UserController');
const PetController = require('./app/controller/PetController');
const CityController = require('./app/controller/CityController');
const SessionController = require('./app/controller/SessionController');

routes.post('/session', SessionController.store);

routes.post('/user', UserController.create);

routes.get('/pet', PetController.index);

routes.get('/city', CityController.index);


routes.use(authMiddleware);

routes.post('/pet', PetController.create);
routes.put('/pet', PetController.update);

routes.delete('/pet', PetController.destroy);





module.exports = routes;