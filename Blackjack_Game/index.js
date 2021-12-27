
// Initializing variables
let sum = 0;  // to store the sum of cards
let hasBlackJack = false;  // checking whether game is won or not
let isAlive = false;  // check whether game is to be continued to play or not
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");  // we need to specific when using querySelector
let cardsEl = document.querySelector("#cards-el");
let cards = [];

// making a player object
let player = {
    name : "Player",
    chips : 0
}

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;


// A function that allows the game to run
function renderGame(){
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21){
        message = "Do you want to draw a new card?";
    }
    else if ( sum === 21){
        message = "Wohooo! You've got Blackjack";
        hasBlackJack = true;
        player.chips = 145;
        playerEl.textContent = player.name + ": $" + player.chips;
    }
    else{
        message = "You Lost! You're out of the game";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}


// A function that helps you generate random card.
function getRandomCard(){

    let randomNumber =  Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10){
        return 10;
    }
    else if (randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}


// A function that starts the game
function startGame(){
    isAlive = true;

    let firstCard, secondCard;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
    
}

// A function to generate a new card
function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}
