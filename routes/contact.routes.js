const router = require("express").Router();
const auth = require('../middlewares/auth')

const { 
    GetContact,
    PostContact,
    } =
  require("../controllers/index.controller").contacts

  router.get("/contactGet", auth.VerifyJWT, GetContact);
  router.post("/contactPost", PostContact);