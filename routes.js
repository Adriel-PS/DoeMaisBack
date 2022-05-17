import express from 'express';
import clients from './src/controllers/clients.js';
import user from './src/controllers/user.js';

const routes = express.Router();

// routes.get('/clients',clients.findAll);
// routes.get('/clients/:id',clients.findClient);
// routes.put('/clients/:id',clients.updateClient);
// routes.delete('/clients/:id',clients.deleteClient);
// routes.post('/clients', clients.addClient);

//routes.get('/user',user.findAll);
routes.post('/user',user.addUser);
routes.get('/user',user.finduser);

export { routes as default };