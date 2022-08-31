const router = require("express").Router();

const { 
    GetFeedback,
    PostFeedback, 
    EditFeedback , 
    DeleteFeedback 
    } =
  require("../controllers/index.controller").feedbacks;

const multer = require("../multer/upload");
router.get("/feedback", GetFeedback);

router.post("/postFeedback", multer.single("image"), PostFeedback);

router.put("/editFeedback", multer.single("image"), EditFeedback);

router.delete("/deleteFeedback",DeleteFeedback);

module.exports = router;
