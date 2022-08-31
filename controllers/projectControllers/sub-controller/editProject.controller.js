const projectModel = require("../../../models/project/projectModel");
const { StatusCodes } = require("http-status-codes");


const EditProject = (req, res) => {
    //get the routine doc id
   

    const { projectId,title, category, image, link} = req.body;
  
      // checking if projectId is in req.body
      if (projectId === undefined)
      return res.status(StatusCodes.NOT_ACCEPTABLE).send({
        message: "feedBack ID is empty" 
      });
  
    projectModel.findByIdAndUpdate(
      projectId,
      {
        title:title,
        category: category,
        image: image,
        link: link, 
        createdOn: new Date().toLocaleDateString(),
      },
      (err, data) => {
        if (err) {
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            message: 'Internal Server Error !!',
          })
        } else {
          return res.status(StatusCodes.CREATED).send({
            message: 'Project Data succesfully updated !!',
          })
        }
      }
    )
  }
  
  module.exports = EditProject;