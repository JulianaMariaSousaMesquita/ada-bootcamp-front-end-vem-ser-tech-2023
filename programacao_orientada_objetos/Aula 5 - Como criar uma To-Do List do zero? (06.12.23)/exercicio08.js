//🎨 Exercício 8: Estúdio de Arte Digital - Desenvolva uma classe `EstudioArteDigital` com atributos como nome, equipamentos e obras de arte. Inclua métodos para `criarArteDigital()` e `exporObras()`.
class EstudioArteDigital {
    constructor(nome, equipamentos) {
        this.nome = nome
        this.equipamentos = equipamentos
        this.obrasDeArte = []
    }

    criarArteDigital(nomeObra, tecnica) {
        this.obrasDeArte.push({ nome: nomeObra, tecnica })
        console.log(`Arte digital "${nomeObra}" criada usando a técnica ${tecnica}.`)
    }

    exporObras() {
        console.log(`Expondo obras de arte digital no Estúdio ${this.nome}:`)
        this.obrasDeArte.forEach(({ nome, tecnica }) => {
            console.log(`- "${nome}" (Técnica: ${tecnica})`)
        })
    }
}

const estudioArteDigital = new EstudioArteDigital("ArteInovação", ["Tablet Gráfico", "Computador Potente"])

estudioArteDigital.criarArteDigital("Aurora Cósmica", "Pintura Digital")
estudioArteDigital.criarArteDigital("Retrato Futurista", "Ilustração Vetorial")
estudioArteDigital.criarArteDigital("Mundo Virtual", "Arte 3D")

estudioArteDigital.exporObras()
