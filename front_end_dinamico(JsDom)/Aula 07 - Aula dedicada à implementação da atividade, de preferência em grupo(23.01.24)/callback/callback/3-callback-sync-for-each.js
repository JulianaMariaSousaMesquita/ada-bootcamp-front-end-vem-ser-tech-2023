const animais = ["cachorro", "gato", "cavalo", "papagaio", "peixe"];
const amigos = ["Luara", "Piter", "Carlos"];
const gastos = [359, 245, 10];

// for (let i = 0; i < animais.length; i++) {
//   console.log(animais[i]);
// }

// for (let i = 0; i < amigos.length; i++) {
//   console.log(amigos[i]);
// }

// for (let i = 0; i < gastos.length; i++) {
//   console.log(gastos[i]);
// }

const meuForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

gastos.forEach((a) => {
  console.log(a);
});

// meuForEach(gastos, (animal) => {
//   console.log(animal);
// });
