// 1. Criando uma lista de contatos
// Crie uma lista de contatos, essa lista deve ter o seguintes dados:
// - Nome
// - Telefone
// - Endereço
//     - Nome da rua
//     - Número da residência
//     - Nome do bairro
// - Data de nascimento

const endereco = {
    rua: 'Rua das Hortênsias',
    numero: 's/n',
    bairro: 'Jardim Arco-íris'
};

const contato = {
    nome: 'Juliana Mesquita',
    telefone: '(21) 97993-1748',
    endereco: endereco,
    nascimento: new Date('1995-11-05')
};

console.log(contato);