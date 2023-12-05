// Crie um objeto chamado "aluno" com os atributos nome, idade e um método chamado "mostrarInformacoes" que imprime os dados do aluno.
class Aluno {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    mostrarInformacoes(){
        console.log(`Nome aluno: ${this.nome}, Idade: ${this.idade}`)
    }
}

const aluno01 = new Aluno("Juliana", 28)
const aluno02 = new Aluno("Pollyana", 35)

aluno01.mostrarInformacoes()
aluno02.mostrarInformacoes()
