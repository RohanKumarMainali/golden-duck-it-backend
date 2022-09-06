const router = require('express').Router();
const { GetPortfolio, GetSinglePortfolio, EditPortfolio, PostPortfolio, DeletePortfolio } = require('../controllers/index.controller').portfolios;
const upload = require("../multer/upload")
const auth = require('../middlewares/auth')

router.get('/portfolio', GetPortfolio);
router.get('/portfolio/:id', GetSinglePortfolio);
router.post('/portfolio/post', auth.VerifyJWT, upload.single("image") ,PostPortfolio);
router.put('/portfolioUpdate',auth.VerifyJWT,  upload.single("image"), EditPortfolio);
router.delete('/portfolio/delete/:id',auth.VerifyJWT,DeletePortfolio);

module.exports = router;