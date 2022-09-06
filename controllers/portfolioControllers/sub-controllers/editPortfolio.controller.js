const PortfolioModel = require("../../../models/porfolio/portfolioModel")
const { StatusCodes } = require("http-status-codes");

const EditPortfolio = async (req, res) => {
  console.log('sss')
  try {
    const _editPortfolio = await PortfolioModel.findByIdAndUpdate({_id:req.body.id},{
      brand_name: req?.body?.brand_name,
      catagory: req?.body?.catagory,
      image: req?.file?.path
    });
    res.status(StatusCodes.ACCEPTED).json({ sucess: true, data: _editPortfolio })
    console.log(_editPortfolio)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}
module.exports = EditPortfolio;