// Defina uma classe chamada "Funcionário" com os atributos nome, cargo e salário. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular o salário anual do funcionário (salário mensal multiplicado por 12). Crie objetos de funcionários e calcule seus salários anuais. 
class Funcionario {
    constructor(nome, cargo, salarioMensal) {
        this.nome = nome
        this.cargo = cargo
        this.salarioMensal = salarioMensal
    }

    calcularSalarioAnual() {
        return this.salarioMensal * 12
    }
}

const funcionario1 = new Funcionario("João Silva", "Desenvolvedor", 5000)
const funcionario2 = new Funcionario("Maria Oliveira", "Gerente de Projetos", 8000)

console.log(`Salário anual de ${funcionario1.nome}: R$ ${funcionario1.calcularSalarioAnual()}`)
console.log(`Salário anual de ${funcionario2.nome}: R$ ${funcionario2.calcularSalarioAnual()}`)
