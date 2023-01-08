let amigo = {nome:'Jose',
sexo:'M',
peso:95,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)

let amigo = hello

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}