// 🍔 Exercício 5: Simulador de Restaurante - Elabore uma classe `Restaurante` com atributos como nome, tipo de culinária e menu. Inclua métodos como `adicionarPratoNoMenu()` e `receberPedido()`.
class Restaurante {
    constructor(nome, tipoCulinaria) {
        this.nome = nome
        this.tipoCulinaria = tipoCulinaria
        this.menu = []
        this.pedidosRecebidos = []
    }

    adicionarPratoNoMenu(nomePrato, preco) {
        this.menu.push({ nome: nomePrato, preco })
        console.log(`Prato "${nomePrato}" adicionado ao menu do restaurante ${this.nome} por R$ ${preco.toFixed(2)}.`)
    }

    receberPedido(nomePrato, quantidade) {
        const prato = this.menu.find(item => item.nome === nomePrato)

        if (prato) {
            const valorTotal = prato.preco * quantidade
            this.pedidosRecebidos.push({ nome: nomePrato, quantidade, valorTotal })
            console.log(`Pedido recebido: ${quantidade}x "${nomePrato}". Total a pagar: R$ ${valorTotal.toFixed(2)}.`)
        } else {
            console.log(`O prato "${nomePrato}" não está disponível no menu do restaurante ${this.nome}.`)
        }
    }

    exibirMenu() {
        console.log(`Menu do Restaurante ${this.nome} (${this.tipoCulinaria}):`)
        this.menu.forEach(({ nome, preco }) => {
            console.log(`- ${nome}: R$ ${preco.toFixed(2)}`)
        })
    }

    mostrarPedidos() {
        console.log(`Pedidos recebidos no Restaurante ${this.nome}:`)
        this.pedidosRecebidos.forEach(({ nome, quantidade, valorTotal }) => {
            console.log(`${quantidade}x "${nome}" - Total: R$ ${valorTotal.toFixed(2)}`)
        })
    }
}

const restaurante = new Restaurante("Sabores do Mundo", "Internacional")

restaurante.adicionarPratoNoMenu("Spaghetti Carbonara", 25.99)
restaurante.adicionarPratoNoMenu("Sushi Combo", 32.99)
restaurante.adicionarPratoNoMenu("Hamburguer Gourmet", 18.99)

restaurante.exibirMenu()

restaurante.receberPedido("Spaghetti Carbonara", 2)
restaurante.receberPedido("Sushi Combo", 1)
restaurante.receberPedido("Pizza Margherita", 1)

restaurante.mostrarPedidos()

