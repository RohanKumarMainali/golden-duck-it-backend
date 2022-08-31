const PortfolioModel = require("../../../models/porfolio/portfolioModel")
const { StatusCodes } = require("http-status-codes");

const DeleteBlog = async (req, res) => {
    try {
        const _deletePortfolio = await PortfolioModel.findOneAndDelete({_id:req.params.id});
        res.status(StatusCodes.ACCEPTED).json({success:true, data:_deletePortfolio})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports = DeleteBlog;