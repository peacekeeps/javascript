// O método .slice() permite fatiar um array ou uma string, ele pode receber até 2 parâmetros, o primeiro é o ponto de partída e o segundo é o ponto de parada (que não é incluído na contagem)

/* Exercicíos */

//Escreva uma função que receba um array e retorne um novo array contendo os dois primeiros elementos do array de entrada. Use o método .slice() para implementar essa função.


// let array = ["a", "b", "c", "d", "e", "f"]

// function sliceTest(arr) {
//     return arr.slice(0, 2)
// }

// let newArray = sliceTest(array)
// console.log(newArray)

// Escreva uma função que receba um array e dois argumentos, start e end, e retorne um novo array que contenha os elementos do array de entrada do índice start até (mas não incluindo) o índice end. Use o método .slice() para implementar essa função.

/*
function slicer(arr, start, end) {
    return arr.slice(start, end)
}

let array = ["a", "b", "c", "d", "e", "f"]
let newArray = slicer(array, 0, 2)
console.log(newArray)
*/

// Escreva uma função que receba uma string e retorne uma nova string contendo apenas os primeiros três caracteres da string de entrada. Use o método .slice() para implementar essa função.

// function slicer(str) {
//     return str.slice(0, 3)
// }

// let string = "Hello"
// let newString = slicer(string)
// console.log(newString)

// Escreva uma função que receba uma string e dois argumentos, start e end, e retorne uma nova string que contenha os caracteres da string de entrada do índice start até (mas não incluindo) o índice end. Use o método .slice() para implementar essa função.

// function slicer(str, start, end) {
//     return str.slice(start, end)
// }

// let string = "Hello"
// let newString = slicer(string, 0, 3)
// console.log(newString)

// Escreva uma função que receba um array de strings e retorne um novo array contendo os primeiros três caracteres de cada string no array de entrada. Use os métodos .map() e .slice() para implementar essa função.

// let array = [
//     "Hello",
//     "Cold",
//     "World"
// ]

// function slicer() {
//     return array.map(function(item) {
//         return item.slice(0, 3)
//     })
// }

// let newArray = slicer()
// console.log(newArray)