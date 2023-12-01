class MeuErroPersonalizado extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = 'MeuErroPersonalizado';
    }
}

try {
    throw new MeuErroPersonalizado('Mensagem de erro personalizado');
} catch (error) {
    console.error('Erro capturado:', error.message);
}