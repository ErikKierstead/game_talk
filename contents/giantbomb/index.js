var GameData = {

    details: function(tweetData, genData) {
        console.log(genData.results.images)
        $.get("/giantbomb/details.jade", function(template) {
            var html = jade.render(template, {
                gen: genData.results,
                data: tweetData
            })
            $("#list").html(html);
        })
    },

    tweets: function(genData, game_name) {
        $(document).ready(function(){    
            var test = $.ajax({
                url: "https://morning-peak-6716.herokuapp.com/tweet_search", // our heroku address will go here until more clever way of referencing self is found ;) ;D
                //url: "https://web-design-erikkierstead.c9.io/tweet_search",
                type: "get",
                data: {
                    q: game_name
                },
                dataType: "json", //was jsonp
                success: function(data) { GameData.details(data, genData) }, 
                error: function(){ console.log("Error in Ajax Call (oh noes!)"); }
            });
        });
    },

    gameDetails: function(game_id, game_name) {
        
         /*$(document).ready(function(){    
                $.ajax({
                    url: "https://api.giantbomb.com/game/"+game_id+"/?json_callback=?",
                    type: "get",
                    data: {api_key : apikey.apikey_bomb, format: "jsonp"},
                    dataType: "jsonp",
                    success: function(data){
                        GameData.tweets(data, game_name);
                    }
                });
            });*/
        
        
        $(document).ready(function(){    
                $.ajax({
                    //url: "//api.giantbomb.com/game/"+game_id+"/?json_callback=?",
                    //url: "https://web-design-erikkierstead.c9.io/test_details",
                    url: "https://morning-peak-6716.herokuapp.com/test_details",
                    type: "get",
                    data: {api_key : apikey.apikey_bomb, format: "jsonp", id: game_id},
                    dataType: "json",
                    success: function(data){
                        GameData.tweets(data, game_name);
                    }
                });
            });
            
            
    },

    gamer: function(data) {
        $.get("/giantbomb/list.jade", function(template) {
            var html = jade.render(template, {
                data: data
            })
            $("#list").html(html);
        })
    },
    
    searchByName: function(name) {
 
        $(document).ready(function(){
            $.ajax({
               url: "https://morning-peak-6716.herokuapp.com/test_request",
               //url: "https://web-design-erikkierstead.c9.io/test_request",
               //url: "//api.giantbomb.com/search/?json_callback=?",
               type: "get",
               data: {api_key : apikey.apikey_bomb, query: name, format: "jsonp", resources: "game"},
               dataType: "json",
               success: function(data){
                 //  console.log("Success!");
                  // console.log("Data is:");
                  // console.log(data);
                   GameData.gamer(data);
               },
               error: function(data){
                  // console.log("Error in AJAX Call");
                  // console.log(data);
                  // GameData.gamer(data);
               }
            });
        });


        /*$(document).ready(function(){    
            $.ajax({
                url: "https://api.giantbomb.com/search/?json_callback=?",
                type: "get",
                data: {api_key : apikey.apikey_bomb, query: name, format: "jsonp", resources: "game"},
                dataType: "jsonp",
                success: function(data) { 
                    GameData.gamer(data);
                } 
            });
        });*/
    },

    load: function() {

        $.get("/giantbomb/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })
    }

}
