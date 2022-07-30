// Desafio 1 - Criar uma função usando o operador &&
function compareTrue(valor1, valor2) {
  return ((valor1 === true) && (valor2 === true));
}
// Desafio 2 (base * altura) / 2. --> Criar uma função que calcule a área de um triângulo
function calcArea(heigth, base) {
  return ((base * heigth) / 2);
}
// Desafio 3 - Criar  uma função que divida uma frase
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4 - Criar uma função que use concatenação de strings
function concatName(string) {
  let ultimoItem = string[string.length - 1];
  let primeiroItem = [string[0]];
  return (`${ultimoItem}, ${primeiroItem}`);
}

// Desafio 5 - Criar uma função que calcule a quantidade de pontos no futebol
function footballPoints(wins, ties) {
  let quantidadePontos = ((wins * 3) + (ties));
  return quantidadePontos;
}

// Desafio 6 - Criar uma função que calcule a repetição do maior número de um array
function highestCount(numeros) {
  let quantidade = 0;
  let comparate = numeros[0];
  for (let index = 0; index < numeros.length; index += 1) {
    if (comparate < numeros[index]) {
      comparate = numeros[index];
    }
  }
  for (let index2 of numeros) {
    if (comparate === index2) {
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7 - Criar uma função de Caça ao Rato
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1); // função Math.abs converte resultado do nº negativo em positivo.
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Criar uma função de FizzBuzz
function fizzBuzz(arrayNumeros) {
  let result = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arrayNumeros[index] % 3 === 0) {
      result.push('fizz');
    } else if (arrayNumeros[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9 -Criar uma função que Codifique e Decodifique
function encode(frase1) {
  let novaFrase1 = '';
  for (let index = 0; index < frase1.length; index += 1) {
    if (frase1[index] === 'a') {
      novaFrase1 += '1';
    } else if (frase1[index] === 'e') {
      novaFrase1 += '2';
    } else if (frase1[index] === 'i') {
      novaFrase1 += '3';
    } else if (frase1[index] === 'o') {
      novaFrase1 += '4';
    } else if (frase1[index] === 'u') {
      novaFrase1 += '5';
    } else {
      novaFrase1 += frase1[index];
    }
  }
  return novaFrase1;
}
function decode(frase2) {
  let novaFrase2 = '';
  for (let index = 0; index < frase2.length; index += 1) {
    if (frase2[index] === '1') {
      novaFrase2 += 'a';
    } else if (frase2[index] === '2') {
      novaFrase2 += 'e';
    } else if (frase2[index] === '3') {
      novaFrase2 += 'i';
    } else if (frase2[index] === '4') {
      novaFrase2 += 'o';
    } else if (frase2[index] === '5') {
      novaFrase2 += 'u';
    } else {
      novaFrase2 += frase2[index];
    }
  }
  return novaFrase2;
}
