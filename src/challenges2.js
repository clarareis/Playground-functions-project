// Desafio 11 - Criar uma função de Número de Telefone
function generatePhoneNumber(array) {
  let diferente = 0;
  let menor = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (menor < array[index]) {
      menor = array[index];
    }
  }
  for (let index2 of array) {
    if (menor === index2) {
      diferente += 1;
    }
  }
  return diferente;
}
