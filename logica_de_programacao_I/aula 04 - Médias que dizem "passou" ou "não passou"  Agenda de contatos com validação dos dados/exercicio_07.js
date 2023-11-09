// 7 - Exercício Moderado: Escreva um programa em JavaScript que recebe um número de 1 a 12 e retorna o mês correspondente. Caso seja um número inválido retorna "Número inválido.” Utilize a estrutura switch/case para realizar essa verificação.

function mesCorrespondente(mes) {
  switch (mes) {
    case "01":
      return "Janeiro";
      break;
    case "02":
      return "Fevereiro";
      break;
    case "03":
      return "Março";
      break;
    case "04":
      return "Abril";
      break;
    case "05":
      return "Maio";
      break;
    case "06":
      return "Junho";
      break;
    case "07":
      return "Julho";
      break;
    case "08":
      return "Agosto";
      break;
    case "09":
      return "Setembro";
      break;
    case "10":
      return "Outubro";
      break;
    case "11":
      return "Novembro";
      break;
    case "12":
      return "Dezembro";
      break;
    default:
      return "Mês desconhecido";
  }
}

console.log(mesCorrespondente('01'))
console.log(mesCorrespondente('10'))
console.log(mesCorrespondente('23'))
console.log(mesCorrespondente('05'))
console.log(mesCorrespondente('12'))
console.log(mesCorrespondente('40'))

