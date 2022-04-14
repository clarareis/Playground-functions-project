// Desafio 11
function generatePhoneNumber(array) {
let diferente = 0;
let menor = array[0];
  for (let index = 0; index < array.length; index +=1){
    if (menor < array [index]){
       menor = array [index];
    }
  }
  for (let index2 of array ){
    if (menor === index2){
        diferente +=1;
    }
  }
  return diferente;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
