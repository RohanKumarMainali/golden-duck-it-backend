const ContactModel = require('../../../models/contact/contact');
const { StatusCodes } = require("http-status-codes");

const DeleteContacts = async (req, res) => {
    try {
        const _deleteBlog = await ContactModel.findOneAndDelete({_id:req.params.id});
        res.status(StatusCodes.OK).json({success:true, message: "contact deleted successfully!"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = DeleteContacts;