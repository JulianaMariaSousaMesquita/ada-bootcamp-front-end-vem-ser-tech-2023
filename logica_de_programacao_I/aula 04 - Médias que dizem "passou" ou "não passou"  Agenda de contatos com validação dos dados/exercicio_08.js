// 8 - Exercício Intermediário: Escreva um programa em JavaScript que recebe uma letra do alfabeto e retorna se é uma vogal ou uma consoante.  Utilize a estrutura switch/case para realizar essa verificação.

function alfabeto(letra) {
  switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "é uma vogal";
      break;
    default:
      return "é uma consoante";
  }
}

console.log(alfabeto("a"));
console.log(alfabeto("t"));
console.log(alfabeto("e"));
console.log(alfabeto("i"));
