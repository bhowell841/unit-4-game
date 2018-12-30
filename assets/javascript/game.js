var score = 0;  // player score
var random;     // number to reach
var wins = 0;
var losses = 0;

var gem1;
var gem2;
var gem3;
var gem4;



// Get a random number print it to the page
function getNumber(){
    random = Math.floor(Math.random() * 102) + 19;
    console.log(random);
    $("#number").text(random);
}

// Function to give each gem a value between 1 and 12
function assignValues() {
    gem1 = Math.floor(Math.random() * 11 + 1);
    gem2 = Math.floor(Math.random() * 11 + 1);
    gem3 = Math.floor(Math.random() * 11 + 1);
    gem4 = Math.floor(Math.random() * 11 + 1);
    console.log(gem1, gem2, gem3, gem4);
};

//  Set up the click events
function onGemClick(gemValue) {
    score = score + gemValue;
    console.log(score);
    $("#score").text(score);
    if (score === random) {
        winGame();
    }
    else if (score > random) {
        loseGame();
    }
};

$(".gems").on("click", function(){
    // Set a sound here if you can figure it out
});

$("#image1").on("click", function(){
    onGemClick(gem1);
});

$("#image2").on("click", function(){
    onGemClick(gem2);
});

$("#image3").on("click", function(){
    onGemClick(gem3);
});

$("#image4").on("click", function(){
    onGemClick(gem4);
});

function winGame() {
    reset();
    wins += 1;
    $('#winCount').text(wins);
    
}

function loseGame() {
    losses += 1;
    $('#lossCount').text(losses);
    reset();
}

function reset() {
    // reset stuff here
    score = 0;
    assignValues();
    getNumber();
}

assignValues();
getNumber();