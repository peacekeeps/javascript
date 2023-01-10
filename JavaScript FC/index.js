let counter = document.getElementById("count-el")
let count = 0
let entriesEl = document.getElementById("entries-el")
let total = 0
counter.innerHTML = count
console.log(counter)

function addPeople() {
    count ++
    counter.innerHTML = count
}

function save() {
    entriesEl.style.display = "block"
    let entries = " " + count + " -"
    entriesEl.textContent += entries

    count = 0
    counter.textContent = count
}