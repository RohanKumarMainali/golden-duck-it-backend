const router = require("express").Router();
const auth = require('../middlewares/auth')

const {
  GetFeedback,
  PostFeedback,
  EditFeedback,
  DeleteFeedback
} =
  require("../controllers/index.controller").feedbacks;

router.get("/feedback", GetFeedback);

router.post("/postFeedback", auth.VerifyJWT, PostFeedback);

router.put("/editFeedback", auth.VerifyJWT, EditFeedback);

router.delete("/deleteFeedback/:id", auth.VerifyJWT, DeleteFeedback);

module.exports = router;
