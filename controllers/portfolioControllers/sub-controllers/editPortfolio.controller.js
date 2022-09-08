const PortfolioModel = require("../../../models/porfolio/portfolioModel")
const { StatusCodes } = require("http-status-codes");
const cloudinary = require('../../../config/cloudinary');

const EditPortfolio = async (req, res) => {
  const file = req?.files?.image
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, { folder: 'portfolio', }, function (err, docs) {
      if (err) {
          console.log(err)
      } else {
          console.log(docs)
      }
  })
    const _editPortfolio = await PortfolioModel.findByIdAndUpdate({_id:req.body.id},{
      brand_name: req?.body?.brand_name,
      catagory: req?.body?.catagory,
      image: {
        public_id: result.public_id,
        url: result.secure_url
    }
    });
    res.status(StatusCodes.ACCEPTED).json({ sucess: true, data: _editPortfolio })
    console.log(_editPortfolio)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}
module.exports = EditPortfolio;