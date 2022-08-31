const GetBlog = require("./sub-controllers/getBlog.controller");
const PostBlog = require("./sub-controllers/postBlog.controller")
const EditBlog = require("./sub-controllers/editBlog.controller")
const DeleteBlog = require("./sub-controllers/deleteBlog.controller")


module.exports = {
    GetBlog,
    PostBlog,
    EditBlog,
    DeleteBlog
}