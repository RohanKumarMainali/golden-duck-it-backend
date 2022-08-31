const Router = require("express").Router();

// Import user define routes
// const GetBlog = require("./blog.routes")
const BLOG_ROUTES = require("./blog.routes")
const FEEDBACK_ROUTES = require("./feedback.routes");
// const PORTFOLIO_ROUTES = require("./portfolio.routes");
// const PROJECT_ROUTES = require("./project.routes");

// Router.use(GetBlog);

Router.use(FEEDBACK_ROUTES);
// Router.use(PORTFOLIO_ROUTES);
// Router.use(PROJECT_ROUTES);

module.exports = Router;