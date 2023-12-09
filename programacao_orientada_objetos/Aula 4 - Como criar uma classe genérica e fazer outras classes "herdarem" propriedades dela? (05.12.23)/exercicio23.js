//23. Desenvolva uma classe chamada "ContaPoupança" com os atributos número da conta, saldo e taxa de juros anual. Adicione um construtor para inicializar esses atributos. Crie métodos para calcular os juros mensais e depositar juros na conta. Teste esses métodos em objetos de conta poupança.
class ContaPoupanca {
    constructor(numeroConta, saldo, taxaJurosAnual) {
        this.numeroConta = numeroConta
        this.saldo = saldo
        this.taxaJurosAnual = taxaJurosAnual
    }

    calcularJurosMensais() {
        const taxaJurosMensal = this.taxaJurosAnual / 12 / 100
        const jurosMensais = this.saldo * taxaJurosMensal
        return jurosMensais
    }

    depositarJurosMensais() {
        const jurosMensais = this.calcularJurosMensais()
        this.saldo += jurosMensais
        console.log(`Juros mensais de R$ ${jurosMensais.toFixed(2)} foram depositados na conta ${this.numeroConta}.`)
    }
}

const contaPoupanca1 = new ContaPoupanca(123456, 1000, 2.5)
const contaPoupanca2 = new ContaPoupanca(789012, 500, 3.0)

contaPoupanca1.depositarJurosMensais()
console.log(`Saldo atual da Conta ${contaPoupanca1.numeroConta}: R$ ${contaPoupanca1.saldo.toFixed(2)}`)

contaPoupanca2.depositarJurosMensais()
console.log(`Saldo atual da Conta ${contaPoupanca2.numeroConta}: R$ ${contaPoupanca2.saldo.toFixed(2)}`)
