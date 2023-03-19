var rec = require("./RecommendEngine.js");
var fs = require('fs');

function loadFoodListing(){
    var listing={};

    var foodData = fs.readFileSync("foodData.csv").toString().split('\n')
    foodData.shift();
    var p;
    for(var line in foodData){
        p = foodData[line].trim().split(',');
        var id = p[0],
            itemName = p[1];

        listing[id] = itemName;
    }
    
    var prefs = {
        setDefault:function(props){
            if(!this[props]){
                this[props] ={};
            }
        }
    }
    var userData = fs.readFileSync("ratings.csv").toString().split("\n");

    userData.shift();

    for(var line in userData){
        var data = userData[line].trim().split(',');
        var user = data[0],
            foodID = data[1],
            rating = data[2],
            timestamp = data[3];
        prefs.setDefault(user,{});
        prefs[user][listing[foodID]] =parseFloat(rating);
    }
    return prefs;
}

function generateFoodRecommendation(userID){
    var data = loadFoodListing();

    var itemsim = rec.calcSimilarItem(data,30,rec.pearson);
    var f = rec.recommendItem(data,itemsim,userID);

    for(var i =0;i<10;i++){
        console.log(i+1,": ", f[i]['item']);
    }
}

generateFoodRecommendation("100");
