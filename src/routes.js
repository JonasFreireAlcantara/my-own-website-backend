const express = require('express');
const routes = express.Router();

const ProjectController = require('./controller/ProjectController');

// default route
routes.get('/', (req, res) => res.json({ greeting: 'Welcome to my own WebSite' }));
// route for projects index
routes.get('/projects', ProjectController.index);

module.exports = routes;