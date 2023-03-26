const {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
    updateStatusContact
} = require('./contacts/index');

const { register, login } = require('./auth/index');

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
    updateStatusContact,
    register,
    login,
}