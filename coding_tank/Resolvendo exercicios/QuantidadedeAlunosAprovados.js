// Enunciado
// Quantidade de Alunos Aprovados
// Ao final do curso de javascript os alunos devem receber suas notas e saberem se foram aprovados ou não.
// Antes de publicar as notas o professor desse curso gostaria de saber quantos alunos passaram.
// Sabendo que para ser aprovado o aluno deva ter uma nota maior do que 70, analise a lista abaixo:
// const alunos = [
//   { nome: "Filipe Diogo", nota: "80" },
//   { nome: "Enzo Miguel", nota: "77" },
//   { nome: "Mateus Danilo", nota: "88" },
//   { nome: "Olivia Stella", nota: "95" },
//   { nome: "César Paulo", nota: "68" },
// ];
// Para resolver esse problema, crie uma função chamada quantidadeAprovados que deve:
// Receber um array de objetos onde cada objeto seja composto pelos atributos nome e nota.
// Retornar a quantidade de alunos aprovados.

export function quantidadeAprovados(alunos) {
    let contadorAprovados = 0;
  for (const aluno of alunos) {
    const nota = Number(aluno.nota);
    if (nota >= 70) {
      contadorAprovados++;
    }
  }
  return contadorAprovados;
}