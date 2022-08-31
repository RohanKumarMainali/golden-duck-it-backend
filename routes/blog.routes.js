
const router = require('express').Router();

const { POST_BLOG} = require('../controllers/index.controller').adminControllers;


router.post('/blog', POST_BLOG);



module.exports = router;