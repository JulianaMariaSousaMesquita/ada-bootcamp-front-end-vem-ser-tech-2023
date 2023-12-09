// 35. Defina uma classe chamada "Viagem" com os atributos destino, data de partida e data de retorno. Implemente um construtor para esta classe. Crie um método para calcular a duração da viagem em dias. Crie objetos de viagens e teste o método de cálculo de duração.
class Viagem {
    constructor(destino, dataPartida, dataRetorno) {
        this.destino = destino
        this.dataPartida = new Date(dataPartida)
        this.dataRetorno = new Date(dataRetorno)
    }

    calcularDuracao() {
        const umDiaEmMilissegundos = 24 * 60 * 60 * 1000
        const diferencaEmMilissegundos = this.dataRetorno - this.dataPartida
        const duracaoEmDias = Math.round(diferencaEmMilissegundos / umDiaEmMilissegundos)
        return duracaoEmDias
    }
}

const viagem1 = new Viagem("Paris", "2023-06-15", "2023-06-30")
const viagem2 = new Viagem("Nova York", "2023-08-10", "2023-08-20")

const duracaoViagem1 = viagem1.calcularDuracao()
const duracaoViagem2 = viagem2.calcularDuracao()

console.log(`A viagem para ${viagem1.destino} durará ${duracaoViagem1} dias.`)
console.log(`A viagem para ${viagem2.destino} durará ${duracaoViagem2} dias.`)
