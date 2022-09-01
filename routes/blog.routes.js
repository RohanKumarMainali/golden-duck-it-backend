
const express = require('express')

const { GetBlog, PostBlog, EditBlog, DeleteBlog } = require('../controllers/blogControllers/index.controller');
const upload = require("../multer/upload")
const router = express.Router();
const auth = require('../middlewares/auth')



router.get('/blog', GetBlog);
router.post('/blog/post', upload.single('image') ,auth.VerifyJWT, PostBlog);
router.put('/blog/update/:id',upload.single('image'),auth.VerifyJWT, EditBlog);
router.delete('/blog/delete/:id',auth.VerifyJWT, DeleteBlog);

module.exports = router;