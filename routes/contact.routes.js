const express = require('express')
const { GetContacts, PostContacts } = require('../controllers/contactController/index.controller');
const router = express.Router();
const auth = require('../middlewares/auth')

router.get('/contactGet', GetContacts);
router.post('/contactPost' , PostContacts);

module.exports = router;