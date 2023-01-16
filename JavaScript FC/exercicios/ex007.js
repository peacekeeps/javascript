// Race Time

let pilotA = randomizer()
let pilotB = randomizer()

function randomizer(x) {
    x = Math.floor(Math.random() * 100) + " minutes"
    return x
}

console.log(pilotA, pilotB)

function raceTimer() {
    if (pilotA > pilotB) {
        return pilotA
    } else {
        return pilotB
    }
}

function winner() {
    if (pilotA > pilotB) {
        return "Pilot B"
    } else {
        return "Pilot A"
    }
}

let raceTime = `The race was ${raceTimer()} long, the winner was ${winner()}`

console.log(raceTime)