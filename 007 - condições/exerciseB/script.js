function checkData() {
    const D = new Date()
    let anoAtual = D.getFullYear()
    let anoNasc = Number(document.getElementById('ip_ano-nasc').value)
    let idade = (anoAtual - anoNasc)
    let userSex = document.getElementById('ip_sex').value
    let divResult = document.getElementById('div_resultado')

    divResult.innerHTML = `Você é ${userSex}`
}