function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  

function carregar() {
let msg = window.document.getElementById('mensagem')
let img = window.document.getElementById('imagem')
const D = new Date()
let h = addZero(D.getHours())
let m = addZero(D.getMinutes())
let hora = `${h}:${m}`

msg.innerHTML = `<p>Agora são ${hora}`

if (h >= 6 && h < 18) {
    img.scr = "imagens/dia.jpg"
} else {
    img.src = "imagens/noite.jpg"
}
}