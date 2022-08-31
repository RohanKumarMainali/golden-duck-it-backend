const GetProject = require("./sub-controller/getProject.controller");
const PostProject = require("./sub-controller/postProject.controller");
const EditProject =require('./sub-controller/editProject.controller');
const DeleteProject = require('./sub-controller/deleteProject.controller');
// const UpdateRoutine = require("./sub-controllers/updateRoutine.controller");
// const DeleteRoutine = require("./sub-controllers/deleteRoutine.controller");


module.exports = {
    GetProject,
    PostProject,
    EditProject,
    DeleteProject,
}