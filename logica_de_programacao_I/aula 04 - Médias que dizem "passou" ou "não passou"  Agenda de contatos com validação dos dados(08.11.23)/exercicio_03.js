// 3 - Exercício Intermediário: Escreva um programa em JavaScript que verifica se um número é divisível por 3 e por 5 ao mesmo tempo. Use a estrutura if-else para realizar essa verificação.
function numeroDiv3Div5(numero) {
  return numero % 3 === 0 && numero % 5 === 0 ? "Número é divisível por 3 e 5" : "Número Não é divisível por 3"
}

console.log(numeroDiv3Div5(1));
console.log(numeroDiv3Div5(0));
console.log(numeroDiv3Div5(-20));
console.log(numeroDiv3Div5(6));
console.log(numeroDiv3Div5(2));
