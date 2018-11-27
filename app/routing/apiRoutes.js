
var friendsData = require("../data/friends");

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {

    var bestMatch = {
      name: "",
      photo:"",
      friendDifference: 1000
    };
  
        // Take newScores and loop through existing scores, comparing each value and coming up wi
      // a difference for each old score.
    
      var newScores = req.body.scores;
      console.log(newScores)
      console.log("Printing out friends data")

     
      for (i=0; i< friendsData.length ; i++ ) {
        var matchResults = 0;
        for (x=0; x<newScores.length; x++) {
          matchResults = matchResults + Math.abs(friendsData[i].scores[x] - newScores[x]);
          console.log("Diff is " + matchResults)
          if (matchResults <= bestMatch.friendDifference){
            bestMatch.name = friendsData[i].name;
            bestMatch.photo = friendsData[i].photo
            bestMatch.friendDifference = matchResults;
          }
        }
        console.log(req.body.scores)
        console.log(friendsData[i].scores);
        console.log(bestMatch);
  
      }

      friendsData.push(req.body);
      res.json(bestMatch);
  
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