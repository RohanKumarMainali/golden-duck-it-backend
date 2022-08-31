const BlogModel = require("../../../models/blog/blogModel")

const EditBlog = async (req, res) => {
    try {
        const _post = await BlogModel.findOneAndUpdate(req.body);
        res.status(200).json({success:true, data:_post})
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = EditBlog;