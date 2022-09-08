const router = require("express").Router();
const auth = require('../middlewares/auth')
const { 
    GetProject,
    PostProject, 
    EditProject , 
    DeleteProject 
    } =
  require("../controllers/index.controller").projects;

router.get("/getProject", GetProject);

router.post("/postProject", auth.VerifyJWT,PostProject);

router.put("/editProject", auth.VerifyJWT, EditProject);

router.delete("/deleteProject/:id", auth.VerifyJWT, DeleteProject);

module.exports = router;
