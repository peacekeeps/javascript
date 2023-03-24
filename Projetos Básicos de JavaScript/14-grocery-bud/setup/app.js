// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearItems)
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString() // pegando o tempo em milissegundos e convertendo para string, criando IDs únicas

  if (value && !editFlag) {
    const element = document.createElement("article")
    // adicionando uma classe
    element.classList.add('grocery-item')
    // adicionando uma id
    const attr = document.createAttribute('data-id')
    attr.value = id // adicionamos o ID único

    element.setAttributeNode(attr) // passamos o atributo para o elemento

    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    `

    // append child
    list.appendChild(element)

    // display alert
    displayAlert("item added to the list", "success")

    // displaying the container
    container.classList.add("show-container")

    // guardando no local storage
    addToLocalStorage(id, value)

    // set back to default
    setBackToDefault()

  } else if (value && editFlag) {
    console.log("editing")
  } else {
    displayAlert("please enter value", "danger")
  }
}

// display alert
function displayAlert(text, action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    setTimeout(function(){
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    }, 2000)
}

// set back to default
function setBackToDefault() {
    grocery.value = ""
    editFlag = false
    editID = ""
    submitBtn.textContent = 'submit';
}

function clearItems() {
    const items = document.querySelectorAll(".grocery-item")

    
    // // Com for()
    // if (items.length > 0) {
    //     for (i = 0; i < items.length; i++) {
    //         list.removeChild(items[i])
    //     }
    // }
    

    // com ForEach
    if (items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item)
        })
    }


    // // Limpando o elemento
    // list.innerHTML = ""


    container.classList.remove("show-container")
    setBackToDefault()
    // localStorage.removeItem('list')
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    console.log("added to local storage")
}
// ****** SETUP ITEMS **********
