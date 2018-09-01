// // =============================
// // Load Data
// // =============================

var friends = require("../data/friends");

// // =============================
// // Routing
// // =============================

module.exports = function(app){
    // api get request
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    //api post request

    app.post('/api/friends', function(req, res){

        var newFriend = req.body;
        var userResponses = newFriend.scores;
        console.log('userResponses =' + userResponses);

        var matchName = "";
        var matchImage = "";
        var totalDifference = 10000;

        for(var i = 0; i < friends.length; i++){
            var diff = 0;

            for(var h=0; h < userResponses.length; h++){
                diff += Math.abs(friends[i].scores[h] - userResponses[h]);
            }
            console.log('diff = ' + diff);

            if(diff < totalDifference){
                console.log('Closest match found = ' + diff);
                console.log('Friend name = ' + friends[i].name);
                console.log('friend image = ' + friends[i].photo);

                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        friends.push(newFriend);

        res.json({status: 'ok', name: matchName, photo: matchImage});
    });
};