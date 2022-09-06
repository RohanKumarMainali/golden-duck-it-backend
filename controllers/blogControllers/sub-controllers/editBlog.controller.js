const BlogModel = require("../../../models/blog/blogModel")
const { StatusCodes } = require("http-status-codes");

const EditBlog = async (req, res) => {
    try {
        const _post = await BlogModel.findOneAndUpdate({_id:req.body.id},{
            title: req?.body?.title,
            description: req?.body?.description,
            image: req?.file?.path
        });
        res.status(StatusCodes.ACCEPTED).json({success:true, data:_post})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = EditBlog;