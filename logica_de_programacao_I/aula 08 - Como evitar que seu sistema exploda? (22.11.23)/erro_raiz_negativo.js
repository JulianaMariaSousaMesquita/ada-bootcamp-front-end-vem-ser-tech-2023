class ValorNegativoError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = 'ValorNegativoError';
    }
}

function calcularRaizQuadrada(numero) {
    try {
        if (numero < 0) {
            throw new ValorNegativoError('Não é possível calcular a raiz quadrada de um número negativo');
        }
        return Math.sqrt(numero);
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

console.log(calcularRaizQuadrada(25));   // Deve imprimir 5
console.log(calcularRaizQuadrada(-1));   // Deve capturar e imprimir o erro
