const router = require('express').Router();
const { GetPortfolio, EditPortfolio, PostPortfolio, DeletePortfolio } = require('../controllers/index.controller').portfolios;
const upload = require("../multer/upload")

router.get('/portfolio', GetPortfolio);
router.post('/portfolio/post', upload.single("image") ,PostPortfolio);
router.put('/portfolio/update/:id', upload.single("image"), EditPortfolio);
router.delete('/portfolio/delete/:id',DeletePortfolio);

module.exports = router;