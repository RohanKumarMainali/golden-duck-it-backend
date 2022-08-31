const BlogModel = require("../../../models/blog/blogModel")
const { StatusCodes } = require("http-status-codes");

const GetBlog = async (req, res) => {
  try {
    const _getBlog = await BlogModel.find();
    res.status(StatusCodes.ACCEPTED).json({ success: true, data: _getBlog })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}
module.exports = GetBlog;