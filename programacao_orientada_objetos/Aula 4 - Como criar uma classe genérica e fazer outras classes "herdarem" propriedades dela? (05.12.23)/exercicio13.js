// Desenvolva uma classe chamada "ContaCorrente" com os atributos número da conta, saldo e nome do titular. Implemente um construtor para esta classe. Crie métodos para depositar e sacar dinheiro da conta. Teste esses métodos em objetos de conta corrente. 💳💵🏦
class ContaCorrente {
    constructor(conta, saldo, titular){
        this.conta = conta
        this.saldo = saldo
        this.titular = titular
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        this.saldo -= valor
    }
}

const contaCorrente01 = {
    conta: 123456,
    saldo: 100000,
    titular: "Juliana Mesquita"
}

const minhaContaCorrente01 = new ContaCorrente(contaCorrente01.conta, contaCorrente01.saldo, contaCorrente01.titular)

console.log(minhaContaCorrente01)



