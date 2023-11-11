// 5 - Exercício Desafiador: Escreva um programa em JavaScript que verifica se um número é um palíndromo. Use a estrutura if-else para realizar essa verificação. Um palíndromo é um número que permanece o mesmo quando seus dígitos são invertidos.
// Dica: para inverter um numero utilize: parseInt(numero.toString().split('').reverse().join(''))

function ehPalíndromo (numero){
    return parseInt(numero.toString().split('').reverse().join('')) === numero.toString() ? 'É palíndrome' : 'NÃO é palíndrome'
}

console.log(ehPalíndromo(11))
console.log(ehPalíndromo(15))
console.log(ehPalíndromo(11211))