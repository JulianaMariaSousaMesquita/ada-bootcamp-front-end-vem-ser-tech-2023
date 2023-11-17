// Exercício 2 - Temos a lista de empregados com seus respectivos nomes e salários:
// ```jsx
// const empregados = [
//   { nome: 'João', salario: 1200 },
//   { nome: 'Maria', salario: 1500 },
//   { nome: 'Pedro', salario: 1800 },
//   { nome: 'Ana', salario: 1400 },
//   { nome: 'Carlos', salario: 2000 }
// ]
// ```
// Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.
// Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.
// Obs: Pode utilizar o `for` .

const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
]

const maior = (element) => element.salario >= 1500
const menor = (element) => element.salario <= 1000

console.log("Verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00: ",empregados.some(maior))

console.log("verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00: ",empregados.some(menor))