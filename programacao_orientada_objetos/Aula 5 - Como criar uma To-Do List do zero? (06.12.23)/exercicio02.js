// 🐉 Exercício 2: Mundo dos Dragões - Desenvolva uma classe `Dragao` com atributos como nome, cor, elemento (fogo, gelo, etc.) e nível de saúde. Inclua métodos como `voar()`, `cuspirFogo()` e `comer()`.
class Dragao {
    constructor(nome, cor, elemento, saude){
        this.nome = nome
        this.cor = cor
        this.elemento = elemento
        this.saude = saude
    }
    voar() {
        console.log(`${this.nome}, o dragão ${this.cor} de elemento ${this.elemento}, está voando pelo céu. 🐉`)
    }
    cuspirFogo() {
        console.log(`${this.nome} cuspiu uma rajada de fogo! 🔥`)
    }
    comer(valor) {
        this.saude += valor
        console.log(`${this.nome} comeu e recuperou sua saúde. Saúde atual: ${this.saude}.`)
    }
}

const dragao1 = new Dragao("Fúria da Noite", "Preto", "Fogo", 80)
const dragao2 = new Dragao("Gelado", "Branco", "Gelo", 90)

dragao1.voar()
dragao1.cuspirFogo()
dragao1.comer(30)

dragao2.voar()
dragao2.cuspirFogo()
dragao2.comer(10)