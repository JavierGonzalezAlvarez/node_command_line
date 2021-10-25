const express = require('express');
const router = express.Router();
const path = 'api';

const controller_program_api = require('../controllers/programs_api');

/**
 * Route: /programs_api
 * Method: GET
 * http://localhost:3001/api/programs_api
 */
/**
 * @swagger
 * api/programs_api:
 *   get:
 *    description: api programs_api (all records)
 * 
 */
router.get(
    `/${path}/programs_api`,
    controller_program_api.get
)

module.exports = router

