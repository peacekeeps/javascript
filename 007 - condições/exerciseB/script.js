function checkData() {
    const D = new Date()
    let anoAtual = D.getFullYear()
    let anoNasc = document.getElementById('ip_ano-nasc')
    let idade =  anoAtual - Number(anoNasc.value)
    let divResult = document.getElementById('div_resultado')

    if (Number(anoNasc.value) < 1900 || Number(anoNasc.value) >= anoAtual) {
        window.alert(`Insira um ano entre 1900 e ${anoAtual}`)
    } else {
        let sexo = document.getElementsByName('ip_sex');
        let genero = '';
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (sexo[0].checked) {
            genero = 'um homem'
            divResult.innerHTML = `Detectamos ${genero} de ${idade} anos.`

            if (idade >= 0 && idade < 10) {
                // kid
                img.setAttribute('src', 'imagens/kid.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto.png')
                // adulto
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
                // idoso
            }

        } else {
            genero = 'uma mulher'
            divResult.innerHTML = `Detectamos ${genero} de ${idade} anos.`

            if (idade >= 0 && idade < 10) {
                // kid
                img.setAttribute('src', 'imagens/kid.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto.png')
                // adulto
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
                // idoso
            }
        }
    divResult.appendChild(img)
    divResult.style.textAlign = 'center'
    img.style.display = 'block'
    img.style.marginTop = '10px'
    img.style.margin = 'auto'
    img.style.width = '200px'
    img.style.height = '200px'
    }
}