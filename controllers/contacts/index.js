const { getAll } = require('./getAllContacts');
const { getById } = require('./getContactById');
const { add } = require('./addContact');
const { updateById } = require('./updateContactById');
const { deleteById } = require('./deleteContactById');
const { updateStatusContact } = require('./updateStatusContact');

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
    updateStatusContact,
}