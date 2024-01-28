const superHeros = [
  {
    id: 1,
    name: "Batman",
    power: "Money",
  },
  {
    id: 2,
    name: "Superman",
    power: "Strength",
  },
  {
    id: 3,
    name: "Flash",
    power: "Speed",
  },
];

const getUser = (id, callback) => {
  const user = superHeros.find((hero) => hero.id === id);
  const latencia = Math.random() * (18000 - 8000) + 8000;

  let i = 0;
  const searching = setInterval(() => {
    console.log("Searching...", i++);
  }, 1000);

  setTimeout(() => {
    callback(user ? null : "Usuário não encontrado", user);
    clearInterval(searching);
  }, latencia);
};

getUser(1, (erro, usuario) => {
  if (erro) {
    console.error(erro);
    return;
  }

  console.log(usuario);

  getUser(2, (erro, usuario) => {
    if (erro) {
      console.error(erro);
      return;
    }

    console.log(usuario);

    getUser(3, (erro, usuario) => {
      if (erro) {
        console.error(erro);
        return;
      }

      console.log(usuario);
    });
  });
});
