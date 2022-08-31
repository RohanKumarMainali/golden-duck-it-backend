const BlogModel = require("../../../models/blog/blogModel")

const PostBlog = async (req, res) => {
    try {
        const _post = await new BlogModel({
            title: req.body.title,
            description: req.body.description,
            image: req.file?.path
        });
        if (!req.body || !req.file.path) {
            res.status(400).json({ success: false, data: "something went wrong" })
        } else {
            await _post.save()
            res.status(200).json({ success: true, data: _post })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = PostBlog;