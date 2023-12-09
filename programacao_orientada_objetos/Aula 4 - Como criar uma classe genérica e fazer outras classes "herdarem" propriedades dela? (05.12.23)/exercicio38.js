// 38. Crie uma classe chamada "Escola" com os atributos nome, endereço e lista de alunos matriculados. Implemente um construtor para esta classe. Crie métodos para matricular alunos na escola e exibir a lista de alunos matriculados. Crie objetos de escolas e teste os métodos.
class Escola {
    constructor(nome, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.alunosMatriculados = []
    }

    matricularAluno(nomeAluno) {
        this.alunosMatriculados.push(nomeAluno)
        console.log(`Aluno ${nomeAluno} matriculado na escola ${this.nome}.`)
    }

    exibirAlunosMatriculados() {
        console.log(`Alunos matriculados na escola ${this.nome}:`)
        this.alunosMatriculados.forEach((aluno, index) => {
            console.log(`${index + 1}. ${aluno}`)
        })
    }
}

const escola1 = new Escola("Escola Primária ABC", "Rua das Crianças, 123")
const escola2 = new Escola("Colégio Excelência", "Avenida do Saber, 456")

escola1.matricularAluno("João Silva")
escola1.matricularAluno("Maria Oliveira")

escola2.matricularAluno("Pedro Santos")
escola2.matricularAluno("Ana Souza")

escola1.exibirAlunosMatriculados()
escola2.exibirAlunosMatriculados()
