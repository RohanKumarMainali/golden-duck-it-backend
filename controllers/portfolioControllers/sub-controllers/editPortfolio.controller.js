const PortfolioModel = require("../../../models/porfolio/portfolioModel")
const { StatusCodes } = require("http-status-codes");

const EditPortfolio = async (req, res) => {
  try {
    const _editPortfolio = await PortfolioModel.findOneAndUpdate({
      brand_name: req?.body?.brand_name,
      catagory: req?.body?.catagory,
      image: req?.file?.path
    });
    res.status(StatusCodes.ACCEPTED).json({ sucess: true, data: _editPortfolio })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}
module.exports = EditPortfolio;