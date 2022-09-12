const express = require('express')
const { GetGallery , EditGallery , PostGallery , DeleteGallery } = require('../controllers/index.controller').gallery;
const router = express.Router();
const auth = require('../middlewares/auth')

router.get('/gallery', GetGallery);
router.post('/gallery/post',  PostGallery);
router.put('/galleryUpdate', EditGallery);
router.delete('/gallery/delete/:id', auth.VerifyJWT, DeleteGallery);

module.exports = router;