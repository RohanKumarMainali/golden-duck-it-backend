
const express = require('express')

const { GetBlog, PostBlog, EditBlog, DeleteBlog } = require('../controllers/blogControllers/index.controller');
const upload = require("../multer/upload")
const router = express.Router();



router.get('/blog', ()=>{
    console.log('slkdfj')
});


// router.get('/blog/get', GetBlog);
router.post('/blog/post', upload.single('image') , PostBlog);
router.put('/blog/update/:id',upload.single('image'), EditBlog);
router.delete('/blog/delete/:id', DeleteBlog);

module.exports = router;