// Crie uma classe chamada "Cafeteira" com os atributos marca, capacidade e quantidade de café. Implemente um construtor para inicializar esses atributos. Crie métodos para encher a cafeteira de café e para fazer uma xícara de café. Teste esses métodos em objetos de cafeteira. 
class Cafeteira {
    constructor(marca, capacidade) {
        this.marca = marca
        this.capacidade = capacidade
        this.quantidadeDeCafe = 0
    }

    encherCafeteira(quantidade) {
        if (quantidade <= 0) {
            console.log("A quantidade de café deve ser maior que zero.")
        } else if (this.quantidadeDeCafe + quantidade > this.capacidade) {
            console.log("A cafeteira não pode armazenar essa quantidade de café.")
        } else {
            this.quantidadeDeCafe += quantidade
            console.log(`Cafeteira cheia. Quantidade atual de café: ${this.quantidadeDeCafe}`)
        }
    }

    fazerXicaraDeCafe() {
        if (this.quantidadeDeCafe === 0) {
            console.log("Não há café suficiente para fazer uma xícara.")
        } else {
            this.quantidadeDeCafe--
            console.log("Xícara de café feita. Aproveite!")
        }
    }
}

const minhaCafeteira = new Cafeteira("Cafezinho DevZando", 500)

minhaCafeteira.encherCafeteira(300)
minhaCafeteira.fazerXicaraDeCafe()
minhaCafeteira.fazerXicaraDeCafe()
