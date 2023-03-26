const express = require('express');

const ctrl = require('../../controllers')
const { validateBody } = require('../../middlewares/index');
const { schemas } = require('../../models/user');
 
const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;