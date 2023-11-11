// 4 - Exercício Avançado: Escreva um programa em JavaScript que verifica se um ano é bissexto. Use a estrutura if-else para realizar essa verificação.
// Dica: um ano bissexto é divisível por 4, mas não por 100, a menos que também seja divisível por 400.

function anoBissexto(ano) {
  if (ano % 4 === 0) {
    if (ano % 100 !== 0) {
      return "ano é bissexto";
    } else {
      if (ano % 400 === 0) {
        return "ano é bissexto";
      }else{
        return "ano NÃO é bissexto";
      }
    }
  } else {
    return "ano NÃO é bissexto";
  }
}

console.log(anoBissexto(400)); // bissexto
console.log(anoBissexto(600)); // não bissexto
console.log(anoBissexto(2400)); // bissexto
console.log(anoBissexto(1800)); // não bissexto
console.log(anoBissexto(2000)); // bissexto
