const GalleryModel = require("../../../models/galery/galleryModel")
const { StatusCodes } = require("http-status-codes");

const DeleteGallery = async (req, res) => {
    try {
        const _delete = await GalleryModel.findOneAndDelete({_id:req.params.id});
        res.status(StatusCodes.ACCEPTED).json({ success: true, message:"deleted"})

    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = DeleteGallery;