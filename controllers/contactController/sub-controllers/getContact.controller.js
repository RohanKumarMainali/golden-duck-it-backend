const ContactModel = require('../../../models/contact/contact');
const { StatusCodes } = require("http-status-codes");

const GetContacts = async (req, res) => {
    try {
        const contact = await ContactModel.find();
        console.log(contact)
        return res.status(StatusCodes.ACCEPTED).send({
            success: true,
            contacts: contact,
        });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            message: err.message
        })
    }
}

module.exports = GetContacts;