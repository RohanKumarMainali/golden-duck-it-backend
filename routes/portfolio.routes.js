const router = require('express').Router();
const { GetPortfolio, GetSinglePortfolio, EditPortfolio, PostPortfolio, DeletePortfolio } = require('../controllers/index.controller').portfolios;
const auth = require('../middlewares/auth')

router.get('/portfolio', GetPortfolio);
router.get('/portfolio/:id', GetSinglePortfolio);
router.post('/portfolio/post', auth.VerifyJWT, PostPortfolio);
router.put('/portfolioUpdate',auth.VerifyJWT, EditPortfolio);
router.delete('/portfolio/delete/:id',auth.VerifyJWT,DeletePortfolio);

module.exports = router;