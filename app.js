var express = require("express");

//Creating Web Server 
var http = require('http');
var path = require('path');

//Creating the Web Server:
var app = express();
var server = http.createServer(app);

//Twitter Module:
var Twitter = require('twitter');

//Will Regenerate New API Keys:
var client = new Twitter({
    consumer_key: 'HUd2dbIQJNF0E29QeTvP4ZOST',
    consumer_secret: 'VW8DDSz7AoF2zKAAGxuDgN4gMeAGMZZptyGr3OjYRDTl7gm4mf',
    access_token_key: '931174363-IkBnF7yUBODRoLu82jxio8iQnKCDbKJZEh6OBYpT',
    access_token_secret: 'JTW6LS7zKs3sq8Li2eEmFgCV4PeFuc037Xpis0lkHtwZo'
});

app.use(express.static(__dirname + "/build"));

app.get('/tweet_search', function(req, res){
 
    var query = req.query['q'] || "(>^_^)> ---- o PEW PEW PEW PEW!!";
    
    client.get('search/tweets', {q: query}, function(error, tweets, response){
   
            if(error) {
                //res.send({statuses:})
                //return an object with statuses with blank / error values:
            }
         
            //on Success:
            else { res.send(tweets) }
    });

});

app.listen(process.env.PORT || 8000);