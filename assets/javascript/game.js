var score = 0;
var random;
var wins = 0;
var losses = 0;
var values = [];
var gemPoints = [];

var gem1 = $("#gem1");
var gem2 = $("#gem2");
var gem3 = $("#gem3");
var gem4 = $("#gem4");


// Get a random number print it to the page
function getNumber(){
    random = Math.floor(Math.random() * 102) + 19;
    console.log(random);
    $("#number").text(random);

    return (random);
}

// Put the gem variables into the array
gemPoints.push(gem1, gem2, gem3, gem4);

// create a number array and assign values to the gems
function setPoints(){
    for (p = 0; p < 4; p++) {
        values.push(Math.floor(Math.random() * 12) + 1);
    }
    console.log(values);

    for (i = 0; i < gemPoints.length; i++){
        gemPoints[i].attr("data-value", values[i]);
       // $("#gem").append(gemPoints[i]);
    console.log(gemPoints)
    }
}


$(".gem-pic").on("click", function() {
    var gemValue = ($(this).attr("data-Value"));
    gemValue = parseInt(gemValue);
console.log(gemValue);
    score += gemValue;
    $("#score").text(score);

    alert(score);
});


setPoints();
getNumber();