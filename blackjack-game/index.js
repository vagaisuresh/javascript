// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");

// Create a function, getRandomCard(), that always returns the number 5
// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard() {
    return Math.floor(Math.random(1, 10) * 9);
}

function startGame() {
    renderGame();
}

function renderGame() {
    //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    // Create a for loop that renders out all the cards instead of just two

    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    // 3. Use the getRandomCard() to set the value of card
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}
