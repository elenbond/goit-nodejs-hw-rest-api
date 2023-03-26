const {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
    updateStatusContact
} = require('./contacts/index');

const { register, login, getCurrent, logout } = require('./auth/index');

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
    updateStatusContact,
    register,
    login,
    getCurrent,
    logout,
}