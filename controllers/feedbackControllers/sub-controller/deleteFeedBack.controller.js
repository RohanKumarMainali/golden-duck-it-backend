const feedbackModel = require('../../../models/feedback/feedbackModel');
const { StatusCodes } = require("http-status-codes");

const DeleteFeedback = (req, res) => {
  //get the routine doc id
  const feedBackId = req.params.id;
  console.log(feedBackId)

  //check if feedBackId is provided or not

  if(feedBackId === undefined){
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: "feedBack is empty !"
    })
  }
  
  feedbackModel
    .deleteOne({ _id: feedBackId })
    .then((data) => {
      return res.status(StatusCodes.OK).send({
        message: 'feedBack succesfully deleted !!',
      })
    })
    .catch((err) => {
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: 'Failed to delete routine !!',
      })
    })
}

module.exports = DeleteFeedback;