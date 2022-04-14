// Desafio 1
function compareTrue(valor1, valor2) {
  return ((valor1 === true) && (valor2 === true));
}
// Desafio 2 (base * altura) / 2.
function calcArea(heigth, base) {
return ((base * heigth) / 2);
}
// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ")
  return resultado;
}

// Desafio 4
function concatName(string) {
  let ultimoItem = string[string.length-1];
  let primeiroItem = [string[0]];
  return (ultimoItem + ", " + primeiroItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadePontos = ((wins*3) + (ties));
  return quantidadePontos;
}

// Desafio 6
function highestCount(numeros) {
let quantidade = 0;
let comparate = numeros[0];
  for (let index = 0; index < numeros.length; index +=1){
    if (comparate < numeros[index]){
       comparate = numeros[index];
    }
  }
  for (let index2 of numeros){
    if (comparate === index2){
        quantidade +=1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
