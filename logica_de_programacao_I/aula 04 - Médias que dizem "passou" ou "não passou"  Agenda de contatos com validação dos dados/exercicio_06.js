// 6 - Exercício Fácil: Escreva um programa em JavaScript que recebe uma cor em inglês e retorna o seu nome em português. Utilize a estrutura switch/case para realizar essa verificação. As cores podem ser: "red" (vermelho), "blue" (azul), "green" (verde), "yellow" (amarelo) e "black" (preto).

function tradutorCor(cor) {
  switch (cor) {
    case "red":
      return "vermelho";
      break;
    case "blue":
      return "azul";
      break;
    case "green":
      return "verde";
      break;
    case "yellow":
      return "amarelo";
      break;
    case "black":
      return "preto";
      break;
    default:
        return "Cor desconhecida"
  }
}

console.log(tradutorCor('yellow'))
console.log(tradutorCor('blue'))
console.log(tradutorCor('purple'))
console.log(tradutorCor('black'))
console.log(tradutorCor('red'))