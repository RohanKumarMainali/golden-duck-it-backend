

const feedbackModel = require('../../../models/feedback/feedbackModel');
const { StatusCodes } = require("http-status-codes");



const GetFeedback = async (req, res) => {
    //fetch all feedback from db
    try{
        const feedback = await feedbackModel.find();
        return res.status(StatusCodes.ACCEPTED).send({
            success: true,
            feedbacks: feedback,
        });
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            message: err.message
        })
    }  
  }

module.exports = GetFeedback;