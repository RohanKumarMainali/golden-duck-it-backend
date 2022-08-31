
const router = require('express').Router();

const { 
     PostFeedback,
    } = require('../controllers/index.controller').feedbacks;


router.get('/feedback', GetFeedback);

router.post('/postFeedback',PostFeedback);

module.exports = router;