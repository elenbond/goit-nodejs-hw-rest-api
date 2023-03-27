const {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
    updateStatusContact
} = require('./contacts/index');

const { register, login, getCurrent, logout, updateAvatar } = require('./auth/index');

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
    updateAvatar,
}