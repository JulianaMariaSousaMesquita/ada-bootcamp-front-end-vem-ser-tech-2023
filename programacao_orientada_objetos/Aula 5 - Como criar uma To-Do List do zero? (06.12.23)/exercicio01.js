// 🚀 Exercício 1: Explorador Espacial - Crie uma classe `NaveEspacial` com atributos como nome, velocidade máxima e capacidade de tripulação. Implemente métodos como `acelerar()` e `adicionarTripulante()`.
class NaveEspacial {
    constructor(nome, velocidadeMaxima, capacidadeTripulacao) {
        this.nome = nome
        this.velocidadeMaxima = velocidadeMaxima
        this.capacidadeTripulacao = capacidadeTripulacao
        this.tripulacao = []
        this.velocidadeAtual = 0
    }

    acelerar() {
        if (this.velocidadeAtual < this.velocidadeMaxima) {
            this.velocidadeAtual += 10
            console.log(`Acelerando a nave ${this.nome} para ${this.velocidadeAtual} km/s.`)
        } else {
            console.log(`A nave ${this.nome} já atingiu a velocidade máxima de ${this.velocidadeMaxima} km/s.`)
        }
    }

    adicionarTripulante(nomeTripulante) {
        if (this.tripulacao.length < this.capacidadeTripulacao) {
            this.tripulacao.push(nomeTripulante)
            console.log(`${nomeTripulante} adicionado à tripulação da nave ${this.nome}.`)
        } else {
            console.log(`A tripulação da nave ${this.nome} está completa. Não é possível adicionar mais tripulantes.`)
        }
    }
}

const nave1 = new NaveEspacial("Estrela Voyager", 1500, 5)

nave1.acelerar()
nave1.adicionarTripulante("Comandante John")
nave1.adicionarTripulante("Tenente Jane")
nave1.acelerar()
nave1.adicionarTripulante("Cientista Smith")
nave1.adicionarTripulante("Engenheiro Brown")
nave1.adicionarTripulante("Piloto Davis")
nave1.acelerar()