const router = require("express").Router();

const {LOGIN} = require("../controllers/Admin/login")
const {SINGUP} = require("../controllers/Admin/signup")

router.post("/admin/signup", SINGUP);

router.post("/admin/login", LOGIN);



module.exports = router;
