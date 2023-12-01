try {
    // Código propenso a erros
    // ...
    throw new Error('Um erro ocorreu'); // Simulando um erro
    // ...
} catch (error) {
    // Captura e trata o erro
    console.error('Erro capturado:', error.message);

    // Decida se o sistema deve continuar ou parar
    // Se desejar parar, você pode relançar o erro ou encerrar o programa
} finally {
    // Código que será executado independentemente de ocorrer um erro ou não
    // Pode ser usado para limpeza de recursos, por exemplo
}