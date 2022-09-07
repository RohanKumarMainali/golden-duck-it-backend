const BlogModel = require("../../../models/blog/blogModel")
const { StatusCodes } = require("http-status-codes");

const PostBlog = async (req, res) => {
    try {
        const _post = await new BlogModel({
            title: req.body.title,
            description: req.body.description,
            catagory: req.body.catagory,
            image: req.file?.path
        });
        if (!req.body || !req.file.path) {
            res.status(StatusCodes.BAD_REQUEST).json({ success: false, data: "something went wrong" })
        } else {
            await _post.save()
            res.status(StatusCodes.ACCEPTED).json({ success: true, data: _post })
        }
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = PostBlog;