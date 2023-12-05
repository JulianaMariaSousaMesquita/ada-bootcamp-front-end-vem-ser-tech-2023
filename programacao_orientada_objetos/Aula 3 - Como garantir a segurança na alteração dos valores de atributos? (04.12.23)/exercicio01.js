// Crie um objeto literal representando um carro com os seguintes atributos: marca, modelo, ano e cor.
//objeto literal
const carroObjetoLiteral = {
    marca : "Fox",
    modelo: "modelo 098",
    ano: 2012,
    cor: "verde"
}

console.log(carroObjetoLiteral)

//classe
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