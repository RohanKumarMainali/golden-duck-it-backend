const ContactModel = require('../../../models/contact/contact');
const { StatusCodes } = require("http-status-codes");
const { mail } = require('../../../utils/mail')

const PostContacts = async (req, res) => {
    try {
        const contact = await new ContactModel(req.body);
        await contact.save();
        console.log(contact)
        mail().sendMail({
            from: req.body.email,
            to: process.env.EMAIL,
            subject: "contact form",
            html: `<p style="text-align:center; font-size:16px;">${contact}</p>`
        })
        return res.status(StatusCodes.OK).send({
            success: true,
            contacts: contact,
        });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            message: err.message
        })
    }
}

module.exports = PostContacts;