const feedbackModel = require("../../../models/feedback/feedbackModel");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require('../../../config/cloudinary');


const EditFeedback = (req, res) => {
  //get the routine doc id

  const file = req?.files?.image
  const result = cloudinary.uploader.upload(file.tempFilePath, { folder: 'blog', }, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log(docs)
    }
  })
  const { feedBackId, title, description, author } = req?.body;

  // checking if feedBackId is in req.body
  if (feedBackId === undefined)
    return res.status(StatusCodes.NOT_ACCEPTABLE).send({
      message: "feedBack ID is empty"
    });

  feedbackModel.findByIdAndUpdate(
    feedBackId,
    {
      title: title,
      description: description,
      image: {
        public_id: result.public_id,
        url: result.secure_url
      },
      author: author,
      createdOn: new Date().toLocaleDateString(),
    },
    (err, data) => {
      if (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
          message: 'Internal Server Error !!',
        })
      } else {
        return res.status(StatusCodes.CREATED).send({
          message: 'Feedback succesfully updated !!',
        })
      }
    }
  )
}

module.exports = EditFeedback;