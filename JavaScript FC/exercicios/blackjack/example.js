
let cards = []
let player = {
    name: "Julio",
    chips: 145
}
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

function getRandomCard() {
    let random = Math.floor(Math.random()*13) + 1

    if (random === 1) {
        return 11
    } else if (random >= 11) {
        return 10
    } else {
        return random
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    playerEl.textContent = `${player.name}: ${player.chips}$`

    renderGame()
}

function renderGame() {
    cardsEl.textContent = `Cards: `

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack"
        hasBlackJack = true 
    } else {
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive == true && hasBlackJack == false) {
    messageEl.textContent = "Drawing a new card..."
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)

    renderGame()
    } else if (sum == 0){
        window.alert("You can't draw cards yet, you need to start the game")
    } else {
        window.alert("You can't draw more cards.")
    }
}