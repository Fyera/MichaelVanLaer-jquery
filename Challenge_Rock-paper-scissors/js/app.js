// Bron: https://www.youtube.com/watch?v=qWPtKtYEsN4&feature=youtu.be
// var choices = ["paper", "rock", "scissors"];
// var i = (Math.random() * 3);
// var ComChoice = choices[i];
var userScore = 0;
var comScore = 0;

$(document).ready(function() {
    $("button#play").on("click", startGame);
    $("button.rock").on("click", playGame);
    $("button.paper").on("click", playGame);
    $("button.scissors").on("click", playGame);

});

function startGame() {
    console.log("ready!");
    $(".match").addClass("fadeIn").removeClass("fadeOut");
    $(".intro").addClass("fadeOut");
};

function playGame() {
    var choices = ["paper", "rock", "scissors"];
    var i = Math.floor(Math.random() * 3);
    var comChoice = choices[i];

    //querySelector Get the first element in the document
    const userHand = document.querySelector(".player-hand");
    const comHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    //forEach method executes a provided function once for each array element
    // => Arrow functions allow us to write shorter function syntax
    hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
            this.style.animation = "";
        });
    });
    setTimeout(() => {
        result(this.textContent, comChoice);
        userHand.src = `./assets/${this.textContent}.png`;
        comHand.src = `./assets/${comChoice}.png`;
    }, 2000)
    console.log(this.textContent);
    console.log(userHand);

    userHand.style.animation = "shakePlayer 2s ease";
    comHand.style.animation = "shakeComputer 2s ease";
};

function result(userChoice, comChoice) {
    const winner = document.querySelector(".winner");
    if (userChoice === comChoice) {
        winner.textContent = "It is a tie";
        return;
    } else if (userChoice === "rock") {
        if (comChoice === "scissors") {
            winner.textContent = "The player wins!";
            userScore++;
            score();
            return;
        } else {
            winner.textContent = "The computer wins!";
            comScore++;
            score();
            return;
        }
    } else if (userChoice === "paper") {
        if (comChoice === "rock") {
            winner.textContent = "The player wins!";
            userScore++;
            score();
            return;
        } else {
            winner.textContent = "The computer wins!";
            comScore++;
            score();
            return;
        }
    } else if (userChoice === "scissors") {
        if (comChoice === "paper") {
            winner.textContent = "The player wins!";
            userScore++;
            score();
            return;
        } else {
            winner.textContent = "The computer wins!";
            comScore++;
            score();
            return;
        }
    }
}

function score() {
    console.log(userScore);
    $(".player-score p").text(userScore);
    $(".computer-score p").text(comScore);
};