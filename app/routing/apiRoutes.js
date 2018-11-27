
var friendsData = require("../data/friends");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
     
  

        // Take newScores and loop through existing scores, comparing each value and coming up wi
      // a difference for each old score.
    
      var newScores = req.body.scores;
      console.log(newScores)
      console.log("Printing out friends data")

      var matchResults = 0;
      for (i=0; i< friendsData.length ; i++ ) {
        for (x=0; x<newScores.length; x++) {
          matchResults = matchResults + Math.abs(friendsData[i].scores[x] - newScores[x]);
          console.log("Diff is " + matchResults)
        }
        console.log(req.body.scores)
        console.log(friendsData[i].scores);
  
      }

      friendsData.push(req.body);
      res.json(true);
    



    
  });



//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = [];
//     tableData.length = [];

//     res.json({ ok: true });
//   });
};