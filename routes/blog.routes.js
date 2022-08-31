
const express = require('express')

const router = express.Router();

const { GetBlog} = require('../controllers/blogControllers/sub-controllers/getBlog.controller');


router.get('/blog', ()=>{
    console.log('slkdfj')
});



module.exports = router;