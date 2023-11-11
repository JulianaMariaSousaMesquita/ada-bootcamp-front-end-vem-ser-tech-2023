// 5. **Exercicios Desafiador:**    
//     Escreva um programa em JavaScript cria uma lista de contatos, com dados inputados pelo usuário, dados para salvar:
//     - Nome
//     - Telefone
//     - Idade
//     - Profissão    
//     O usuário deve inputar dados de 5 contatos.    
//     Ao final o programa deve mostrar uma lista com os contatos.

var listaContatos = [];

var contato1 = {
  nome: "Naruto Uzumaki",
  profissao: "Ninja Genin",
  telefone: "(21) 97993-1744",
  idade: 16
};

var contato2 = {
  nome: "Sasuke Uchiha",
  profissao: "Ninja Genin",
  telefone: "(25) 97993-9999",
  idade: 16
};

var contato3 = {
  nome: "Sakura Haruno",
  profissao: "Ninja Genin",
  telefone: "(35) 97777-1744",
  idade: 16
};

var contato4 = {
  nome: "Kakashi Hatake",
  profissao: "Ninja Jounin",
  telefone: "(24) 97000-1744",
  idade: 30
};

var contato5 = {
  nome: "Hinata Hyuga",
  profissao: "Ninja Chuunin",
  telefone: "(22) 99999-1744",
  idade: 17
};

listaContatos.push(contato1, contato2, contato3, contato4, contato5);

console.log(listaContatos);