try {
    // Código propenso a erros
} catch (error) {
    if (error instanceof TypeError) {
        console.error('Erro do tipo TypeError:', error.message);
    } else if (error instanceof ReferenceError) {
        console.error('Erro do tipo ReferenceError:', error.message);
    } else {
        console.error('Outro tipo de erro:', error.message);
    }
} finally {
    // Código que será executado independentemente de ocorrer um erro ou não
}