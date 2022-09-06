const controllers = {
    blogs: require("./blogControllers/index.controller"),
    feedbacks: require("./feedbackControllers/index.controller"),
    portfolios: require("./portfolioControllers/index.controller"),
    projects: require("./projectControllers/index.controller"),
    contacts: require("../controllers/contactController/index.controller")
   }
   
   module.exports = controllers;