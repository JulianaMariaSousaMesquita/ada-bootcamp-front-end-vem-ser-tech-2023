// Crie uma classe chamada "Livro" com os atributos título, autor e ano de publicação. Implemente um construtor para esta classe. Crie objetos de livros e exiba suas informações. 📖✍️📅
class Livro {
    constructor(titulo, autor, ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }
    mostrar(){
        console.log(`Livro ${this.titulo}, foi escrito por ${this.autor} em ${this.ano}.`)
    }    
}

const livro01 = new Livro('Arquitetura limpa: o guia do artesão para estrutura e design de software', 'Robert C. Martin', 2019)
livro01.mostrar()

const livro02 = new Livro('Código limpo: habilidades práticas do Agile software', 'Robert C. Martin', 2009)
livro02.mostrar()

const livro03 = new Livro('O codificador limpo: um código de conduta para programadores profissionais', ' Bob Martin', 2012)
livro03.mostrar()