let num = [2, 3, 5, 4, 8, 7]
num.sort()

// num[0] = 1
num.push(9)


console.log(`Nossa variável recebe ${num}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

for (let pos in num) {
    console.log(`A posição ${pos} recebe ${num[pos]}`)
}

console.log(`O valor 4 está na posição ${num.indexOf(4)}`)