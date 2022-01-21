let player = {
    name: "Per",
    chips: 200
};

let sum = 0;
let cards = [];
let age = 21;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
 let sumEl = document.getElementById("sum-el");
 let cardsEl = document.getElementById("cards-el");
 let newEl = document.getElementById("new-el");
 let playerEl = document.getElementById("player-el");
 let image = document.getElementById("image-el");
 console.log(playerEl);
//let sumEl = document.querySelector("#sum-el");
//can do classes like this as well as body and h1 etc
console.log(messageEl);



if (age >= 21)
{
    console.log("You're in");
}else{
    console.log("You can not enter the club");
}

function getRandomCard()
{   
    let rand = Math.floor(Math.random() * 13) + 1;
    if(rand > 10)
    {
        return 10;
    }else if (rand ===1)
    {
        return 11;
    }else{
        return rand;
    }

    
}
// card number and suit chosen append strings
function displayCard(number)
{
    let suitNumber = Math.floor(Math.random() * 3) + 1;
    let suit; 
    let num;
    switch(suitNumber){
        case 1: 
            suit = "_diamonds";
            break;
        case 2: 
            suit = "_spades";
            break;
        case 3: 
            suit = "_clubs";
            break;
        case 4:
            suit = "_hearts";
            break;
    }

    switch (number){
        case 1:
            num = "ace_of";
            break;
        case 2:
            num = "2_of";
            break;
        case 3: 
            num = "3_of";
            break;
        case 4: 
            num = "4_of";
            break;
        case 5: 
            num = "5_of";
            break;
        case 6:
            num = "6_of";
            break;
        case 7:
            num = "7_of";
            break;
        case 8:
            num ="8_of";
            break;
        case 9:
            num = "9_of";
            break;
        case 10: 
            num = "10_of";
            break;
        case 11:
            num = "jack_of";
            break;
        case 12:
            num = "queen_of";
            break;
        case 13:
            num = "king_of";
            break;
    }
    let fileName = "./PNG-cards-1.3" + "/" + num + suit +".png";
   //probably want a loop;
   
   let cardImage = document.createElement("img");
   cardImage.src = fileName;
   cardImage.width = "100";
   document.getElementById('image-el').appendChild(cardImage);
//    document.body.insertBefore(cardImage, cardsEl);
    
    
}



function newCard(){
    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }else{
        messageEl.textContent = "Do you want to start a new game?";
    }

}

function startGame()
{
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    document.getElementById("image-el").innerHTML = "";
    renderGame();
}

function renderGame(){
    
    console.log(isAlive);
    console.log(hasBlackJack);
    document.getElementById("image-el").innerHTML = "";

    //render out first card and second card
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
        displayCard(cards[i]);
        playerEl.textContent = player.name + ": " + "chips" + " £" + player.chips;

    }
    
    sumEl.textContent = "Sum: " + sum;

if(sum <= 20)
{
    message = "Do you want to draw another card?";
    messageEl.textContent  = "Do you want to draw another card?";

} else if(sum === 21)
{
    
    message = "You won!!";
    messageEl.textContent = "You won!!";
    hasBlackJack = true;
    player.chips +=50;
}else
{
    message = "You're out of the game!";
    messageEl.textContent = "You're out of the game!";
    isAlive = false;
    player.chips -= 40;
}
messageEl.textContent = message;
}
// CASH OUT!

