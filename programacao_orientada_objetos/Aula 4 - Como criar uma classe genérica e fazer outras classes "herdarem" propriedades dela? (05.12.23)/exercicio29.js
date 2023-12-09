// 29. Crie uma classe chamada "Pessoa" com os atributos nome, idade e profissão. Implemente um construtor para esta classe. Crie um método para saudar outras pessoas com base na profissão da pessoa (por exemplo, "Olá, sou um médico."). Crie objetos de pessoas e teste o método de saudação.
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

    saudar() {
        console.log(`Olá, sou um(a) ${this.profissao}.`)
    }
}

const pessoa1 = new Pessoa("Juliana Mesquita", 30, "Engenheira")
const pessoa2 = new Pessoa("Amanda", 25, "Médica")

pessoa1.saudar()
pessoa2.saudar()