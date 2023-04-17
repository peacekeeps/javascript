/*
O método .splice() em JavaScript é usado para modificar um array existente, adicionando ou removendo elementos dele.

- Adicionar novos elementos em uma determinada posição do array
- Remover elementos de uma determinada posição do array
- Substituir elementos de uma determinada posição do array por outros elementos

O método .splice() modifica o array original e retorna um novo array contendo os elementos removidos, se houver algum.

O método .splice() aceita pelo menos dois argumentos:

- O primeiro argumento é o índice de partida a partir do qual você deseja realizar a adição, remoção ou substituição de elementos. Se o índice for negativo, ele contará a partir do final do array.
- O segundo argumento é a quantidade de elementos que você deseja remover do array, começando do índice especificado no primeiro argumento. Se você não deseja remover nenhum elemento, basta passar 0 como segundo argumento.

Você pode adicionar quantos elementos quiser após o segundo argumento para adicionar novos elementos no array ou substituir elementos existentes.
*/

//Crie um array de palavras com pelo menos cinco elementos e use o método .splice() para adicionar duas novas palavras no início do array. Em seguida, exiba o array resultante no console.

// let array = [
//     "adolfo",
//     "julio",
//     "vivianne",
//     "bianconi",
//     "tatiana"
// ]

// array.splice(0, 0, "juliana", "stephany")

// console.log(array)

//Crie um array de números com pelo menos seis elementos e use o método .splice() para substituir o segundo e o terceiro elementos do array por um único elemento, o número 15. Em seguida, exiba o array resultante no console.

// let array = [1, 2, 3, 4, 5, 6]

// array.splice(1, 2, 15)

// console.log(array)

//Crie um array de objetos com pelo menos seis elementos, em que cada objeto tenha duas propriedades: "nome" e "idade". Use o método .splice() para remover os dois primeiros elementos do array e, em seguida, adicione dois novos objetos no início do array, cada um com uma propriedade "cidade". Exiba o array resultante no console.

// let array = [
//     {
//         "nome": "julio",
//         "idade": 26
//     },
//     {
//         "nome": "adolfo",
//         "idade": 20
//     },
//     {
//         "nome": "vivianne",
//         "idade": 25
//     },
//     {
//         "nome": "geraldo",
//         "idade": 22
//     },
//     {
//         "nome": "iasmin",
//         "idade": 23
//     },
//     {
//         "nome": "juliana",
//         "idade": 32
//     }
// ]

// let sampa = {"cidade": "são paulo"}
// let rio = {"cidade": "rio de janeiro"}

// array.splice(0, 2, sampa, rio)

// console.log(array)

// Crie um array de objetos com pelo menos oito elementos, em que cada objeto tenha três propriedades: "nome", "idade" e "cidade". Use o método .splice() para remover todos os elementos do array que atendam a duas condições: (1) a idade é menor que 30 e (2) a cidade é diferente de "São Paulo". Em seguida, substitua o nome do primeiro elemento restante do array por "Novo Nome". Exiba o array resultante no console.

//array - 8 objetos - 3 props "nome", "idade", "cidade"
//function - se idade < 30 e cidade !== "sao paulo" então remove do array - o nome do primeiro elemento do novo array será "novo nome"

// let array = [
//   {
//     nome: "julio",
//     idade: 33,
//     cidade: "são paulo",
//   },
//   {
//     nome: "vivianne",
//     idade: 25,
//     cidade: "campinas",
//   },
//   {
//     nome: "adolfo",
//     idade: 22,
//     cidade: "são vicente",
//   },
//   {
//     nome: "fulinelson",
//     idade: 52,
//     cidade: "rio branco",
//   },
//   {
//     nome: "claudiscleiton",
//     idade: 33,
//     cidade: "guaruja",
//   },
//   {
//     nome: "edvandro",
//     idade: 28,
//     cidade: "são paulo",
//   },
//   {
//     nome: "adamasteu",
//     idade: 44,
//     cidade: "são paulo",
//   },
//   {
//     nome: "irineu",
//     idade: 56,
//     cidade: "rio de janeiro",
//   },
// ];

// for (i = 0; i < array.length; i ++) {
//     if (array[i].idade < 30 || array[i].cidade !== "são paulo") {
//         console.log(array[i])
//         array.splice(i, 1)
//         i-- // ERA ESSA MERDA QUE EU NÃO TAVA ACERTANDO, PRECISA COMPENSAR PELO ITEM QUE EU REMOVI
//     }
// }

// console.log(array)

//Dado um array nums com números inteiros, crie um novo array newNums que contenha apenas os elementos entre as posições 2 e 5 (inclusive) do array nums, e remova esses elementos do array nums original. Em seguida, adicione o número 99 ao final do array nums. Exiba o array newNums e o array nums resultantes.

// let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newNumbs = numbs.slice(2, 6)

// numbs.splice(2, 4)
// numbs.splice(numbs.length, 0, 99)

// console.log(numbs, newNumbs)

// function quickCheck(arr, elem) {
//     // Only change code below this line
//     return arr.indexOf(elem)
//     // Only change code above this line
//   }

//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

function filteredArray(arr, elem) {
    let newArr = [];
    // Altere apenas o código abaixo desta linha
  for (i = 0; i < arr.length; i++) {    
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i])
    }
  }
    // Altere apenas o código acima desta linha
    return newArr;
  }
  
  
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));


  function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }