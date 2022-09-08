const express = require('express')
const { GetContacts, PostContacts , DeleteContacts} = require('../controllers/contactController/index.controller');
const router = express.Router();
const auth = require('../middlewares/auth')

router.get('/contactGet',auth.VerifyJWT, GetContacts);
router.post('/contactPost' , PostContacts);
router.delete("/contactDelete/:id",DeleteContacts)

module.exports = router;