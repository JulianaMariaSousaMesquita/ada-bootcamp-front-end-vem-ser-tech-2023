// Desafio: Número Solitário
// 3 - Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), a partir do array de números fornecido. Para resolver, crie uma função que recebe um array com os seguintes números:
// [12, 17, 15, 19, 22, 17, 19, 12]
// E retorne os que não estiverem repetidos.

function removerDuplicados (listaNumeros){
    return listaNumeros.filter((numero) => listaNumeros.indexOf(numero) === listaNumeros.lastIndexOf(numero));
}

console.log(removerDuplicados([12, 17, 15, 19, 22, 17, 19, 12]));
console.log(removerDuplicados([12, 12, 12, 12, 12, 12, 12, 12]));
console.log(removerDuplicados([12, 12, 12, 19, 12, 12, 12, 12]));
console.log(removerDuplicados([12, 2, 12, 19, 12, 12, 12, 12]));
console.log(removerDuplicados([12, 2,"B",12,1,0,"M","M"]));

