// defining the routes for the web application
// Setting up the controllers.


const landingPageController = require("./controllers/web/landingPage.controller");
module.exports = (app) => {
  // all controllers will export an instance of Router Class. (Not the actual functions).
  app.use("/", landingPageController);
};
// Ps. This is exporting a function which is then called in the server/index.js file. I'm using the app instance here.
