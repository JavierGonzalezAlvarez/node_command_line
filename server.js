const express = require("express");
const app = express();
const port = 3001;

/**
 * swagger-ui-express/JSDoc
 */
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Endpoints-api",
            description: "api command line",
            contact: {
                name: 'javier'
            },
            servers: "http://localhost:3636"
        }
    },
    apis: ["server.js", "./src/routes/*.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
//route swagger
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * Routes for programs_api
 */
const programs_apiRouters = require('./src/routes/programs_api')
app.use(programs_apiRouters)

/**
 * @swagger
 * /:
 *   get:
 *    description: main route
 *  
 */
app.get('/', (req, res) => {
    res.send({
        data: "api - Hello world"
    })
    console.log({
        data: "api - Hello world"
    })
})

/**
 * run server
 */
app.listen(port, () => {
    console.log("Server running on ... http://localhost:3001");
})

