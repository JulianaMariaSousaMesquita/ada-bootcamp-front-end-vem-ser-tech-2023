// Exercício 6: Encontrar o menor valor de uma matriz
// Dada uma matriz valores com 2 linhas e 4 colunas, encontre o menor valor presente na matriz e armazene-o na variável menorValor. Utilize o índice para acessar os valores da matriz e realizar as comparações com Math.min.
// const valores = [
//   [15, 12, 18, 10],
//   [14, 9, 16, 11]
// ];

function menorValor(matriz) {
  let menor = matriz[0][0];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        menor = Math.min(menor, matriz[i][j]);
    }
  }
  return menor;
}

const valores = [
    [15, 12, 18, 10],
    [14, 9, 16, 11]
  ];

console.log(menorValor(valores));