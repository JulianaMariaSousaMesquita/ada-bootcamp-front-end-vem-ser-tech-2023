// Crie uma classe chamada "ContaBancaria" com os atributos número da conta, saldo e nome do titular. Adicione um construtor para inicializar esses atributos. Crie métodos para depositar e sacar dinheiro da conta. Teste esses métodos em objetos de conta bancária. 💰🏦
class ContaBancaria {
    constructor(conta, saldo, titular){
        this.conta = conta
        this.saldo = saldo
        this.titular = titular
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        this.saldo -= this.saldo
    }
}

const conta01 = new ContaBancaria(1234587, 50, "Juliana Mesquita")
console.log(conta01.saldo)
conta01.depositar(5000)
console.log(conta01.saldo)
conta01.sacar(1050)
console.log(conta01.saldo)
