let age = Math.floor(Math.random() * (90 - 10) + 10)
let ticketFull = 40

function ticketDiscount() {
    if (age < 6) {
        return "free"
    } else if (age <18) {
        return ticketFull / 2
    } else if (age < 67) {
        return ticketFull
    } else {
        return ticketFull / 2
    }
}

let ticketPrice = ticketDiscount()

console.log(`You are ${age} years old and you pay ${ticketPrice} for the ticket.`)