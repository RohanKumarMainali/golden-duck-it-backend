
const express = require('express')

const { GetBlog, PostBlog, EditBlog, DeleteBlog } = require('../controllers/blogControllers/index.controller');
const upload = require("../multer/upload")
const router = express.Router();
const auth = require('../middlewares/auth')

const coludnaryupload = require("../config/cloudinary")


router.get('/blog', GetBlog);
router.post('/blog/post' , PostBlog);
router.put('/blogUpdate', auth.VerifyJWT, EditBlog);
router.delete('/blog/delete/:id',auth.VerifyJWT, DeleteBlog);

module.exports = router;