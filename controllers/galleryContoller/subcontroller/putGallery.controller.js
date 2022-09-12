const GalleryModel = require("../../../models/galery/galleryModel")
const { StatusCodes } = require("http-status-codes");

const cloudinary = require('../../../config/cloudinary');



const EditGallery = async (req, res) => {
    const file = req?.files?.image
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, { folder: 'gallery', }, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log(docs)
            }
        })
        const _post = await GalleryModel.findOneAndUpdate({ _id: req.body.id }, {
            image: {
                public_id: result.public_id,
                url: result.secure_url
            }
        });
        res.status(StatusCodes.ACCEPTED).json({ success: true, data: _post })

    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = EditGallery;