const express = require('express');
const ctrl = require("../../controllers/contacts");

// const { validateBody } = require('../../middlewares/index');
// const { addSchema } = require('../../schemas/contacts');
// validateBody(schemas.addSchema),

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', ctrl.add);

router.delete('/:contactId', ctrl.deleteById);

router.put('/:contactId', ctrl.updateById);

module.exports = router;