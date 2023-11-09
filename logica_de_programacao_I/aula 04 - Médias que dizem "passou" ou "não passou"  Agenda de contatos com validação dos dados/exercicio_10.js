// 10 - Exercício Desafiado: Escreva um programa em JavaScript que recebe um número de 1 a 7 e retorna o dia da semana correspondente. Utilize a estrutura `switch/case` para realizar essa verificação.
// Além disso, implemente uma verificação adicional utilizando `if-else` para retornar "Fim de semana" caso o número seja 1 ou 7 (domingo ou sábado), e "Dia útil" caso contrário.
// Exemplo de uso: `verificarDiaSemana(3)` deve retornar "Quarta-feira, Dia útil".
// Dica: Utilize os valores de 1 a 7 para representar os dias da semana, sendo 1 para domingo, 2 para segunda-feira e assim por diante.

function verificarDiaSemana(semana) {
  switch (semana) {
    case 1:
      return "Domingo " + "- Fim de semana";
      break;
    case 2:
      return "Segunda-feira " + "- Dia útil";
      break;
    case 3:
      return "Terça-feira " + "- Dia útil";
      break;
    case 4:
      return "Quarta-feira " + "- Dia útil";
      break;
    case 5:
      return "Quinta-feira " + "- Dia útil";
      break;
    case 6:
      return "Sexta-feira " + "- Dia útil";
      break;
    case 7:
      return "Sábado " + "- Fim de semana";
      break;
  }
}

console.log(verificarDiaSemana(5));
console.log(verificarDiaSemana(1));
console.log(verificarDiaSemana(5));
console.log(verificarDiaSemana(2));
console.log(verificarDiaSemana(3));
console.log(verificarDiaSemana(1));