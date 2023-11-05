// Exercício 4: Produto dos elementos de uma matriz
// Dada uma matriz matriz com 3 linhas e 3 colunas, calcule o produto de todos os valores e armazene o resultado na variável produto. Utilize o índice para acessar os valores da matriz e realizar os cálculos.
// const matriz = [
//   [2, 4, 6],
//   [3, 7, 9],
//   [5, 8, 10]
// ];

function produtoMatriz(matriz) {
    let produto = 1;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        produto *= matriz[i][j];
      }
    }
  
    return produto;
  }

const matriz = [
    [2, 4, 6],
    [3, 7, 9],
    [5, 8, 10]
  ];

const resultado = produtoMatriz(matriz);
console.log(resultado);