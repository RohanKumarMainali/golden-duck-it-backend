const GetGallery = require("./subcontroller/get.controller")
const PostGallery = require("./subcontroller/postGallery.controller")
const DeleteGallery = require('./subcontroller/delete.controller')
const EditGallery = require("./subcontroller/putGallery.controller")
module.exports = {
   GetGallery,
   PostGallery,
   EditGallery,
   DeleteGallery
}