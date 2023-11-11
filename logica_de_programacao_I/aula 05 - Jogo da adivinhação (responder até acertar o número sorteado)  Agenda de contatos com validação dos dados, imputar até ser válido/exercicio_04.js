// 4 - Exercício Avançado: Escreva um programa em JavaScript que calcule e imprima os primeiros N termos da sequência de Fibonacci, onde N é um número fornecido pelo usuário, utilizando um loop while.
function fibonacci(quantidade) {
    let fibVetor = [];
    let i = 0;

    while (i < quantidade) {
        if (i <= 1) {
            fibVetor.push(i);
        } else {
            fibVetor.push(fibVetor[i - 1] + fibVetor[i - 2]);
        }
        i++;
    }

    return fibVetor;
}

console.log(fibonacci(5))
console.log(fibonacci(10))
console.log(fibonacci(2))
console.log(fibonacci(15))