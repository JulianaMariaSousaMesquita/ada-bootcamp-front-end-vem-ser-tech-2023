// 2 - Exercício Moderado: Escreva um programa em JavaScript que verifica se um número é par ou ímpar. Use a estrutura if-else para realizar essa verificação.
function numeroParOuImpar(numero) {
  return numero % 2 === 0 ? "número é par" :   "número é ímpar";
}

console.log(numeroParOuImpar(1));
console.log(numeroParOuImpar(0));
console.log(numeroParOuImpar(-20));
console.log(numeroParOuImpar(6));
console.log(numeroParOuImpar(2));
