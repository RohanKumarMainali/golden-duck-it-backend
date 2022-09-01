

const router = require("express").Router();
const auth = require('../middlewares/auth')


const { 
    GetProject,
    PostProject, 
    EditProject , 
    DeleteProject 
    } =
  require("../controllers/index.controller").projects;

const multer = require("../multer/upload");
router.get("/getProject", GetProject);

router.post("/postProject", multer.single("image"), auth.VerifyJWT,PostProject);

router.put("/editProject", multer.single("image"),auth.VerifyJWT, EditProject);

router.delete("/deleteProject",auth.VerifyJWT,DeleteProject);

module.exports = router;
