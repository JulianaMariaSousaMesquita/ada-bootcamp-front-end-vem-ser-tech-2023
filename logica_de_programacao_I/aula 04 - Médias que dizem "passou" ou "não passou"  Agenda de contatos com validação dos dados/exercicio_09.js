// 9 - Exercício Avançado: Crie um programa em JavaScript que implemente uma calculadora básica. A função calculadora receberá dois números como parâmetro e um terceiro parâmetro indicando a ação a ser executada. Utilize a estrutura switch/case para realizar a operação correta com base na ação fornecida. As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar". O resultado da operação deve ser retornado pela função.
// Exemplo de uso: calculadora(5, 3, "somar") deve retornar 8.

function calculadora(numero1, numero2, operacao) {
  switch (operacao) {
    case "somar":
      return numero1 + numero2;
      break;
    case "subtrair":
      return Math.max(numero1,numero2) - Math.min(numero2,numero1);
      break;
    case "dividir":
      return Math.max(numero1,numero2) / Math.min(numero2,numero1);
      break;
    case "multiplicar":
      return numero1 * numero2;
      break;
  }
}

console.log(calculadora(5, 3, "somar"))
console.log(calculadora(1, 3, "subtrair"))
console.log(calculadora(5, 20, "dividir"))
console.log(calculadora(2, 3, "multiplicar"))