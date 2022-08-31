const BlogModel = require("../../../models/blog/blogModel")
const { StatusCodes } = require("http-status-codes");

const EditBlog = async (req, res) => {
    try {
        const _post = await BlogModel.findOneAndUpdate(req.body);
        res.status(StatusCodes.ACCEPTED).json({success:true, data:_post})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = EditBlog;