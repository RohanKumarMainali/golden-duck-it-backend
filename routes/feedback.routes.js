const router = require("express").Router();
const auth = require('../middlewares/auth')

const { 
    GetFeedback,
    PostFeedback, 
    EditFeedback , 
    DeleteFeedback 
    } =
  require("../controllers/index.controller").feedbacks;

const multer = require("../multer/upload");
router.get("/feedback", GetFeedback);

router.post("/postFeedback", multer.single("image"), auth.VerifyJWT,PostFeedback);

router.put("/editFeedback", multer.single("image"),auth.VerifyJWT, EditFeedback);

router.delete("/deleteFeedback/:id",auth.VerifyJWT,DeleteFeedback);

module.exports = router;
