// 3 - Exercício Intermediário: Escreva um programa em JavaScript que encontre e imprima todos os números primos de 1 a 100 utilizando um loop while.
function ehPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

var i = 2;
var primos = [];
while (i < 100) {
  if (ehPrimo(i)) {
    primos.push(i);    
  }
  i++
}

console.log(primos);
