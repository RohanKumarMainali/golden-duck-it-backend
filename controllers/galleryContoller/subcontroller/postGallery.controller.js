const GalleryModel = require("../../../models/galery/galleryModel")
const { StatusCodes } = require("http-status-codes");
const cloudinary = require('../../../config/cloudinary');

const PostGallery = async (req, res) => {
    const file = req.files.image
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, { folder: 'gallery', }, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log(docs)
            }
        })
        const _post = await new GalleryModel({
            image: {
                public_id: result.public_id,
                url: result.secure_url
            }
        });

        await _post.save()
        res.status(StatusCodes.ACCEPTED).json({ success: true, data: _post })

    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = PostGallery;