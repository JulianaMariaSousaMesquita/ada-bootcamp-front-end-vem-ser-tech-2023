// 19. Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de disciplinas. Implemente um construtor para inicializar esses atributos e métodos para adicionar disciplinas ao aluno e calcular a média geral. Crie objetos de alunos e teste os métodos.
class Aluno {
    constructor(nome, matricula) {
        this.nome = nome
        this.matricula = matricula
        this.disciplinas = {}
    }

    adicionarDisciplina(nomeDisciplina, nota) {
        if (nota < 0 || nota > 10) {
            console.log("A nota deve estar no intervalo de 0 a 10.")
            return
        }

        this.disciplinas[nomeDisciplina] = nota
        console.log(`Disciplina "${nomeDisciplina}" adicionada com nota ${nota}.`)
    }

    calcularMediaGeral() {
        const notas = Object.values(this.disciplinas)
        if (notas.length === 0) {
            console.log("Não há disciplinas para calcular a média.")
            return 0
        }

        const somaNotas = notas.reduce((total, nota) => total + nota, 0)
        const media = somaNotas / notas.length
        console.log(`Média geral: ${media.toFixed(2)}`)
        return media
    }
}

const aluno1 = new Aluno("Juliana", "2021001")
const aluno2 = new Aluno("Pollyana", "2021002")

aluno1.adicionarDisciplina("Matemática", 9.5)
aluno1.adicionarDisciplina("História", 8.0)

aluno2.adicionarDisciplina("Português", 7.5)
aluno2.adicionarDisciplina("Ciências", 6.0)

aluno1.calcularMediaGeral()
aluno2.calcularMediaGeral()
