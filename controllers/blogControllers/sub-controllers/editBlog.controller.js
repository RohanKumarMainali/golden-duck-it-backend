const BlogModel = require("../../../models/blog/blogModel")
const { StatusCodes } = require("http-status-codes");
const cloudinary = require('../../../config/cloudinary');

const EditBlog = async (req, res) => {
    const file = req?.files?.image
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, { folder: 'blog', }, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log(docs)
            }
        })
        const _post = await BlogModel.findOneAndUpdate({ _id: req.body.id }, {
            title: req?.body?.title,
            description: req?.body?.description,
            catagory: req?.body?.catagory,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            }
        });
        res.status(StatusCodes.ACCEPTED).json({ success: true, data: _post })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = EditBlog;