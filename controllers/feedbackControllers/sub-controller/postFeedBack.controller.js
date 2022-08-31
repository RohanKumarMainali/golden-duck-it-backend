const routineModel = require("../../../models/feedback/feedbackModel");
const { StatusCodes } = require("http-status-codes");

const PostFeedback = async (req, res) => {
  //destructuring incoming data
  const { title, description, image, author } = req.body;

  //check if all attributes are recieved or not ?
  //   if (Object.keys(req.body).length < 4) {
  //     return res
  //       .status(StatusCodes.PARTIAL_CONTENT)
  //       .send("Some fields are missing. Please provide all the fields !!");
  //   }

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
