const router = require('express').Router();
const { GetPortfolio, EditPortfolio, PostPortfolio, DeletePortfolio } = require('../controllers/index.controller').portfolios;
const upload = require("../multer/upload")
const auth = require('../middlewares/auth')

router.get('/portfolio', GetPortfolio);
router.post('/portfolio/post', auth.VerifyJWT, upload.single("image") ,PostPortfolio);
router.put('/portfolio/update/:id', auth.VerifyJWT, upload.single("image"), EditPortfolio);
router.delete('/portfolio/delete/:id',auth.VerifyJWT,DeletePortfolio);

module.exports = router;