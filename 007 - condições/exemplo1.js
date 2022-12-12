var idade = 66

console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log("O usuário não pode votar")
} else if (idade <18 || idade > 65) {
        console.log("O usuário pode votar, mas não é obrigatório.")
    } else {
        console.log("O usuário pode e é obrigado a votar.")
}
