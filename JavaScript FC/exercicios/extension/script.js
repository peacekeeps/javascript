const inputBtn = document.getElementById("input-btn")

const inputEl = document.getElementById("input-el")

const tabBtn = document.getElementById("tab-btn")

const deleteBtn = document.getElementById("delete-btn")

const ulEl = document.getElementById("ul-el")

// const tabs = [ //O formato desse array é igual ao formato das abas do chrome
//     {url: "https://www.linkeding.com/in/per-harald-borgen/"}
// ]

let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))

let myLeads = []

if (leadsFromStorage) {
    myLeads = leadsFromStorage
    renderLeads(myLeads)
}

tabBtn.addEventListener("click", function() {

    /* chrome é uma variável do API do google que pode ser acessada no chrome, tabs é um objeto dentro dessa variável e query especifica qual valor eu quero acessar, o caso a aba ativa (active) e que em primeiro plano (currentWindow).
    */

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})

/*
tabBtn.addEventListener("click", function() {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
})
*/

deleteBtn.addEventListener("dblclick" /* de double click */ , function() {
    localStorage.clear()
    myLeads = []
    leadsFromStorage = ""
    // ulEl.innerHTML = "" -- Usando renderLeads, ele já limpa
    renderLeads(myLeads)
})

inputBtn.addEventListener("click", function() {
    if (inputEl.value.length >= 1) {
        myLeads.push(inputEl.value) // Pega o valor do input e joga na array
        inputEl.value = "" // limpa o campo da input
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
        renderLeads(myLeads)
    } else {
        window.alert("The field shouldn't be blank")
    }
    
})
        
function renderLeads(array) {
    let listItems = "" // prepara a variável que vai receber os elementos, assim, não precisamos manipular o DOM em nas repetições abaixo, o que otimiza o código
    for (let i = 0; i < array.length; i ++) {
            listItems += `<li><a href="${array[i]}" target="_blank">${array[i]}</a></li>` // a variável recebe o código formatado em html, assim, com innerHTML, eles vão ficar formatadinhos da forma que eu quero

            // let newEntry = document.createElement("li")
            // newEntry.textContent = myLeads[i]
            // ulEl.append(newEntry)
        }
        ulEl.innerHTML = listItems
        // window.alert(localStorage.getItem("myLeads"))
}
