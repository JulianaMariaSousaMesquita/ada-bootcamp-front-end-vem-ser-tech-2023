// 32. Desenvolva uma classe chamada "Loja" com os atributos nome, endereço e lista de produtos. Implemente um construtor para esta classe. Crie métodos para adicionar produtos à loja e calcular o preço total dos produtos. Crie objetos de lojas e teste os métodos.
class Loja {
    constructor(nome, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.produtos = []
    }

    adicionarProduto(produto, preco) {
        this.produtos.push({ produto, preco })
        console.log(`Produto "${produto}" adicionado à loja ${this.nome} por R$ ${preco.toFixed(2)}.`)
    }

    calcularPrecoTotal() {
        let precoTotal = 0
        for (const { preco } of this.produtos) {
            precoTotal += preco
        }
        console.log(`O preço total dos produtos na loja ${this.nome} é R$ ${precoTotal.toFixed(2)}.`)
        return precoTotal
    }
}

const loja1 = new Loja("Supermercado Bom deposito", "Rua Principal guilhermina bastos, 123")
const loja2 = new Loja("Loja de Eletrônicos americanas", "Avenida Comercial, 456")

loja1.adicionarProduto("Arroz", 5.99)
loja1.adicionarProduto("Feijão", 3.49)
loja1.adicionarProduto("Leite", 2.99)

loja2.adicionarProduto("Smartphone Motorola G15", 1200)
loja2.adicionarProduto("TV 4K LG", 1500)
loja2.adicionarProduto("Notebook DELL", 2000)

loja1.calcularPrecoTotal()
loja2.calcularPrecoTotal()
