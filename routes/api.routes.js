
const autoCorrectController = require('@controllers/api/autoCorrect.controller');
const fileLoadController = require('@controllers/api/fileLoad.controller');
const autoCorrectForceController = require('@controllers/api/autoCorrectForce.controller');

module.exports = (app) => {

    app.use("/api/autocorrect", autoCorrectController);    
    app.use("/api/fileload", fileLoadController);
};
