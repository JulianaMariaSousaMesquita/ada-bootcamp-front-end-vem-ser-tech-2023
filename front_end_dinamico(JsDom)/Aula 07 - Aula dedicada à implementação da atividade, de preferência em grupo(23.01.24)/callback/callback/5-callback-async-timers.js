// Requisições HTTP
// Temporizadores
// Manipulação de arquivos (filesystem, databases, etc)

// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 4000);
// setTimeout(() => {
//   console.log("3");
// }, 2000);
// console.log("4");

// setInterval(() => {
//   console.log("Olá a cada 3 segundos", Date.now());
// }, 3000);

setTimeout(() => {
  console.log("1");
}, 1000);

console.log("inicia o for");
for (let i = 0; i < 200000000; i++) {
  let date = new Date();
}

console.log("acabou o for");

setTimeout(() => {
  console.log("2");
}, 1000);

// const dataAtual = () =>
//   console.log(new Date().toLocaleTimeString("pt-BR", { hour12: false }));

// setTimeout(() => {
//   console.log("inicial");
//   dataAtual();
// }, 0);

// setInterval(dataAtual, 1000);
