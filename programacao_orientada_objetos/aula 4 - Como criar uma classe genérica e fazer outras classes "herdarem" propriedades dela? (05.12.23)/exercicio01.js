// 1. Crie uma classe chamada "Carro" com os atributos marca, modelo e ano. Em seguida, crie um construtor para a classe que inicializa esses atributos. Crie objetos de carros diferentes e imprima suas informações. 🚗
class Carro {
    constructor (marca, modelo, ano, cor){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    }    
}

const carro01 = new Carro('Fiat','Modelo 002', '2012', 'vermelho')
const carro02 = new Carro('Gol','Modelo 24', '2020', 'cinza')

console.log(carro01)
console.log(carro02)