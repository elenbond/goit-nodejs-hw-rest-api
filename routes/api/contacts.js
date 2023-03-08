const express = require('express');
const ctrl = require("../../controllers/contacts");

const { validateBody } = require('../../middlewares/index');
const schemas  = require('../../schemas/contacts');
// validateBody(schemas.addSchema),

console.log(validateBody);
console.log(validateBody(schemas.addSchema));
// console.log(addSchema);

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', ctrl.deleteById);

router.put('/:contactId', ctrl.updateById);

module.exports = router;