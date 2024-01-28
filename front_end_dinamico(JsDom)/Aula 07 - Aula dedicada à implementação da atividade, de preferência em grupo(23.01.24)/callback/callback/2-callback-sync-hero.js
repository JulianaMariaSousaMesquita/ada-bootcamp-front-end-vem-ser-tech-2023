const desafio = (heroi, callback) => {
  console.log(`Oh não! ${heroi} está enfrentando um desafio:`);
  return callback(heroi);
};

const thanosCallback = (heroi) => {
  console.log(`Thanos: Escute bem ${heroi}... Eu sou inevitável!`);
  if (heroi === "Spider-Man") {
    return `${heroi} deixa Thanos todo enrolado`;
  }
  return `${heroi} desintegra Thanos!`;
};

const lokiCallback = (heroi) => {
  console.log(
    `Loki: Eu sou Loki de Asgard... Portanto ${heroi}, você está em apuros!`
  );

  if (heroi === "Spider-Man") {
    return `${heroi} dá um chute no Loki e o manda de volta para Asgard`;
  }

  return `Loki derrota ${heroi}!`;
};

// const resultado = desafio("Spider-Man", thanosCallback);
const resultado = desafio("Rodrigao", thanosCallback);

console.log(resultado);
