let valorInicio = 1
let valorFim = 10
let intervalo = 2

if (valorInicio == 0 || valorFim == 0 || intervalo == 0) {
    console.log('Insira um valor válido')
} else if (valorInicio >= valorFim) {
    console.log('O valor inicial não pode ser maior ou igual o valor final.')
} else if (intervalo > valorFim) {
    console.log('O intervalo não pode ser maior que o valor final.')
} else {
    while (valorInicio < valorFim) {
        console.log(`${valorInicio}`)
        valorInicio += intervalo
    }
}