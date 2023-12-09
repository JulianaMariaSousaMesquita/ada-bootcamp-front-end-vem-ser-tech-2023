// 🏞️ Exercício 4: Parque Ecológico Virtual - Crie uma classe `ParqueEcológico` com atributos como nome, localização e tipos de fauna e flora. Implemente métodos para `adicionarEspécie()` e `organizarTourVirtual()`.
class ParqueEcológico {
    constructor(nome, localizacao) {
        this.nome = nome
        this.localizacao = localizacao
        this.fauna = []
        this.flora = []
    }

    adicionarEspécie(tipo, nomeEspecie) {
        if (tipo === 'fauna') {
            this.fauna.push(nomeEspecie)
            console.log(`Nova espécie de fauna "${nomeEspecie}" adicionada ao parque ${this.nome}.`)
        } else if (tipo === 'flora') {
            this.flora.push(nomeEspecie)
            console.log(`Nova espécie de flora "${nomeEspecie}" adicionada ao parque ${this.nome}.`)
        } else {
            console.log('Tipo de espécie inválido. Use "fauna" ou "flora".')
        }
    }

    organizarTourVirtual() {
        console.log(`Iniciando o tour virtual pelo Parque Ecológico ${this.nome} em ${this.localizacao}.`)
        console.log(`Fauna do parque: ${this.fauna.join(', ')}.`)
        console.log(`Flora do parque: ${this.flora.join(', ')}.`)
    }
}

const parque = new ParqueEcológico("Parque da Natureza", "Floresta Nacional")

parque.adicionarEspécie('fauna', 'Jaguatirica')
parque.adicionarEspécie('fauna', 'Arara-Azul')
parque.adicionarEspécie('flora', 'Ipê-Amarelo')
parque.adicionarEspécie('flora', 'Orquídea')

parque.organizarTourVirtual()
