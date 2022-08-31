
const router = require('express').Router();

const { GetFeedback} = require('../controllers/index.controller').feedbacks;


router.get('/feedback', GetFeedback);



module.exports = router;