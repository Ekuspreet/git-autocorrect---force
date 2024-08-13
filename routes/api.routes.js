
const autoCorrectController = require('./controllers/api/autoCorrect.controller');
const fileLoadController = require('./controllers/api/fileLoad.controller');


module.exports = (app) => {

    app.use("/api/autocorrect", autoCorrectController);    
    app.use("/api/fileload", fileLoadController);

};
