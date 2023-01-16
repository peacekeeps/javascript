let inputBtn = document.getElementById("input-btn")

let boxEl = document.getElementById("box-el")

inputBtn.addEventListener("click", function() {
    window.alert("Button clicked from addEventListener")
})

boxEl.addEventListener("click", function() {
    if (boxEl.classList.contains("box-active")) {
    boxEl.classList.remove("box-active")
    boxEl.textContent = "Click to open the box!"
} else {
    boxEl.classList.add("box-active")
    boxEl.textContent = "congrats bro, u click"
}})

function test() {
    window.alert("Button clicked")
}