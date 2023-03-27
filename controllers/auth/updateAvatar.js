const fs = require('fs/promises');
const path = require('path');
const Jimp = require("jimp");

const { User } = require('../../models/user');
const { ctrlWrapper, HttpError } = require("../../helpers");

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => { 
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const filename = `${_id}_${originalname}`;

    const image = await Jimp.read(tempUpload);
    image.resize(250, 250).write(tempUpload);

    const resultUpload = path.join(avatarsDir, filename);
    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join('avatars', filename);
    const result = await User.findByIdAndUpdate(_id, { avatarURL });

    if (!result) {
    throw HttpError(401, "Not authorized");
    }

    res.json({
        avatarURL,
    })
}

module.exports = {
    updateAvatar: ctrlWrapper(updateAvatar), 
}