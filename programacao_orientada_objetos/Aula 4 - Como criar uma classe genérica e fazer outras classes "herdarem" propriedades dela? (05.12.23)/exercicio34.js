// 34. Crie uma classe chamada "Restaurante" com os atributos nome, tipo de cozinha e lista de pratos do menu. Implemente um construtor para esta classe. Crie métodos para adicionar pratos ao menu e exibir o menu completo. Crie objetos de restaurantes e teste os métodos.
class Restaurante {
    constructor(nome, tipoCozinha) {
        this.nome = nome
        this.tipoCozinha = tipoCozinha
        this.menu = []
    }

    adicionarPrato(prato, preco) {
        this.menu.push({ prato, preco })
        console.log(`Prato "${prato}" adicionado ao menu do restaurante ${this.nome} por R$ ${preco.toFixed(2)}.`)
    }

    exibirMenu() {
        console.log(`Menu do Restaurante ${this.nome} (${this.tipoCozinha}):`)
        this.menu.forEach(({ prato, preco }) => {
            console.log(`- ${prato}: R$ ${preco.toFixed(2)}`)
        })
    }
}

const restaurante1 = new Restaurante("Cantina Italiana", "Italiana")
const restaurante2 = new Restaurante("Sushi House", "Japonesa")

restaurante1.adicionarPrato("Spaghetti alla Carbonara", 25.99)
restaurante1.adicionarPrato("Margherita Pizza", 19.99)
restaurante1.adicionarPrato("Tiramisù", 12.99)

restaurante2.adicionarPrato("Sashimi Combo", 32.99)
restaurante2.adicionarPrato("Dragon Roll", 24.99)
restaurante2.adicionarPrato("Mochi Ice Cream", 8.99)

restaurante1.exibirMenu()
restaurante2.exibirMenu()
