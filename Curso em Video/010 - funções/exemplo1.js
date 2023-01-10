function numParImpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let result = numParImpar(4)
console.log(`O número é ${result}.`)


// Realizando operações

function soma(n1 = 0, n2 = 0) { // os valores inicias são zero, assim, o JS consegue operar mesmo que não seja dado um prompt do valor de um dos parâmetros

    return n1 + n2
}

console.log(soma(2, 5))


// Função direto na variável
let x = function(a) {
    return a*2
}

console.log(x(5))

// Fazendo um fatorial

function fator(n) {
    let numFat = 1
    for (let c = n; c > 1; c--) {
        numFat *= c
    }
    return numFat
}

result = fator(5)
console.log(result)

// Recursivos
function fatorial(n) {
	if (n == 1) {
		return 1
	} else {
		return n * fatorial(n - 1)
    }
}

    console.log(fatorial(6))