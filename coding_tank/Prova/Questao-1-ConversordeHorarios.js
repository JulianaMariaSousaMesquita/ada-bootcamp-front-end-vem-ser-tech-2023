// Desafio: Conversor de Horários
// 1 - Ao efetuar a compra de sua refeição no Ifood o sistema, após confirmação do pagamento, envia
// seu pedido ao restaurante, que ao aceitá-lo registra esse momento e lhe retorna o horário de previsão
// da sua entrega. Esse recurso, apesar de interessante começou a gerar uma quantidade significativa de
// reclamações na Central de Atendimento, pois os clientes ficaram um pouco confusos com os horários
// indicados para a entrega. Ao investigar o problema, o time de desenvolvimento entendeu que os
// horários apresentados estavam no formato de 12hs (AM/PM), sendo que o correto seria utilizar o
// formato de 24hs. Sua missão: criar um algoritmo capaz de fazer essa conversão! Para isso, crie
// uma função que receba um horário qualquer, respeitando o formato 12hs (06:15:25PM) e retorne o
// equivalente (18:15:25).

function conversorHorario(horario) {
  let novaHora = "";
  let horaSeparada = horario.split(":");
  let separarFormato = horaSeparada[2].split("");
  let formato = separarFormato[2] + separarFormato[3];
  
  if (formato == "PM") { //Caso horario passado seja PM
    switch (horaSeparada[0]) {
      case "01":
        novaHora += "13:";
        break;
      case "02":
        novaHora += "14:";
        break;
      case "03":
        novaHora += "15:";
        break;
      case "04":
        novaHora += "16:";
        break;
      case "05":
        novaHora += "17:";
        break;
      case "06":
        novaHora += "18:";
        break;
      case "07":
        novaHora += "19:";
        break;
      case "08":
        novaHora += "20:";
        break;
      case "09":
        novaHora += "21:";
        break;
      case "10":
        novaHora += "22:";
        break;
      case "11":
        novaHora += "23:";
        break;
      case "12":
        novaHora += "00:";
        break;
    }
    novaHora += `${horaSeparada[1]}:` + `${separarFormato[0]}` + `${separarFormato[1]}`;
  }else if(formato == "AM"){ //Caso horario passado seja AM
    novaHora += `${horaSeparada[0]}:` +  `${horaSeparada[1]}:` + `${separarFormato[0]}` + `${separarFormato[1]}`;
  }else{ //Caso horario esteja com estrutura incorreta
    novaHora = "Formato de horario passado indevido, tente novamente!";
  }
  return novaHora;
}

console.log(conversorHorario("06:15:25PM"));
console.log(conversorHorario("06:15:25AM"));
console.log(conversorHorario("06:15:25"));