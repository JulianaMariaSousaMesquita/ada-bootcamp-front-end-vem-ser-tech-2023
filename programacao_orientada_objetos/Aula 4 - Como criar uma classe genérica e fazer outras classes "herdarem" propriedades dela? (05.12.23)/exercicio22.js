// 22. Crie uma classe chamada "Hotel" com os atributos nome, localização e lista de quartos. Implemente um construtor para inicializar esses atributos e métodos para reservar quartos e verificar a disponibilidade. Crie objetos de hotéis e teste os métodos.
class Hotel {
    constructor(nome, localizacao, totalQuartos) {
        this.nome = nome
        this.localizacao = localizacao
        this.quartosDisponiveis = Array.from({ length: totalQuartos }, (_, index) => index + 1)
        this.quartosReservados = []
    }

    reservarQuarto() {
        if (this.quartosDisponiveis.length > 0) {
            const quartoReservado = this.quartosDisponiveis.pop()
            this.quartosReservados.push(quartoReservado)
            console.log(`Quarto ${quartoReservado} reservado com sucesso.`)
        } else {
            console.log("Todos os quartos estão ocupados. Não é possível fazer a reserva.")
        }
    }

    verificarDisponibilidade() {
        console.log(`Quartos disponíveis: ${this.quartosDisponiveis.join(', ')}`)
    }
}

const hotel1 = new Hotel("Hotel Estrela", "Centro", 10)
const hotel2 = new Hotel("Hotel Luxo", "Praia", 20)

hotel1.reservarQuarto()
hotel1.verificarDisponibilidade()

hotel2.reservarQuarto()
hotel2.reservarQuarto()
hotel2.verificarDisponibilidade()
