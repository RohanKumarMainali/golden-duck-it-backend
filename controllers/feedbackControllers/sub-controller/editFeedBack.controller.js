const feedbackModel = require("../../../models/feedback/feedbackModel");
const { StatusCodes } = require("http-status-codes");


const EditFeedback = (req, res) => {
    //get the routine doc id
   

    const { feedBackId,title, description, author } = req?.body;
  
      // checking if feedBackId is in req.body
      if (feedBackId === undefined)
      return res.status(StatusCodes.NOT_ACCEPTABLE).send({
        message: "feedBack ID is empty" 
      });
  
    feedbackModel.findByIdAndUpdate(
      feedBackId,
      {
        title:title,
        description: description,
        image: req?.file?.path,
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