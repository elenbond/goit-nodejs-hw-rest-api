const {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
    updateStatusContact
} = require('./contacts/contacts');

const { register } = require('./auth/auth');

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
    updateStatusContact,
    register,
}