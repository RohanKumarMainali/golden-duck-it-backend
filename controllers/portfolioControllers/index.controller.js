const PostPortfolio  = require('./sub-controllers/postPorfolio.controller')
const EditPortfolio  = require('./sub-controllers/editPortfolio.controller')
const GetPortfolio  = require('./sub-controllers/getPortfolio.controller')
const DeletePortfolio  = require('./sub-controllers/deletePortfolio.controller')

module.exports = {
    PostPortfolio,
    GetPortfolio,
    EditPortfolio,
    DeletePortfolio
}