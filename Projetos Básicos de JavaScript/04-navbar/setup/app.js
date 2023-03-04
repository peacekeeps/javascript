// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle")
const links = document.getElementById("links")

console.log(navToggle, links)

navToggle.addEventListener("click", function() {
    console.log(links.classList)
    // if (links.classList.contains("show-menu")) {
    //     links.classList.remove("show-menu")
    // } else {
    //     links.classList.add("show-menu")
    // }
    links.classList.toggle("show-menu")
})