var path = require('path');
var friends = require('../../app/data/friends');




module.exports = function(app) {

    // I guess you shouldn't need to call everything because you want to just package these in an app so that they just all run at once because they will be continuously active while the server is running anyways. Anything that calls this file takes the exports, you don't have to specify that in your requires here. Think of it like it's own lexical scope where everything is like reaching down into the file that it needs.

    //You also don't need to require express outside of the file that is running it

    
    app.get ('/api/friends', function (req, res){
    res.json(friends); // the path joining stuff. this one will use friends.js to display JSON
    })





    app.post('/api/friends', function (req, res){

        friends.unshift(req.body); // make this the new 0 index

        console.log(friends);

        //an array that parses out the absolute differences and the url's together with each other. Which is our friends array.

        //an array that looks for the lowest difference and then displays that url. 

        //a clearing of that data after the modal is closed.

        for (var i = 1; i < friends.length; i++){

            sum = 0;

            var newarray = []; 
            var allarray = [];

            for (var b=0; b < friends[i].scores.length; b++){
                newarray.push(Math.abs(friends[0].scores[b] - friends[i].scores[b]));
            }

            for(var c = 0; c < newarray.length; c++){
                sum += newarray[c];
            }

            console.log(sum);

            

            newarray.push(sum);
            newarray.push(friends[i].photo);
            newarray.push(friends[i].name);
            allarray.push(newarray);

            console.log(allarray);
            console.log(allarray[0][0]);

            // for (var d = 0; d < allarray.length; d++){
            //     if (allarray[d + 1][10] == 'undefined'){
            //         console.log("this operator was null");
            //     }
            //     else {
            //         allarray.splice(d + 1, 1);
            //     }


            // }

            var response = {
                sum: allarray[0][10],
                photo: allarray[0][11],
                name: allarray[0][12]
            }

            console.log("Below is object");
            console.log(response);


            // friends[whatever].photo; 
        }

        

        res.send(response); //this is what we want to change to send back the logic

        //This is basically going to put what was sent to /api/friends during the get into it via the POST I think???
        
    })

   


}
