// 1 - Exercício Fácil: Escreva um programa em JavaScript que verifica se um número é positivo, negativo ou igual a zero. Use a estrutura if-else para realizar essa verificação.

function sinalNumero(numero) {
  if (numero > 0) {
    return "Número é positivo";
  } else if (numero < 0) {
    return "Número é negativo";
  } else {
    return "Número é igual a zero";
  }
}

console.log(sinalNumero(1));
console.log(sinalNumero(0));
console.log(sinalNumero(-20));
