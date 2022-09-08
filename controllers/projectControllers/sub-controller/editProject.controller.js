const projectModel = require("../../../models/project/projectModel");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require('../../../config/cloudinary');


const EditProject = (req, res) => {
  //get the routine doc id

  const file = req?.files?.image
  const result = cloudinary.uploader.upload(file.tempFilePath, { folder: 'blog', }, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log(docs)
    }
  })
  const { projectId, title, category, link } = req?.body;

  // checking if projectId is in req.body
  if (projectId === undefined)
    return res.status(StatusCodes.NOT_ACCEPTABLE).send({
      message: "feedBack ID is empty"
    });

  projectModel.findByIdAndUpdate(
    projectId,
    {
      title: title,
      category: category,
      image: {
        public_id: result.public_id,
        url: result.secure_url
      },
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