let blackjack = false
let isAlive = true
let message
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let resultEl = document.getElementById("result-el")
let yesButton = document.getElementById("yes-button")
let noButton = document.getElementById("no-button")
let buttonEl = document.getElementById("button-el")

function startGame() {
    let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
    let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
    let sum = firstCard + secondCard

    cardsEl.textContent += firstCard
    cardsEl.textContent += ", " + secondCard
    resultEl.textContent += sum

    if (sum <= 20) {
        message = "Do you want do draw another card?"

        buttonEl.classList.add("hidden")
        yesButton.classList.remove("hidden")
        noButton.classList.remove("hidden")
        yesButton.classList.add("flex-button")
        noButton.classList.add("flex-button")

        if (yesButton.addEventListener("click")) {
            let thirdCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
            sum += thirdCard
            cardsEl.textContent += ", " + thirdCard
            resultEl.textContent += ", " + sum

            if (sum <= 20) {
                message = "Do you want do draw another card?"
        
                if (yesButton.addEventListener("click")) {
                    let fourthCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
                    sum += fourthCard
                    cardsEl.textContent += ", " + fourthCard
                    resultEl.textContent += ", " + sum
                } else {
                    return
                }     
            } else if (sum === 21) {
                message = "Congrats, bro, you got blackjack!"
                blackjack = true
            } else {
                message = "You lose bitch"
                isAlive = false
            }
        } else {
            return
        }     
    } else if (sum === 21) {
        message = "Congrats, bro, you got blackjack!"
        blackjack = true
    } else {
        message = "You lose bitch"
        isAlive = false
    }
    
    messageEl.textContent = message
}

