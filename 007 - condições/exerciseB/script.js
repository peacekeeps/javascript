function checkData() {
    const D = new Date()
    let anoAtual = D.getFullYear()
    let anoNasc = document.getElementById('ip_ano-nasc')
    let idade =  anoAtual - Number(anoNasc.value)
    let divResult = document.getElementById('div_resultado')

    if (anoNasc.value < 1900 || anoNasc.value >= anoAtual) {
        window.alert(`Insira um ano entre 1900 e ${anoAtual}.`)
    } else {
        let sexo = document.getElementsByName('ip_sex')
        let genero = ''
        if (sexo[0].checked) {
            genero = 'um homem'
            divResult.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        } else {
            genero = 'uma mulher'
            divResult.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        }
    }
}

//     if (anoNasc = 0 || anoNasc > anoAtual) {
//         // document.getElementById('ip_ano-nasc').alert(`O ano deve estar entre 1900 e ${anoAtual}.`)

//         window.alert('no')
//     }
// }