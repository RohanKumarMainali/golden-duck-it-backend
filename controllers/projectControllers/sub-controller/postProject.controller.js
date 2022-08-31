const projectModel = require("../../../models/project/projectModel");
const { StatusCodes } = require("http-status-codes");

const PostProject =  (req, res) => {
  //destructuring incoming data
  const { title, category, image, link} = req.body;

  //check if all attributes are recieved or not ?
  //   if (Object.keys(req.body).length < 4) {
  //     return res
  //       .status(StatusCodes.PARTIAL_CONTENT)
  //       .send("Some fields are missing. Please provide all the fields !!");
  //   }

  try {
    const data = new projectModel({
      title: title,
      category: category,
      image: req.file.path,
      link: link,
      createdOn: new Date().toLocaleDateString(),
    });

    data.save();
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
