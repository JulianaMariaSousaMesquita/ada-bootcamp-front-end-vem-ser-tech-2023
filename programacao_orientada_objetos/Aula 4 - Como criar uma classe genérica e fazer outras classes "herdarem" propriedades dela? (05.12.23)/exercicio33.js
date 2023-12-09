// 33. Crie uma classe chamada "Telefone" com os atributos marca, modelo e número de série. Implemente um construtor para esta classe. Crie um método para fazer chamadas telefônicas e outro para enviar mensagens de texto. Crie objetos de telefones e teste os métodos. 
class Telefone {
    constructor(marca, modelo, numeroSerie) {
        this.marca = marca
        this.modelo = modelo
        this.numeroSerie = numeroSerie
    }

    fazerChamada(numero) {
        console.log(`Fazendo chamada do ${this.marca} ${this.modelo} (${this.numeroSerie}) para o número ${numero}.`)
    }

    enviarMensagem(texto, numero) {
        console.log(`Enviando mensagem do ${this.marca} ${this.modelo} (${this.numeroSerie}) para o número ${numero}: "${texto}".`)
    }
}

const telefone1 = new Telefone("Samsung", "Galaxy S21", "123456789")
const telefone2 = new Telefone("iPhone", "13 Pro", "987654321")

telefone1.fazerChamada("555-1234")
telefone1.enviarMensagem("Oi, tudo bem?", "555-1234")

telefone2.fazerChamada("555-5678")
telefone2.enviarMensagem("Olá, como vai?", "555-5678")