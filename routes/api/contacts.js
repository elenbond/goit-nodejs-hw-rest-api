const express = require('express');
const ctrl = require("../../controllers");

const { validateBody, isValidId, authenticate } = require('../../middlewares/index');
const {schemas}  = require('../../models/contact');

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:contactId', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.add);

router.put('/:contactId', authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.delete('/:contactId', authenticate, isValidId, ctrl.deleteById);

router.patch('/:contactId/favorite', authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact)

module.exports = router;