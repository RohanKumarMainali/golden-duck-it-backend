const PortfolioModel = require("../../../models/porfolio/portfolioModel")
const { StatusCodes } = require("http-status-codes");
const cloudinary = require('../../../config/cloudinary');

const PostPortfolio = async (req, res) => {
    const file = req.files.image
    try {
        const result = cloudinary.uploader.upload(file.tempFilePath, { folder: 'blog', }, function (err, docs) {
          if (err) {
            console.log(err)
          } else {
            console.log(docs)
          }
        })
        const _postPortfolio = await new PortfolioModel({
            brand_name: req.body.brand_name,
            catagory: req.body.catagory,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            }
        });
        if (!req.body || !req.file.path) {
            res.status(StatusCodes.BAD_REQUEST).json({ success: false, data: "something went wrong" })
        } else {
            await _postPortfolio.save()
            res.status(StatusCodes.ACCEPTED).json({ success: true, data: _postPortfolio })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = PostPortfolio;