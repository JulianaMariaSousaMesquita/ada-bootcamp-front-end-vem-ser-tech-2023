// Desenvolva uma classe chamada "Funcionário" com os atributos nome, cargo e salário. Adicione um construtor para inicializar esses atributos. Implemente um método para aumentar o salário de um funcionário em uma determinada porcentagem. Crie objetos de funcionários e teste o método de aumento de salário.
class Funcionario {
    constructor(nome, cargo, salario){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
    aumentarSalario(porcentagem){
        const novoSalario = salario + ((salario * porcentagem)/100)
        this.salario = novoSalario
    }
}

const funcionario01 = {
    nome: "Juliana",
    cargo: "Desenvolvedor Júnior",
    salario: 3500
}

const meuFuncionario01 = new Funcionario(funcionario01.nome, funcionario01.cargo, funcionario01.salario)

const funcionario02 = {
    nome: "Joana Darc",
    cargo: "Desenvolvedor Pleno",
    salario: 6000
}

const funcionario03 = {
    nome: "Carla",
    cargo: "Desenvolvedor Senior",
    salario: 9000
}