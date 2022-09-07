const GetContacts = require("./sub-controllers/getContact.controller");
const PostContacts = require("./sub-controllers/postController.controller")
const DeleteContacts = require("./sub-controllers/deleteContact.controller")
module.exports = {
    GetContacts,
    PostContacts,
    DeleteContacts,
}