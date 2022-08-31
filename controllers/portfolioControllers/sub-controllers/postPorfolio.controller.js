const PortfolioModel = require("../../../models/porfolio/portfolioModel")
const { StatusCodes } = require("http-status-codes");

const PostPortfolio = async (req, res) => {
    try {
        const _postPortfolio = await new PortfolioModel({
            brand_name: req.body.title,
            catagory: req.body.description,
            image: req.file?.path
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