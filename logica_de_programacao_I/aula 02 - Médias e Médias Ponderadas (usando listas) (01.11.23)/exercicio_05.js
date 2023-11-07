// Exercício 5: Média dos elementos de uma matriz
// Dada uma matriz notas com 4 linhas e 2 colunas, calcule a média aritmética de todos os valores e armazene o resultado na variável media. Utilize o índice para acessar os valores da matriz e realizar os cálculos.
// const notas = [
//   [17, 28, 11],
//   [46, 39, 44],
//   [35, 57, 44],
//   [48, 39, 88]
// ];

function mediaMatriz(matriz) {
    let soma = 0;
    let totalElementos = 0;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
        totalElementos++;
      }
    }  
    return (soma/totalElementos);
  }
  

  const notas = [
    [17, 28, 11],
    [46, 39, 44],
    [35, 57, 44],
    [48, 39, 88]
  ];
  
  const mediaNotas = mediaMatriz(notas);
  console.log(mediaNotas);