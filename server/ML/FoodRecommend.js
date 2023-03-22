var rec = require("./RecommendEngine.js");
var fs = require('fs');

function loadFoodListing(){
    var listing={};

    const path = require('path');
    const filePath = path.join(__dirname, 'foodData.csv');
    var foodData = fs.readFileSync(filePath).toString().split('\n')
    foodData.shift();
    var p;
    for(var line in foodData){
        p = foodData[line].trim().split(',');
        var id = p[0],
            itemName = p[1]
            restaurant = p[2];
            price = p[5];
        listing[id] = [itemName, restaurant, price];
    }
    
    var prefs = {
        setDefault:function(props){
            if(!this[props]){
                this[props] ={};
            }
        }
    }

    const filePath2 = path.join(__dirname, 'ratings.csv');
    var userData = fs.readFileSync(filePath2).toString().split("\n");

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

generateFoodRecommendation = function(userID){
    var data = loadFoodListing();

    var itemsim = rec.calcSimilarItem(data,30,rec.pearson);
    var f = rec.recommendItem(data,itemsim,userID);

    console.log("Generating recommendations for user: ", userID);

    for(var i =0;i<10;i++){
        console.log(i+1,": ", f[i]['item']);
    }
    console.log();
    return f;
}

module.exports={
    gfr:generateFoodRecommendation
}