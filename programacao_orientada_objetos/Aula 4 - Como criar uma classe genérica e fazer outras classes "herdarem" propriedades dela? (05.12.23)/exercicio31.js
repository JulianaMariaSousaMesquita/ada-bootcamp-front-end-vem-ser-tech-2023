// 31. Crie uma classe chamada "Estudante" com os atributos nome, matrícula e lista de disciplinas. Implemente um construtor para inicializar esses atributos e métodos para adicionar e remover disciplinas do estudante. Crie objetos de estudantes e teste os métodos.
class Estudante {
    constructor(nome, matricula) {
        this.nome = nome
        this.matricula = matricula
        this.disciplinas = []
    }

    adicionarDisciplina(disciplina) {
        if (!this.disciplinas.includes(disciplina)) {
            this.disciplinas.push(disciplina)
            console.log(`Disciplina "${disciplina}" adicionada para o estudante ${this.nome}.`)
        } else {
            console.log(`O estudante ${this.nome} já está matriculado na disciplina "${disciplina}".`)
        }
    }

    removerDisciplina(disciplina) {
        const index = this.disciplinas.indexOf(disciplina)
        if (index !== -1) {
            this.disciplinas.splice(index, 1)
            console.log(`Disciplina "${disciplina}" removida para o estudante ${this.nome}.`)
        } else {
            console.log(`O estudante ${this.nome} não está matriculado na disciplina "${disciplina}".`)
        }
    }
}

const estudante1 = new Estudante("João", "2021001")
const estudante2 = new Estudante("Maria", "2021002")

estudante1.adicionarDisciplina("Matemática")
estudante1.adicionarDisciplina("História")

estudante2.adicionarDisciplina("Português")
estudante2.adicionarDisciplina("Ciências")

estudante1.removerDisciplina("Geografia")
estudante1.removerDisciplina("História")

estudante2.removerDisciplina("Matemática")
estudante2.removerDisciplina("Ciências")