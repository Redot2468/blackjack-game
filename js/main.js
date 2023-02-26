let cards = [];
let firstCard = "";
let secondCard = "";
let sum = "";
let isBlackjack = false;
let isAlive = false;
let message = "";

// documents
let cardEl = document.querySelector(".card__element");
let startGameEl = document.querySelector(".start__game");
let sumEl = document.querySelector(".sum__element");
let messageEl = document.querySelector(".message__element");
let newCardEl = document.querySelector(".new__card");
let playerName = document.querySelector(".player__name");
let playerChips = document.querySelector(".player__chips");
let submitBtn = document.querySelector(".submit__btn");
let divContainer = document.querySelector(".container");
// events
startGameEl.addEventListener("click", startGame);
newCardEl.addEventListener("click", newCard);
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    let p = document.createElement("p");
    divContainer.appendChild(p);

    p.classList.add("player__details");
    
    let playerDetails = document.querySelector(".player__details");
    playerDetails.textContent = playerName.value + ": " + playerChips.value +"$";
    playerDetails.style.margin = "2rem";

 // player details to save to the dataBAse
// function Player(name, chips){
//     this.playername = name;
//     this.playerchips = chips;
//     this.playerdetails = () => `${this.playername}: ${this.playerchips}`;
// }

// let player = new Player(playerName.value, playerChips.value);
// console.log(player);
// end of player details
})


// functions


function startGame(){
    firstCard = generateRandom();
    secondCard = generateRandom();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    isBlackjack = false;
    renderGame();
}


function renderGame(){
    cardEl.textContent = "Cards: " ;
    sumEl.textContent = "Sum: " + sum;
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }

    if (sum === 21){
        message ="You have got blackjack!";
        isBlackjack = true;
    }
    
    else if(sum < 21){
        message = "Do you want to pick a new card";
    }
    
    else if(sum > 21){
        message = "You are out of the game";
        isAlive = false;
    }

    messageEl.textContent = message;
}


function newCard(){
    if(isAlive === true && isBlackjack === false){
        let card = generateRandom();
        cards.push(card);
         sum += card;
         renderGame();
    }
}

function generateRandom(){
    let random = Math.floor(Math.random() * 13) + 1;

    if (random === 1){
        return 11;
    }
    else if (random > 10){
        return 10;

    } 
    return random;
}


