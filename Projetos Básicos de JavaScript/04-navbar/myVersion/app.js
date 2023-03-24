/*
===============
Variables
===============
*/

const navbox = document.querySelector(".navbox")
const linksbox = document.querySelector(".links-box")
const socialbox = document.querySelector(".social-box")
const menuBtn = document.querySelector(".menu-btn")

menuBtn.addEventListener("click", function() {
    linksbox.classList.toggle("show-menu")
})