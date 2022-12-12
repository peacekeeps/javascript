var agora = new Date()
var h = agora.getHours()
var m = agora.getMinutes()
var hora = (`${h}:${m}`)

if (h >= 5 && h <= 11) {
    console.log(`Bom dia! Agora são ${hora}.`)
} else if (h >= 13 && hora <= 17) {
    console.log(`Boa tarde! Agora são ${hora}.`)
} else if (h >= 18 && h <= 23) {
    console.log(`Boa noite! Agora são ${hora}.`)
} else if (h = 0) {
    console.log('Agora são meia noite.')
} else if (h >= 1 && h <= 4) {
    console.log(`É hora de dormir!`)
} else if (h = 12) {
    console.log('Agora são meio dia.')
}