const menu = document.querySelector(".menu")
const menuBtn = document.querySelectorAll(".menu-btn")
const closeBtn = document.querySelector(".close-btn")

menuBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        menu.classList.toggle("menu-hidden")
    })
})


closeBtn