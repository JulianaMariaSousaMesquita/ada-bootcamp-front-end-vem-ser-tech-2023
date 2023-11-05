// Exercício 1: Soma dos elementos de um vetor
// Dado um vetor numeros com 5 elementos, calcule a soma de todos os valores e armazene o resultado na variável soma. Utilize o índice para acessar os valores do vetor e realizar os cálculos.
// const numeros = [10, 5, 8, 12, 3, 19];

function soma (numeros, indice=0) {
    if (indice === numeros.length) {
        return 0;
    }
    return numeros[indice] + soma(numeros, indice + 1);
}
const total = soma([10, 5, 8, 12, 3, 19]);
console.log(total);

console.log(soma([5, 5, 20]));
console.log(soma([10, 5]));
console.log(soma([5]));
console.log(soma([1]));
console.log(soma([0]));