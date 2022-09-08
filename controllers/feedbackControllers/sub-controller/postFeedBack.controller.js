const routineModel = require("../../../models/feedback/feedbackModel");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require('../../../config/cloudinary');

const PostFeedback = async (req, res) => {
  //destructuring incoming data
  const { title, description, image, author } = req.body;
  const file = req.files.image
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, { folder: 'feedback', }, function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        console.log(docs)
      }
    })
    const data = new routineModel({
      title: title,
      description: description,
      image: {
        public_id: result.public_id,
        url: result.secure_url
      },
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
