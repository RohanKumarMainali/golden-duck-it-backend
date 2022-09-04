const projectModel = require('../../../models/project/projectModel');
const { StatusCodes } = require("http-status-codes");

const DeleteProject = (req, res) => {
  //get the routine doc id
  const  projectId  = req.body.projectId;
  console.log(projectId)

  //check if projectId is provided or not

  if(projectId === undefined){
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: "projectId is empty !"
    })
  }
  
  projectModel
    .deleteOne({ _id: projectId })
    .then((data) => {
      return res.status(StatusCodes.OK).send({
        message: 'Project succesfully deleted !!',
      })
    })
    .catch((err) => {
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: 'Failed to delete routine !!',
      })
    })
}

module.exports = DeleteProject;