//🍦 Exercício 10: Sorveteria Mágica - Elabore uma classe `SorveteriaMagica` com atributos como nome, sabores e varinhas mágicas. Desenvolva métodos para `criarSorveteMagico()` e `realizarFeitiçosGelados()`.
class SorveteriaMagica {
    constructor(nome, varinhasMagicas) {
        this.nome = nome
        this.sabores = []
        this.varinhasMagicas = varinhasMagicas
    }

    criarSorveteMagico(sabor, cobertura) {
        const sorveteMagico = {
            sabor,
            cobertura,
            magia: "✨🍦 Feitiço Gelado Ativado 🍦✨",
        }

        this.sabores.push(sorveteMagico)
        console.log(`Sorvete mágico de ${sabor} com cobertura de ${cobertura} criado na ${this.nome}.`)
    }

    realizarFeiticosGelados() {
        console.log(`Realizando feitiços gelados na ${this.nome}...`)
        this.sabores.forEach(sorvete => {
            console.log(`- ${sorvete.magia} - ${sorvete.sabor} com cobertura de ${sorvete.cobertura}`)
        })
    }
}

const varinhas = ["Varinha de Neve", "Varinha de Glacius"]

const sorveteria = new SorveteriaMagica("Magia do Gelado", varinhas)

sorveteria.criarSorveteMagico("Chocolate", "Calda de Morango")
sorveteria.criarSorveteMagico("Baunilha", "Granulado Colorido")
sorveteria.criarSorveteMagico("Morango", "Marshmallow")

sorveteria.realizarFeiticosGelados()