let count = 0
let counter = document.getElementById("count-el")

counter.innerHTML = count

function addPerson() {
    count++
    counter.innerHTML = count
    return count
}