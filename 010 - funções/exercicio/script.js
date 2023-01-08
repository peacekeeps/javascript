let myNumbers = []
let c = 0
let select = document.getElementById('sel_value')
let result = document.getElementById('result')

//Função para verificar se número está dentro do limite
function numRange(n) { // (n) é a nossa incognita, igual um (x) qualquer, e ele serve só para representar o que vai acontecer com quem o substituir
    if (n > 0 && n < 100) {
        return true
    } else {
        return false
    }
}

//Função para verificar se valor está na lista
function numList(n, l) { // Aqui tem duas incognitas, porque precisamos de duas variáveis nessa equação
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function newValue() {
    let inputNumb = document.getElementById('ip_value')
    let newValue = Number(inputNumb.value)

    if (numRange(newValue) && !numList(newValue, myNumbers)) { // Ele entende que nos referimos aos valores booleanos
        // let select = document.getElementById('sel_value')
        
        myNumbers.push(newValue) // Para inserir novos valores em uma array
        select.innerHTML += `<option value="${c}">O valor ${newValue} foi adicionado ao índice ${c}.</option>`
        c += 1
    } else if (!numRange(newValue)) {
        alert('Digite um valor acima de 1 e menor que 100.')
    } else if (numList(newValue, myNumbers)) {
        alert('Você já adicionou esse número.')
    }

    inputNumb.value = '' // Limpa o input
    inputNumb.focus() // Seleciona denovo para escrever novo valor
}

// function newValue() { 
//     let inputNumb = document.getElementById('ip_value')
//     let newValue = Number(inputNumb.value)

//     if (newValue == 0 || newValue > 100) {
//         alert('Digite um valor acima de 1 e menor que 100.')
//     } else {
//         let select = document.getElementById('sel_value')
        
//         myNumbers += newValue 
//         select.innerHTML += `<option value="${c}">O valor ${newValue} foi adicionado ao índice ${c}.</option>`
//         c += 1
//     }
// }

function checkValue() {
    // let result = document.getElementById('result')

    // 3 numeros / myNumbers = 2 / 2 > 0 / msg[2] 2 - 1 / msg[1] 1 - 1 / msg [0]
    let numSum = 0
    let numHigh = myNumbers[0]
    let numLow = myNumbers[0]


    for (let pos in myNumbers) { //Essa estrutura vai rodar cada índice do array, mesmo sem você pedir
        numSum += myNumbers[pos]
        if (myNumbers[pos] > numHigh) {
            numHigh = myNumbers[pos]
        } else if (myNumbers[pos] < numLow) {
            numLow = myNumbers[pos]
        }
    }

    if (myNumbers.length == 0) {
        result.innerHTML = 'Adicione um valor.'
    } else {
    
        if (myNumbers.length == 1) {
        result.innerHTML = `<p>Você adicionou ${myNumbers.length} número.</p>`
        } else {
        result.innerHTML = `<p>Você adicionou ${myNumbers.length} números.</p>`
        }

        for (let pos in myNumbers) {
            result.innerHTML += `<p>Você adicionou ${myNumbers[pos]}</p>`
        }

        result.innerHTML += `<p>O maior número foi ${numHigh} e o menor foi ${numLow}.</p> <p>A soma de todos os valores foi ${numSum}.</p>`
    }   


    select.innerHTML = '' // Vai limpar o elemento select
    myNumbers = [] // Vai limpar o array
    c = 0

}