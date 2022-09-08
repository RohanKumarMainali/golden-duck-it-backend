const express = require('express')
const { GetBlog, PostBlog, EditBlog, DeleteBlog } = require('../controllers/blogControllers/index.controller');
const router = express.Router();
const auth = require('../middlewares/auth')

router.get('/blog', GetBlog);
router.post('/blog/post', auth.VerifyJWT, PostBlog);
router.put('/blogUpdate', auth.VerifyJWT, EditBlog);
router.delete('/blog/delete/:id', auth.VerifyJWT, DeleteBlog);

module.exports = router;