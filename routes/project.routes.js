

const router = require("express").Router();

const { 
    GetProject,
    PostProject, 
    EditProject , 
    DeleteProject 
    } =
  require("../controllers/index.controller").projects;

const multer = require("../multer/upload");
router.get("/getProject", GetProject);

router.post("/postProject", multer.single("image"), PostProject);

router.put("/editProject", multer.single("image"), EditProject);

router.delete("/deleteProject",DeleteProject);

module.exports = router;
