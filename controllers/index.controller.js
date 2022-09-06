const controllers = {
    blogs: require("./blogControllers/index.controller"),
    feedbacks: require("./feedbackControllers/index.controller"),
    portfolios: require("./portfolioControllers/index.controller"),
    projects: require("./projectControllers/index.controller"),
    contacts: require("./contact/index.controller"),
   }
   
   module.exports = controllers;