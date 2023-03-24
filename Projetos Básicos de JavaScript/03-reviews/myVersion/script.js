const team = [
    {
        "name": "Chiquita Bacana",
        "image": "imagens/person01.jpeg",
        "job": "Especialista em Kung Fu",
        "description": "Meu nome é Chiquita. Desde pequena eu luto Kung Fu, já matei 3 homens paraplégicos usando minhas habilidades, e claro, não lutei com todos ao mesmo tempo (risos). Gosto de ler rótulos de embalagens e comer arroz papa com mostarda."
    },
    {
        "name": "santinhasafadinha@hotmail.com",
        "image": "imagens/person02.jpeg",
        "job": "Web Designer na sapataria do seu Clayton",
        "description": "Preciso de emprego, topo qualquer coisa! Vendo pulseiras artesanais feitas de alumínio de latinha de cerveja."
    },
    {
        "name": "Clayton Jaquison",
        "image": "imagens/person03.jpeg",
        "job": "Dono da sapataria do seu Clayton",
        "description": "Concerto sapato mas de 10 anos de profisao tenho certesa, que vose nao ira sem arrepemder"
    },
    {
        "name": "Roberto Tresmarques",
        "image": "imagens/person04.jpeg",
        "job": "Multibilionário do ramo de balas de yogurte",
        "description": "Eu vendo balinha no semáforo à 2 anos, graças à minha força e perseverança, hoje tenho franquias em todos os semáforos do estado do Amapá. Emprego mais de 100 funcionários e minha empresa é considerada entre as top 100 maiores empresas do mundo. Em breve estaremos entrando na bolsa de valores."
    }
]

const body = document.body
const userBox = document.querySelector(".user-box")
const imageEl = document.getElementById("image-el")
const nameEl = document.getElementById("name-el")
const jobEl = document.getElementById("job-el")
const descriptionEl = document.getElementById("description-el")
let current = 0

console.log(team.length)

const btns = document.querySelectorAll(".btn")

imageEl.classList.remove("firstload")

btns.forEach(function(btn) {
    btn.addEventListener("click", function() {

        if (body.classList.contains("overflow")) {
        body.classList.remove("overflow")
        }

        if (btn.classList.contains("previous")) {
            if (current == 0) {
                current = team.length - 1
                change()
            } else {
                current -= 1
                change()
            }
        } else if (btn.classList.contains("next")) {
            if (current == (team.length - 1)) {
                current = 0
                change()
            } else {
                current += 1
                change()
            }
        } else {
            console.log("surprise")
            let random = Math.floor(Math.random() * team.length)

            while (random == current) {
                random = Math.floor(Math.random() * team.length)
            }

            current = random

            change()
        }
    })
})

function change() {
    const item = team[current]
    imageEl.src = item.image
    nameEl.textContent = item.name
    jobEl.textContent = item.job
    descriptionEl.textContent = item.description
}