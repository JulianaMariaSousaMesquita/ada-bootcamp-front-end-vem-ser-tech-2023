class Clientes {
    static totalCliente = 0
  
    constructor(nome) {
      this.nome = nome
      Clientes.totalCliente++
    }
  
    mostrar() {
      console.log(Clientes.totalCliente) // Ajuste aqui para acessar a propriedade estática
    }
  }
  
  const cliente1 = new Clientes('primeiro')
  cliente1.mostrar() // Saída esperada: 1
  
  const cliente2 = new Clientes('segundo')
  cliente2.mostrar() // Saída esperada: 2