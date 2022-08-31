const BlogModel = require("../../../models/blog/blogModel")

const DeleteBlog = async (req, res) => {
    try {
        const _deleteBlog = await BlogModel.findOneAndDelete({_id:req.params.id});
        res.status(200).json({success:true, data:_deleteBlog})
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = DeleteBlog;