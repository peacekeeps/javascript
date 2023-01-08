function contar() {
    let ini = document.getElementById('ip_inicio')

    let fim = document.getElementById('ip_fim')

    let intervalo = document.getElementById('ip_intervalo')

    let result = document.getElementById("resultado")

    // Length, NÃO É LENGHT
    if (ini.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0) {
        window.alert('Insira valores válidos')
    // } else if (ini.value > fim.value || intervalo.value > fim.value) {
    //     window.alert('O valor inicial e o intervalo não podem ser maiores que o valor final.')
    } else { //Eu apanhei um pouco aqui, porque precisava DECLARAR as váriaveis dos valores como números e ai operar com elas
        let i = Number(ini.value)
        let f = Number(fim.value)
        let s = Number(intervalo.value)

        // se tentar operar com o ini.value, fim.value, etc, ele não opera
        // while (i <= f) { 
        //     result.innerHTML += `${i}`
        //     i += s
        // }

        result.innerHTML = 'Contando: <br>'

        if (i <= f) {
            for (let c = i; c <= f; c += s) {
                result.innerHTML += `\u{1f449} ${c} `
            }
        } else {
            for (let c = i; c >= f; c -= s)
                result.innerHTML += `\u{1f449} ${c} `
        }
    }
}