const BlogModel = require("../../../models/blog/blogModel")
const { StatusCodes } = require("http-status-codes");

const DeleteBlog = async (req, res) => {
    try {
        const _deleteBlog = await BlogModel.findOneAndDelete({_id:req.params.id});
        res.status(StatusCodes.ACCEPTED).json({success:true, data:_deleteBlog})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = DeleteBlog;