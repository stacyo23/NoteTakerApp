const path = require('path'); 
const fs = require("fs"); 

module.exports = function(app) {
    //reads api data
        app.get("/api/notes", function(req, res) {
    //reads all input data
            fs.readFile(path.join(__dirname, "..db/db.json"), "utf-8", function(err, data) {
                if (err) throw err;
    
                res.json(data);
               console.log(data);  
            })
            //provides a "good" status
            return res.status(200); 
          });
    
        //   app.post("/api/notes", function (req, res) {
    
            
        //   }); 
    
        //   app.delete("/api/notes/:id", function (req, res) {
    
            
        // }); 
    }