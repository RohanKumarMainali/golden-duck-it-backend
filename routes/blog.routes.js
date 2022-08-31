
const router = require('express').Router();

const { GET_BLOG} = require('../controllers/blogControllers/index.controller');


router.get('/blog', ()=>{
    console.log('hello')
});



module.exports = router;