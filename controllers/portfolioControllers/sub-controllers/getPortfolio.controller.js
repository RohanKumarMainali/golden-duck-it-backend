const PortfolioModel = require("../../../models/porfolio/portfolioModel")
const { StatusCodes } = require("http-status-codes");

const GetBlog = async (req, res) => {
  try {
    const _getPorfolio = await PortfolioModel.find();
    res.status(StatusCodes.ACCEPTED).json({ success: true, data: _getPorfolio })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}

module.exports = GetBlog;