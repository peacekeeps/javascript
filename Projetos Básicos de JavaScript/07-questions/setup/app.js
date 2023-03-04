//using selectors inside the element
// traversing the dom
// const button = document.querySelectorAll(".btn")
const question = document.querySelectorAll(".question")

question.forEach(function (quest) {
    const btn = quest.querySelector(".btn")
    console.log(btn)
    btn.addEventListener("click", function () {
        question.forEach(function (item) {
            if (item !== quest) {
                item.classList.remove("show")
            }
        })
        quest.classList.toggle("show")
    })
})