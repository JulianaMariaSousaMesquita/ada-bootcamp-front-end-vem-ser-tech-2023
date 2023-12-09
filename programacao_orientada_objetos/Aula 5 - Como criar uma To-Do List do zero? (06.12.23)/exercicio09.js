//🌊 Exercício 9: Explorador de Oceano Profundo - Crie uma classe `ExploradorOceanoProfundo` com atributos como nome, submarino e descobertas submarinas. Implemente métodos para `mergulhar()`, `coletarAmostras()` e `estudarCriaturasMarinhas()`.
class ExploradorOceanoProfundo {
    constructor(nome, submarino) {
        this.nome = nome
        this.submarino = submarino
        this.descobertasSubmarinas = []
    }

    mergulhar(profundidade) {
        console.log(`${this.nome} está mergulhando no oceano até uma profundidade de ${profundidade} metros.`)
    }

    coletarAmostras(local) {
        console.log(`${this.nome} está coletando amostras submarinas em ${local}.`)
        this.descobertasSubmarinas.push(`Amostras coletadas em ${local}`)
    }

    estudarCriaturasMarinhas() {
        console.log(`${this.nome} está estudando as criaturas marinhas encontradas nas profundezas.`)
        this.descobertasSubmarinas.push("Estudo de criaturas marinhas")
    }

    exibirDescobertas() {
        console.log(`Descobertas submarinas de ${this.nome}:`)
        this.descobertasSubmarinas.forEach(descoberta => {
            console.log(`- ${descoberta}`)
        })
    }
}

const submarinoExplorador = {
    modelo: "AbyssExplorer",
    capacidade: "Profundidade ilimitada",
}

const explorador = new ExploradorOceanoProfundo("Prof. Marinha", submarinoExplorador)

explorador.mergulhar(5000)
explorador.coletarAmostras("Fossa das Marianas")
explorador.estudarCriaturasMarinhas()
explorador.exibirDescobertas()
