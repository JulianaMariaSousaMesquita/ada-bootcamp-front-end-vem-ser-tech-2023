// 36. Crie uma classe chamada "Conta" com os atributos número da conta, saldo e titular da conta. Implemente um construtor para esta classe. Crie um método para verificar se a conta está em débito (saldo negativo) e outro para depositar dinheiro na conta. Crie objetos de contas e teste os métodos. 
class Conta {
    constructor(numeroConta, saldoInicial, titular) {
        this.numeroConta = numeroConta
        this.saldo = saldoInicial
        this.titular = titular
    }

    verificarDebito() {
        return this.saldo < 0
    }

    depositar(valor) {
        this.saldo += valor
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado na conta ${this.numeroConta}. Novo saldo: R$ ${this.saldo.toFixed(2)}.`)
    }
}

const conta1 = new Conta("12345", 1000, "João Silva")
const conta2 = new Conta("67890", -500, "Maria Oliveira")

console.log(`${conta1.titular}, a conta ${conta1.numeroConta} está em débito? ${conta1.verificarDebito() ? 'Sim' : 'Não'}`)
console.log(`${conta2.titular}, a conta ${conta2.numeroConta} está em débito? ${conta2.verificarDebito() ? 'Sim' : 'Não'}`)

conta1.depositar(500)
conta2.depositar(200)

console.log(`${conta1.titular}, a conta ${conta1.numeroConta} está em débito? ${conta1.verificarDebito() ? 'Sim' : 'Não'}`)
console.log(`${conta2.titular}, a conta ${conta2.numeroConta} está em débito? ${conta2.verificarDebito() ? 'Sim' : 'Não'}`)