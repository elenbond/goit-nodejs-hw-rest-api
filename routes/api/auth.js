const express = require('express');

const ctrl = require('../../controllers')
const { validateBody, authenticate } = require('../../middlewares/index');
const { schemas } = require('../../models/user');
 
const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.post('/current', authenticate, ctrl.getCurrent);

module.exports = router;