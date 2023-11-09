// 2. Percorrendo a lista de contato
// Crie um laço de repetição que percorra toda a lista de contatos e mostre uma frase contento Nome, Telefone, Endereço e data de nascimento, exemplo:
// Bruno Cabral, telefone (11) 99999-9999, mora na Rua Major Prado, no número 200, no bairro Jardim Terezinha, nascido na data de 04/04/1988

const listaDeContatos = [];

function adicionarContato(nome, telefone, endereco, nascimento) {
    const novoContato = {
        nome: nome,
        telefone: telefone,
        endereco: endereco,
        nascimento: new Date(nascimento)
    };
    listaDeContatos.push(novoContato);
}

adicionarContato('Juliana Mesquita', '(21) 97993-1748', { rua: 'Rua das Hortênsias', numero: 's/n', bairro: 'Jardim Arco-íris' }, '1995-11-05');
adicionarContato('Naruto Uzumaki', '(00) 12345-6789', { rua: 'Rua da Folha', numero: '7', bairro: 'Vila da Folha' }, '1985-10-10');
adicionarContato('Sasuke Uchiha', '(00) 98765-4321', { rua: 'Rua do Clã Uchiha', numero: '11', bairro: 'Konoha' }, '1987-07-23');
adicionarContato('Sakura Haruno', '(00) 55555-7777', { rua: 'Rua das Flores', numero: '25', bairro: 'Konoha' }, '1986-03-28');
adicionarContato('Kakashi Hatake', '(00) 33333-9999', { rua: 'Rua dos Livros', numero: '5', bairro: 'Konoha' }, '1979-09-15');
adicionarContato('Shikamaru Nara', '(00) 11111-2222', { rua: 'Rua Estratégica', numero: '40', bairro: 'Konoha' }, '1990-09-22');
adicionarContato('Hinata Hyuga', '(00) 77777-7777', { rua: 'Rua Tímida', numero: '15', bairro: 'Vila da Folha' }, '1990-12-27');
adicionarContato('Shino Aburame', '(00) 99999-1111', { rua: 'Rua dos Insetos', numero: '8', bairro: 'Konoha' }, '1988-01-23');
adicionarContato('Ino Yamanaka', '(00) 88888-2222', { rua: 'Rua das Flores Rosas', numero: '10', bairro: 'Konoha' }, '1990-09-23');
adicionarContato('Rock Lee', '(00) 66666-3333', { rua: 'Rua da Determinação', numero: '42', bairro: 'Konoha' }, '1988-11-27');
adicionarContato('Neji Hyuga', '(00) 55555-4444', { rua: 'Rua do Clã Hyuga', numero: '5', bairro: 'Konoha' }, '1987-07-03');
adicionarContato('Tenten', '(00) 33333-6666', { rua: 'Rua das Armas', numero: '18', bairro: 'Konoha' }, '1990-03-09');
adicionarContato('Kiba Inuzuka', '(00) 22222-5555', { rua: 'Rua dos Cães', numero: '20', bairro: 'Konoha' }, '1989-07-07');
adicionarContato('Choji Akimichi', '(00) 44444-9999', { rua: 'Rua das Comidas', numero: '35', bairro: 'Konoha' }, '1987-05-01');
adicionarContato('Temari', '(00) 11111-8888', { rua: 'Rua Ventosa', numero: '30', bairro: 'Vila da Areia' }, '1986-08-23');
adicionarContato('Gaara', '(00) 12345-6789', { rua: 'Rua do Kazekage', numero: '1', bairro: 'Vila da Areia' }, '1985-01-19');
adicionarContato('Boruto Uzumaki', '(00) 99999-9999', { rua: 'Rua do Hokage', numero: '1', bairro: 'Vila da Folha' }, '2005-03-27');
adicionarContato('Himawari Uzumaki', '(00) 88888-8888', { rua: 'Rua do Hokage', numero: '1', bairro: 'Vila da Folha' }, '2008-06-20');
console.log(listaDeContatos);