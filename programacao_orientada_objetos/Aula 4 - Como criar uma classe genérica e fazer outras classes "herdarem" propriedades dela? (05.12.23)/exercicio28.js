// 28. Crie uma classe chamada "CarroEsportivo" com os atributos marca, modelo, ano e velocidade máxima. Implemente um construtor para esta classe. Crie métodos para acelerar e frear o carro, e para exibir a velocidade atual. Crie objetos de carros esportivos e teste os métodos.
class CarroEsportivo {
    constructor(marca, modelo, ano, velocidadeMaxima) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidadeMaxima = velocidadeMaxima
        this.velocidadeAtual = 0
    }

    acelerar(velocidade) {
        if (this.velocidadeAtual + velocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual += velocidade
            console.log(`Acelerando. Velocidade atual: ${this.velocidadeAtual} km/h`)
        } else {
            console.log(`Velocidade máxima atingida (${this.velocidadeMaxima} km/h). Não é possível acelerar mais.`)
        }
    }

    frear(velocidade) {
        if (this.velocidadeAtual - velocidade >= 0) {
            this.velocidadeAtual -= velocidade
            console.log(`Freando. Velocidade atual: ${this.velocidadeAtual} km/h`)
        } else {
            console.log("O carro já está parado. Não é possível frear mais.")
        }
    }

    exibirVelocidadeAtual() {
        console.log(`Velocidade Atual do ${this.marca} ${this.modelo}: ${this.velocidadeAtual} km/h`)
    }
}

const carro1 = new CarroEsportivo("Ferrari", "458 Italia", 2022, 300)
const carro2 = new CarroEsportivo("Porsche", "911 Turbo S", 2023, 320)

carro1.acelerar(50)
carro1.exibirVelocidadeAtual()
carro1.frear(20)
carro1.exibirVelocidadeAtual()

carro2.acelerar(100)
carro2.exibirVelocidadeAtual()
carro2.frear(50)
carro2.exibirVelocidadeAtual()
