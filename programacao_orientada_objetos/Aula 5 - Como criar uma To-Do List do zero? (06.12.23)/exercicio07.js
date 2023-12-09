//🏰 Exercício 7: Construtor de Castelos - Projete uma classe `ConstrutorCastelos` com atributos como nome, estilo arquitetônico e materiais usados. Implemente métodos para `construirTorre()` e `adicionarAposentos()`.
class ConstrutorCastelos {
    constructor(nome, estiloArquitetonico, materiaisUsados) {
        this.nome = nome
        this.estiloArquitetonico = estiloArquitetonico
        this.materiaisUsados = materiaisUsados
        this.torresConstruidas = 0
        this.aposentosAdicionados = []
    }

    construirTorre() {
        this.torresConstruidas++
        console.log(`Torre adicionada ao castelo ${this.nome}. Total de torres: ${this.torresConstruidas}.`)
    }

    adicionarAposentos(tipoAposento, quantidade) {
        this.aposentosAdicionados.push({ tipo: tipoAposento, quantidade })
        console.log(`${quantidade} aposentos do tipo "${tipoAposento}" adicionados ao castelo ${this.nome}.`)
    }

    exibirDetalhes() {
        console.log(`Detalhes do Castelo ${this.nome}:`)
        console.log(`Estilo Arquitetônico: ${this.estiloArquitetonico}`)
        console.log(`Materiais Usados: ${this.materiaisUsados.join(', ')}`)
        console.log(`Torres Construídas: ${this.torresConstruidas}`)
        console.log(`Aposentos Adicionados:`)
        this.aposentosAdicionados.forEach(({ tipo, quantidade }) => {
            console.log(`- ${quantidade}x ${tipo}`)
        })
    }
}

const construtorCastelo = new ConstrutorCastelos("Castelo das Maravilhas", "Gótico", ["Pedra", "Madeira"])

construtorCastelo.construirTorre()
construtorCastelo.adicionarAposentos("Quarto Real", 5)
construtorCastelo.adicionarAposentos("Sala de Banquete", 1)

construtorCastelo.exibirDetalhes()
