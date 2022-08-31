const GetFeedback = require("./sub-controller/getFeedBack.controller");
const PostFeedback = require("./sub-controller/postFeedBack.controller");
const EditFeedback =require('./sub-controller/editFeedBack.controller');
const DeleteFeedback = require('./sub-controller/deleteFeedBack.controller');
// const UpdateRoutine = require("./sub-controllers/updateRoutine.controller");
// const DeleteRoutine = require("./sub-controllers/deleteRoutine.controller");


module.exports = {
    GetFeedback,
    PostFeedback,
    EditFeedback,
    DeleteFeedback,
}