class Conta {
    constructor(titular, saldo = 0) {
      this._titular = titular
      this._saldo = saldo
    }
  
    get titular() {
      return this._titular
    }
  
    get saldo() {
      return this._saldo
    }
  
    depositar(valor) {
      if (valor > 0) {
        this._saldo += valor
        console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this._saldo}`)
      } else {
        console.log("Valor inválido para depósito.")
      }
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this._saldo) {
        this._saldo -= valor
        console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${this._saldo}`)
      } else {
        console.log("Valor inválido para saque ou saldo insuficiente.")
      }
    }
  }
  
  const contaExemplo = new Conta("Fulano")
  console.log(`Titular: ${contaExemplo.titular}, Saldo: R$ ${contaExemplo.saldo}`)
  contaExemplo.depositar(100)
  contaExemplo.sacar(50)
  