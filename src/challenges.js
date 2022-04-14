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
function catAndMouse(mouse, cat1, cat2) {
let distanceCat1 = Math.abs(mouse-cat1);
let distanceCat2 = Math.abs(mouse-cat2);

if (distanceCat1 < distanceCat2){
return 'cat1'
}
if (distanceCat1 > distanceCat2){
  return 'cat2'
}
else {
  return "os gatos trombam e o rato foge"
}
// calcular a distância do cat1 para o mouse
// calcular a distância do cat2 para o mouse

// se o gato1 estiver mais perto - retorna cat1
// se o gato2 estiver mais perto - retorna cat2
// se a distância entre os gatos forem iguais - retorna "os gatos trombam e o rato foge"

}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  
return array}

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
