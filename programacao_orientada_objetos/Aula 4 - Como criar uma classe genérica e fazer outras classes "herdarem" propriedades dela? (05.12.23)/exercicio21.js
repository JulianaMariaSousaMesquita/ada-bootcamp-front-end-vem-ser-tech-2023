// 21. Defina uma classe chamada "ProdutoEletrônico" com os atributos nome, preço e garantia em meses. Implemente um construtor para esta classe. Crie um método para verificar se o produto está na garantia com base na quantidade de meses desde a compra. Crie objetos de produtos eletrônicos e teste o método.
class ProdutoEletronico {
    constructor(nome, preco, garantiaMeses) {
        this.nome = nome
        this.preco = preco
        this.garantiaMeses = garantiaMeses
        this.dataCompra = new Date()
    }

    estaNaGarantia() {
        const dataAtual = new Date()
        const mesesDesdeCompra = Math.floor((dataAtual - this.dataCompra) / (30 * 24 * 60 * 60 * 1000))

        if (mesesDesdeCompra <= this.garantiaMeses) {
            console.log(`${this.nome} está na garantia.`)
            return true
        } else {
            console.log(`${this.nome} não está mais na garantia.`)
            return false
        }
    }
}

const smartphone = new ProdutoEletronico("Smartphone Motorola G5", 3200, 12)
const laptop = new ProdutoEletronico("Laptop Dell inspiron geração 21", 4500, 24)

smartphone.estaNaGarantia()
laptop.estaNaGarantia() 
