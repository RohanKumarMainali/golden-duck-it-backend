const routineModel = require("../../../models/feedback/feedbackModel");
const { StatusCodes } = require("http-status-codes");

const PostFeedback = async (req, res) => {
  //destructuring incoming data
  const { title, description, image, author } = req.body;

  try {
    const data = new routineModel({
      title: title,
      description: description,
      image: req.file.path,
      author: author,
      createdOn: new Date().toLocaleDateString(),
    });

    data.save();
    return res.status(StatusCodes.ACCEPTED).send({
      success: true,
      message: "feedback posted successfully",
    });
  } catch (err) {
    return res.status(500).send({
      success: "fail",
      message: err.message,
    });
  }
};

module.exports = PostFeedback;
