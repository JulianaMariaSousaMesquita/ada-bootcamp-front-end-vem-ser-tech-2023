// 25. Defina uma classe chamada "Cachorro" com os atributos nome, raça e idade. Implemente um construtor para esta classe. Crie um método para latir (exibir uma mensagem de latido) e outro método para calcular a idade humana do cachorro com base na idade real. Crie objetos de cachorros e teste os métodos.
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    latir() {
        console.log(`${this.nome} está latindo: Au Au!`)
    }

    calcularIdadeHumana() {
        const idadeHumana = this.idade <= 2 ? this.idade * 10.5 : 2 * 10.5 + (this.idade - 2) * 4
        console.log(`${this.nome} tem aproximadamente ${idadeHumana} anos humanos.`)
        return idadeHumana
    }
}

const cachorro1 = new Cachorro("Buddy", "Labrador", 3)
const cachorro2 = new Cachorro("Luna", "Husky", 1)

cachorro1.latir()
const idadeHumana1 = cachorro1.calcularIdadeHumana()
console.log(`${cachorro1.nome} tem ${cachorro1.idade} anos de idade real.`)

cachorro2.latir()
const idadeHumana2 = cachorro2.calcularIdadeHumana()
console.log(`${cachorro2.nome} tem ${cachorro2.idade} ano de idade real.`)