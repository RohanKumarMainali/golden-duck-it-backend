const PortfolioModel = require("../../../models/porfolio/portfolioModel")
const { StatusCodes } = require("http-status-codes");
const GetSinglePortfolio = async (req, res) => {
    try {
        const _getSinglePorfolio = await PortfolioModel.findById(req.params.id);
        res.status(StatusCodes.ACCEPTED).json({ success: true, data: _getSinglePorfolio })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = GetSinglePortfolio;