let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//Estrutura de repetição foreach MATRIZ
matriz.forEach((item1, index1) => {
    console.log(matriz[index1]);
    console.log(item1);
    item1.forEach((item2, index2) => {
      console.log({
        item2,
        index2,
      });
    });
  });