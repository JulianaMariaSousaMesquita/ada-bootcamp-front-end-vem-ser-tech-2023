function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error('Divisão por zero não permitida');
        }
        return a / b;
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

console.log(dividir(10, 2)); // Deve imprimir 5
console.log(dividir(8, 0));  // Deve capturar e imprimir o erro