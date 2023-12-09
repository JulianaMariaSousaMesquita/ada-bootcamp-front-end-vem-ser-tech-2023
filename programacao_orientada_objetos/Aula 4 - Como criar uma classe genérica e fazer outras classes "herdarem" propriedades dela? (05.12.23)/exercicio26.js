// 26. Crie uma classe chamada "ProdutoAlimentício" com os atributos nome, preço e data de validade. Implemente um construtor para esta classe. Crie um método para verificar se o produto está vencido com base na data atual. Crie objetos de produtos alimentícios e teste o método.
class ProdutoAlimenticio {
    constructor(nome, preco, dataValidade) {
        this.nome = nome
        this.preco = preco
        this.dataValidade = new Date(dataValidade)
    }

    estaVencido() {
        const dataAtual = new Date()
        return this.dataValidade < dataAtual
    }
}
const produto1 = new ProdutoAlimenticio("Arroz", 5.99, "2023-12-31")
const produto2 = new ProdutoAlimenticio("Leite", 3.49, "2023-10-15")

console.log(`${produto1.nome} está vencido? ${produto1.estaVencido() ? 'Sim' : 'Não'}`)
console.log(`${produto2.nome} está vencido? ${produto2.estaVencido() ? 'Sim' : 'Não'}`)
