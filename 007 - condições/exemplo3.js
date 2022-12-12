// switch (expressão) {
//     case valor1:
//         // codigo
//         break
//     case valor2:
//         // codigo
//         break
//     case valor3:
//         // codigo
//         break
//     defaut:
//         // codigo
//         break
// }

const d = new Date()
var dia = d.getDay()

switch(dia) {
    case 0:
        dia = ('Domingo')
        break
    case 1:
        dia = ('Segunda')
        break
    case 2:
        dia = ('Terça')
        break
    case 3:
        dia = ('Quarta')
        break
    case 4:
        dia = ('Quinta')
        break
    case 5:
        dia = ('Sexta')
        break
    case 6:
        dia = ('Sábado')
        break
}

console.log(`Hoje é ${dia}-feira`)