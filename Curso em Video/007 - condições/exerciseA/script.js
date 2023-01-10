function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  } // Cria uma função que adiciona um "0" antes de um número, se esse número for menor que 10.
  

function carregar() {
let msg = window.document.getElementById('mensagem')
let img = window.document.getElementById('imagem')
const D = new Date()
let h = addZero(D.getHours())
let m = addZero(D.getMinutes())
let s = addZero(D.getSeconds())
let hora = `${h}:${m}:${s}`

msg.innerHTML = `<p>Agora são <span class="mono">${hora}</span></p>`

if (h >= 6 && h < 18) {
    document.body.style.background = 'linear-gradient(to top, #84B2E4, #3574B7)'
    img.scr = "imagens/dia.jpg"
} else {
    document.body.style.background =
    'linear-gradient(to top, rgb(45, 45, 156), #1C1C1A)'
    img.src = "imagens/noite.jpg"
}
}

setInterval(carregar, 1000);