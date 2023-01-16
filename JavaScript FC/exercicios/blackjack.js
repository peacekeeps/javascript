let blackjack = false
let isAlive = true
let message

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let resultEl = document.getElementById("result-el")

let newCardEl = document.getElementById("newcard-el")
let buttonEl = document.getElementById("button-el")
let newGameEl = document.getElementById("newgame-el")

let firstCard = 0
let secondCard = 0
let cards
let sumEl

function startGame() {
    firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
    secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
    cards = [firstCard, secondCard]
    sumEl = firstCard + secondCard
     renderGame()
}

function renderGame() {
    
    cardsEl.textContent = "Cards: " + cards
    resultEl.textContent = "Sum: " + sumEl

    if (sumEl <= 20) {
        message = "Do you want to draw a new card?"

        buttonEl.classList.add("hidden")
        newCardEl.classList.remove("hidden")

        newCardEl.addEventListener("click", newCard)
    } else if (sumEl === 21) {
        message = "You've got Blackjack!"
    } else {
        message = "You're out of the game!"
    }

    messageEl.textContent = message
}

function newCard() {
    window.alert("Drawing a new card from the deck")
    let thirdCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
    sumEl += thirdCard
    cards.push(thirdCard)
        
    renderGame()
}

// function newGame() {
//     firstCard = 0
//     secondCard = 0
//     sum = 0
//     messageEl = "Do you want to play a round?"
//     cardsEl = "Cards: "
//     resultEl = "Sum: "

//     newGameEl.classList.add("hidden")
//     buttonEl.classList.remove("hidden")

//     window.alert(`Soma inicial ${sum}`)

//     startGame()
// }

// function newCard() {
//     let newCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
//     sum += newCard
//     cardsEl.textContent += ", " + newCard
//     resultEl.textContent = "Sum: " + sum

//     startGame()
// }

// function startGame() {
//     if (firstCard === 0 && secondCard === 0) {
//         firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
//         secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
//         sum = firstCard + secondCard

//         cardsEl.textContent += firstCard
//         cardsEl.textContent += ", " + secondCard
//         resultEl.textContent += sum
//     }

//     window.alert(firstCard, secondCard, sum)

//     if (sum <= 20) {
//         message = "Do you want do draw another card?"

//         buttonEl.classList.add("hidden")
//         newCardEl.classList.remove("hidden")

//        newCardEl.addEventListener("click", newCard)

//     } else if (sum === 21) {
//             message = "Congrats, bro, you got blackjack!"
//             blackjack = true
//             messageEl.textContent = message

//             // it will display New Game
//             newGameEl.classList.remove("hidden") 
//             newCardEl.classList.add("hidden")

//             newGameEl.addEventListener("click", newGame)
//     } else if (sum > 21) {
//             message = "You lose bitch"
//             isAlive = false
//             messageEl.textContent = message

//             // it will display New Game
//             newGameEl.classList.remove("hidden")
//             newCardEl.classList.add("hidden")

//             newGameEl.addEventListener("click", newGame)
//     }
// }