var score = 0;
var random;
var wins = 0;
var losses = 0;
var gemPoints = [];
var gem1 = $("#gem1");
var gem2 = $("#gem2");
var gem3 = $("#gem3");
var gem4 = $("#gem4");
gemPoints.push(gem1, gem2, gem3, gem4)

// Get a random number print it to the page
function getNumber(){
    random = Math.floor(Math.random() * 102) + 19;
    console.log(random);
    $("#number").text(random);

    return (random);
}

// Assign random numbers to the gems
function setPoints(){
    
    for(var i = 0; i < 4; i++){
    gemPoints.push(Math.floor(Math.random() * 12) + 1);
    }
    console.log(gemPoints);

    gem1.addClass("gem-pic");
    gem1.attr("data-gemValue", gemPoints[0]);

    gem2.addClass("gem-pic");
    gem2.attr("data-gemValue", gemPoints[1]);

    gem3.addClass("gem-pic");
    gem3.attr("data-gemValue", gemPoints[2]);

    gem4.addClass("gem-pic");
    gem4.attr("data-gemValue", gemPoints[3]);
}


$(".gem-pic").on("click", function() {
    var gemValue = ($(this).attr("data-gemValue"));
    gemValue = parseInt(gemValue);
console.log(gemValue);
    score += gemValue;
    $("#score").text(score);

    alert(score);
});


setPoints();
getNumber();