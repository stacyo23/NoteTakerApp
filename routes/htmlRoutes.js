const path = require('path'); 

module.exports = function(app) {
//sends the html file for the * path
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
      
//sends the notes file for the /notes path
      app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });
}