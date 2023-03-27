const { HttpError, ctrlWrapper, sendEmail } = require("../../helpers");
const { User } = require('../../models/user');
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        throw HttpError(404, "User is not found");
    }

    if (user.verify) {
        throw HttpError(400, "Verification has already been passed");
    }
    const userVerificationToken = user.verificationToken;

    const verifyEmail = {
        to: email,
        subject: "Please Verify Your Email",
        html: `<p>Let's verify your email for contacts application. Follow this <a target="_blank" href="${BASE_URL}/api/users/verify/${userVerificationToken}">link</a> .</p>`,
    };

    await sendEmail(verifyEmail);

    res.json({ message: "Verification email sent" });

}

module.exports = {
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
}