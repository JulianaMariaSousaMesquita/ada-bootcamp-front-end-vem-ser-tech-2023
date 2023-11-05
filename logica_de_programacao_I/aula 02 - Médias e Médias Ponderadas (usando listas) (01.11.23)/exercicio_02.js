// Exercício 2: Média dos elementos de um vetor
// Dado um vetor notas com 4 elementos, calcule a média aritmética de todos os valores e armazene o resultado na variável media. Utilize o índice para acessar os valores do vetor e realizar os cálculos.
// const notas = [17, 28, 39, 96, 55];

function soma (numeros, indice=0) {
    if (indice === numeros.length) {
        return 0;
    }
    return numeros[indice] + soma(numeros, indice + 1);
}

function media(total,quantidade){
    return total/quantidade;
}

const total1 = soma([17, 28, 39, 96, 55]);
const quantidade1 = [17, 28, 39, 96, 55].length;
const media1 = media(total1,quantidade1);

console.log(media1);

