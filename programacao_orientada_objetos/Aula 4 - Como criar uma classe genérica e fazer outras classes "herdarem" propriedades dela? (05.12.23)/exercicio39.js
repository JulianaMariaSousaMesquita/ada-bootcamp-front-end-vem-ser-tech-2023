// 39. Crie uma classe chamada "RelatórioFinanceiro" com os atributos mês, ano e lista de despesas. Implemente um construtor para esta classe. Crie métodos para adicionar despesas ao relatório e calcular o total de despesas para um determinado mês e ano. Crie objetos de relatórios financeiros e teste os métodos.
class RelatorioFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.despesas = []
    }

    adicionarDespesa(descricao, valor) {
        this.despesas.push({ descricao, valor })
        console.log(`Despesa "${descricao}" de R$ ${valor.toFixed(2)} adicionada ao relatório.`)
    }

    calcularTotalDespesas() {
        let totalDespesas = 0
        for (const { valor } of this.despesas) {
            totalDespesas += valor
        }
        console.log(`Total de despesas para ${this.mes}/${this.ano}: R$ ${totalDespesas.toFixed(2)}.`)
        return totalDespesas
    }
}

const relatorio1 = new RelatorioFinanceiro("Janeiro", 2023)
const relatorio2 = new RelatorioFinanceiro("Fevereiro", 2023)

relatorio1.adicionarDespesa("Aluguel", 1200)
relatorio1.adicionarDespesa("Mercado", 300)
relatorio1.adicionarDespesa("Transporte", 150)

relatorio2.adicionarDespesa("Energia", 200)
relatorio2.adicionarDespesa("Água", 80)
relatorio2.adicionarDespesa("Internet", 100)

relatorio1.calcularTotalDespesas()
relatorio2.calcularTotalDespesas()
