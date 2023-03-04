let count = 0

let countEl = document.getElementById("count-el")
let btns = document.querySelectorAll(".btn")

console.log(btns)

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
       const styles = e.currentTarget.classList
       if(styles.contains("remove")) {
        count--
       } else if (styles.contains("add")) {
        count ++
       } else if (styles.contains("reset")) {
        count = 0
       }
       if (count > 0) {
        countEl.style.color = "green"
       } else if (count == 0) {
        countEl.style.color = "black"
       } else {
        countEl.style.color = "red"
       }
       countEl.textContent = count
    })
})

// Esse foi o outro jeito que eu fiz

// let addBtn = document.getElementById("add-btn")
// let removeBtn = document.getElementById("remove-btn")
// let resetBtn = document.getElementById("reset-btn")

// addBtn.addEventListener("click", function() {
//     count += 1
//     if (count > 0) {
//         countEl.style.color = "green"
//     } else if (count == 0) {
//         countEl.style.color = "black"
//     } else {
//         countEl.style.color = "red"
//     }
//     countEl.textContent = count
// })

// removeBtn.addEventListener("click", function() {
//     count -= 1
//     if (count > 0) {
//         countEl.style.color = "green"
//     } else if (count == 0) {
//         countEl.style.color = "black"
//     } else {
//         countEl.style.color = "red"
//     }
//     countEl.textContent = count
// })

// resetBtn.addEventListener("click", function() {
//     count = 0
//     if (count > 0) {
//         countEl.style.color = "green"
//     } else if (count == 0) {
//         countEl.style.color = "black"
//     } else {
//         countEl.style.color = "red"
//     }
    
// })