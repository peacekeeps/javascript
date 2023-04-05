/*
===============
Variables
===============
*/

const navbox = document.querySelector(".navbox")
const linksbox = document.querySelector(".links-box")
const socialbox = document.querySelector(".social-box")
const menuBtn = document.querySelector(".menu-btn")

console.log(window.innerWidth)

window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        linksbox.classList.remove("show-menu")
    }
});

menuBtn.addEventListener("click", function() {
    // linksbox.style.display = "flex"
    linksbox.classList.toggle("show-menu")
})