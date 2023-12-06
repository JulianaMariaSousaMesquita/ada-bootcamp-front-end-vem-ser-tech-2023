// Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de notas. Implemente um construtor para inicializar os atributos e um método para calcular a média das notas do aluno. Crie objetos de alunos e calcule suas médias. 🎓📊
class Aluno {
    constructor(nome, matricula, notas){
        this.nome = nome
        this.matricula = matricula
        this.notas = notas
    }
    calculaMedia(){
        somaNotas = 0
        this.notas.forEach(element => {
            somaNotas += element
        });
        return somaNotas/this.notas.length
    }
}

const aluno01 = new Aluno("Juliana Mesquita","1133019",[10,9,5,8,7])
aluno01.calculaMedia()
