var path = require('path');

module.exports = function (app) {
 



    app.get ('/survey', function (req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html")); // the path joining stuff. Display survey html.
    })

    app.get ('/', function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html")); // the path joining stuff. Display home html.
    })



    app.get ('/:any', function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html")); // the path joining stuff. Display home html.
    })
    

}


