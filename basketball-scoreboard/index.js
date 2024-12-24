let homeScoreElement = document.getElementById("score-home-el");
let guestScoreElement = document.getElementById("score-guest-el");

let homeScore = 0;
let guestScore = 0;

function homeAddOne() {
    homeScore += 1;
    homeScoreElement.textContent = homeScore;
}

function homeAddTwo() {
    homeScore += 2;
    homeScoreElement.textContent = homeScore;
}

function homeAddThree() {
    homeScore += 3;
    homeScoreElement.textContent = homeScore;
}

function homeReset() {
    homeScore = 0;
    homeScoreElement.textContent = 0;
}

function guestAddOne() {
    guestScore += 1;
    guestScoreElement.textContent = guestScore;
}

function guestAddTwo() {
    guestScore += 2;
    guestScoreElement.textContent = guestScore;
}

function guestAddThree() {
    guestScore += 3;
    guestScoreElement.textContent = guestScore;
}

function guestReset() {
    guestScore = 0;
    guestScoreElement.textContent = 0;
}
