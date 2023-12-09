//🚀 Exercício 6: Clube de Astronomia - Crie uma classe `ClubeAstronomia` com atributos como nome, local e membros. Desenvolva métodos para `realizarObservacao()` e `organizarEventosEstelares()`.
class ClubeAstronomia {
    constructor(nome, local) {
        this.nome = nome
        this.local = local
        this.membros = []
        this.observacoesRealizadas = []
    }

    adicionarMembro(nomeMembro) {
        this.membros.push(nomeMembro)
        console.log(`Novo membro "${nomeMembro}" adicionado ao Clube de Astronomia ${this.nome}.`)
    }

    realizarObservacao(objetoCeleste) {
        this.observacoesRealizadas.push(objetoCeleste)
        console.log(`Observação realizada: ${objetoCeleste}.`)
    }

    organizarEventosEstelares() {
        console.log(`Organizando eventos estelares para os membros do Clube de Astronomia ${this.nome} em ${this.local}.`)
        console.log(`Observações realizadas: ${this.observacoesRealizadas.join(', ')}.`)
    }
}

const clubeAstronomia = new ClubeAstronomia("Estrelas do Céu", "Observatório Municipal")

clubeAstronomia.adicionarMembro("Alice")
clubeAstronomia.adicionarMembro("Bob")
clubeAstronomia.adicionarMembro("Carol")

clubeAstronomia.realizarObservacao("Lua Cheia")
clubeAstronomia.realizarObservacao("Estrela Cadente")
clubeAstronomia.realizarObservacao("Nebulosa de Órion")

clubeAstronomia.organizarEventosEstelares()
