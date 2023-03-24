const countEl = document.getElementById("count-el")
const btns = document.querySelectorAll(".btn")
let count = 0

btns.forEach(function(btn) {
    btn.addEventListener("click", function() {

        if (btn.id == "decrease") {
            count -= 1
            countEl.textContent = count
        } else if (btn.id == "reset") {
            count = 0
            countEl.textContent = count
        } else {
            count += 1
            countEl.textContent = count
        }

        if (count < 0) {
            countEl.classList.add("negative")
        } else if (count == 0) {
            countEl.classList.remove("negative")
            countEl.classList.remove("positive")
        } else {
            countEl.classList.add("positive")
        }
    })
})