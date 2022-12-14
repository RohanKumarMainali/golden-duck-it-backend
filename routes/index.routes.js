const Router = require("express").Router();

// Import user define routes
const BLOG_ROUTES = require("./blog.routes")
const FEEDBACK_ROUTES = require("./feedback.routes");
const PORTFOLIO_ROUTES = require("./portfolio.routes");
const PROJECT_ROUTES = require("./project.routes");
const ADMIN_ROUTES = require('./admin.routes')
const CONTACT_ROUTES = require('./contact.routes')
const Gallery_ROUTES = require('./gallery.routes')

// Router.use(GetBlog);
Router.use(ADMIN_ROUTES)

Router.use(FEEDBACK_ROUTES);
Router.use(PORTFOLIO_ROUTES);
Router.use(PROJECT_ROUTES);
Router.use(BLOG_ROUTES)
Router.use(CONTACT_ROUTES)
Router.use(Gallery_ROUTES)

module.exports = Router;