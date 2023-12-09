// Crie uma classe chamada "Animal" com os atributos nome, espécie e idade. Implemente um construtor para esta classe. Crie objetos de animais e exiba suas informações.
class Animal {
    constructor(nome, especie, idade){
        this.nome = nome
        this.especie = especie
        this.idade - idade
    }    
}

const animal01 = {
    nome: "ossinho",
    especie: "gato",
    idade: 7
}

const meuAnimal01 = new Animal(animal01.nome, animal01.especie, animal01.idade)
console.log(meuAnimal01)

const animal02 = {
    nome: "Luna",
    especie: "gato",
    idade: 6
}

const meuAnimal02 = new Animal(animal02.nome, animal02.especie, animal02.idade)
console.log(meuAnimal02)

const animal03 = {
    nome: "Margareth",
    especie: "gato",
    idade: 4
}

const meuAnimal03 = new Animal(animal03.nome, animal03.especie, animal03.idade)
console.log(meuAnimal03)

const animal04 = {
    nome: "Bebe",
    especie: "gato",
    idade: 2
}

const meuAnimal04 = new Animal(animal04.nome, animal04.especie, animal04.idade)
console.log(meuAnimal04)