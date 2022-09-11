const projectModel = require("../../../models/project/projectModel");
const {
  StatusCodes
} = require("http-status-codes");
const cloudinary = require('../../../config/cloudinary');

const PostProject = async (req, res) => {
  //destructuring incoming data
  const {
    title,
    category,
    image,
    link
  } = req.body;
  // const file = req.files.image
  const file = req.files.image


  try {

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: 'portfolio',
    }, function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        console.log(docs)
      }
    })

    const data = await new projectModel({
      title: title,
      category: category,
      image: {
        public_id: result.public_id,
        url: result.secure_url
      },
      link: link,
      createdOn: new Date().toLocaleDateString(),
    });
    await data.save();


    return res.status(StatusCodes.ACCEPTED).send({
      success: true,
      message: "project posted successfully",
      project: data
    });
  } catch (err) {
    return res.status(500).send({
      success: "fail",
      message: err.message,
    });
  }
};

module.exports = PostProject;