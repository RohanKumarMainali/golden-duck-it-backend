const GalleryModel = require("../../../models/galery/galleryModel")
const { StatusCodes } = require("http-status-codes");

const GetGallery = async (req, res) => {
    try {
        const _get = await GalleryModel.find();
        res.status(StatusCodes.ACCEPTED).json({ success: true, data: _get })

    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = GetGallery;