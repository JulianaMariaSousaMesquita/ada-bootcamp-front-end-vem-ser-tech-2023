// 24. Crie uma classe chamada "Calendário" com os atributos dia, mês e ano. Implemente um construtor para esta classe. Crie um método para verificar se uma data é válida (levando em consideração os meses com diferentes números de dias). Crie objetos de calendário e teste o método. 
class Calendario {
    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    isDataValida() {
        if (this.ano < 1 || this.mes < 1 || this.mes > 12 || this.dia < 1) {
            return false
        }

        const diasNoMes = new Date(this.ano, this.mes, 0).getDate()
        return this.dia <= diasNoMes
    }
}

const data1 = new Calendario(15, 7, 2023)  
const data2 = new Calendario(31, 2, 2023)  
const data3 = new Calendario(29, 2, 2020)

console.log(`A data ${data1.dia}/${data1.mes}/${data1.ano} é válida? ${data1.isDataValida()}`)
console.log(`A data ${data2.dia}/${data2.mes}/${data2.ano} é válida? ${data2.isDataValida()}`)
console.log(`A data ${data3.dia}/${data3.mes}/${data3.ano} é válida? ${data3.isDataValida()}`)
