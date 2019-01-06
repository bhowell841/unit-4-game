var score = 0;  // player score
var random;     // number to reach
var wins = 0;
var losses = 0;

var values = [];
var number;

var gem1;
var gem2;
var gem3;
var gem4;

// Variable for the sound
var lock = new Audio("./assets/images/deadbolt_lock.ogg");



// Get a random number print it to the page
function getNumber(){
    random = Math.floor(Math.random() * 102) + 19;
    console.log(random);
    $("#number").text(random);
}

// Function to give each gem a value between 1 and 12
// function assignValues() {
//     gem1 = Math.floor(Math.random() * 12 + 1);
//     gem2 = Math.floor(Math.random() * 12 + 1);
//     gem3 = Math.floor(Math.random() * 12 + 1);
//     gem4 = Math.floor(Math.random() * 12 + 1);
//     console.log(gem1, gem2, gem3, gem4);
// };

function assignValues() {
    // fill a array with 4 unique values
    for (i = 0; i < 4; i++) {
        number = Math.floor(Math.random() * 12 + 1)
        if (values.includes(number) === true){
            i = i-1;
        } else {
            values.push(number);
        }
    }
// Assign each gem a value from the Values array
    console.log(values);
    gem1 = values[0];
    gem2 = values[1];
    gem3 = values[2];
    gem4 = values[3];
    console.log(gem1, gem2, gem3, gem4);
}


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


// audio for button click
// Im so impressed with myself righ now.  Can't believe this works.
$(".gems").on("click", function(){
    lock.play();
});

// points for button clicks
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
    wins += 1;
    $('#winCount').text(wins);
    reset();
}

function loseGame() {
    losses += 1;
    $('#lossCount').text(losses);
    reset();
}

function reset() {
    // reset stuff here
    score = 0;
    values = [];
    $("#score").text(score);
    assignValues();
    getNumber();
}

assignValues();
getNumber();