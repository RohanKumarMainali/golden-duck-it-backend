const BlogModel = require("../../../models/blog/blogModel")
const { StatusCodes } = require("http-status-codes");

const cloudinary = require('../../../config/cloudinary');



const PostBlog = async (req, res) => {
    const file = req.files.image
    try {

        const result = await cloudinary.uploader.upload(file.tempFilePath, { folder : 'blog' ,},function(err,docs){
            if(err){
                console.log(err)
            }else{
                console.log(docs)
            }
        })
        const _post = await new BlogModel({
            title: req.body.title,
            description: req.body.description,
            image : {
                public_id: result.public_id,
                url : result.secure_url
            },
        });
    
            await _post.save()
            res.status(StatusCodes.ACCEPTED).json({ success: true, data: _post })
        
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = PostBlog;