// Crie uma classe chamada "Produto" com os atributos nome, preço e quantidade em estoque. Implemente um construtor para inicializar esses atributos e métodos para calcular o valor total em estoque e para adicionar ou remover unidades do estoque. Crie objetos de produtos e teste os métodos. 🛒💰
class Produto {
    constructor(nome, preco, estoque){
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    adicionarEstoque(quantidade){
        this.estoque += quantidade
        return this.estoque
    }

    removerEstoque(quantidade){
        this.estoque -= quantidade
        return this.estoque
    }

    valorTotal(){
        return this.estoque * this.preco
    }

}

const produto01 = {
    nome: "Smartphone",
    preco: 3500,
    estoque: 10
}

const meuProduto01 = new Produto (produto01.nome, produto01.preco, produto01.estoque)
console.log(`Tem ${meuProduto01.estoque} ${meuProduto01.nome} no estoque, com preço preço total R$ ${meuProduto01.valorTotal()} `)
meuProduto01.adicionarEstoque(40)
console.log(`Tem ${meuProduto01.estoque} ${meuProduto01.nome} no estoque, com preço preço total R$ ${meuProduto01.valorTotal()} `)

const produto02 = {
    nome: "Smart Tv 42",
    preco: 8500,
    estoque: 5
}

const meuProduto02 = new Produto (produto02.nome, produto02.preco, produto02.estoque)
console.log(`Tem ${meuProduto02.estoque} ${meuProduto02.nome} no estoque, com preço preço total R$ ${meuProduto02.valorTotal()} `)
meuProduto02.removerEstoque(3)
console.log(`Tem ${meuProduto02.estoque} ${meuProduto02.nome} no estoque, com preço preço total R$ ${meuProduto02.valorTotal()} `)
