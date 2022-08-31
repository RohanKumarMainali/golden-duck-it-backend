

const projectModel = require('../../../models/project/projectModel');
const { StatusCodes } = require("http-status-codes");



const GetProject = async (req, res) => {
    //fetch all project from db
    try{
        const project = await projectModel.find();
        return res.status(StatusCodes.ACCEPTED).send({
            success: true,
            projects: project,
        });
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            message: err.message
        })
    }  
  }

module.exports = GetProject;