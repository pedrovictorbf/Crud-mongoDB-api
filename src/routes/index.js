

let express = require('express');
let maquinas = require('../models/Maquina.js');

let SwaggerUI = require('swagger-ui-express');
let SwaggerFile = require('../../swagger.json')

const routes = (app) => {
    app.use(
        '/docs' , SwaggerUI.serve , SwaggerUI.setup(SwaggerFile));

    app.use (
        express.json(),
        maquinas
    )
}

module.exports = routes;