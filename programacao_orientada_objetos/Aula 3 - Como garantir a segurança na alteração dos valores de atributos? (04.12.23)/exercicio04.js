// Crie um objeto chamado "livro" com os atributos título, autor e um método chamado "detalhes" que imprime os detalhes do livro.
class Livro {
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }
    detalhes(){
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}`)
    }
}

const livro01 = new Livro("Propósito: A coragem de ser quem somos", "Sri Prem Baba")
const livro02 = new Livro("O Poder do Agora: Um guia para a iluminação espiritual", "Eckhart Tolle")

livro01.detalhes()
livro02.detalhes()