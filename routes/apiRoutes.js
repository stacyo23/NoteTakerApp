const path = require('path'); 
const fs = require("fs"); 


//exports function to server.js
module.exports = function(app) {
    //reads api data
        app.get("/api/notes", function(req, res) {
    //reads all input data
            fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function(err, data) {
                if (err) throw err;
    
                res.json(JSON.parse(data));
               console.log(data);  
            })
            //provides a "good" status
            return res.status(200); 
          });
    
          //create a new entry
          app.post("/api/notes", function (req, res) {
    
            fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function(err, data) {
                if (err) throw err;
               //parse notes into readable format
                const allNotes = JSON.parse(data);
                console.log(allNotes);
                const newNotes = [];
        
                //adds current note to allNotes
                allNotes.push(req.body);
                console.log(allNotes)
        
                //pushes added note to newNotes array
                for(let i = 0; i < allNotes.length; i++) {
        
                    const addNote = {
                        title: allNotes[i].title,
                        text: allNotes[i].text,
                        id: newNotes.length
                    };
        
                    newNotes.push(addNote);
                    console.log(newNotes);
                }
                //writes note
                fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(newNotes, null, 2), function(err) {
                    if (err) throw err;
                    res.json(req.body);
                    console.log(newNotes);
                    console.log(allNotes)
                });
                return res.status(200)
            });

          }); 
    
          app.delete("/api/notes/:id", function(req, res) {

            fs.readFile(path.join(__dirname, "../db/db.json"),"utf8", function(err, data) {
                if (err) throw err;
        
                
                let allNotes = JSON.parse(data);
                console.log(JSON.stringify(allNotes) + "will be deleted");
                
                //filters out note to be deleted    
                allNotes = allNotes.filter(function(data) {
                    return data.id !=req.params.id;
                });
        
            
                fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(allNotes, null, 2), function(err) {
                    if (err) throw err;
                    res.json(req.body);
                    });
                
                    
                });
                return res.status(200)
            });
    }