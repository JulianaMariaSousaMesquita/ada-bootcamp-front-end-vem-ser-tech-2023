// 20. Crie uma classe chamada "Biblioteca" com os atributos nome, endereço e lista de livros disponíveis. Adicione um construtor para inicializar esses atributos e métodos para adicionar e emprestar livros. Crie objetos de bibliotecas e teste os métodos.
class Biblioteca {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.livrosDisponiveis = [];
        this.livrosEmprestados = [];
    }

    adicionarLivro(livro) {
        this.livrosDisponiveis.push(livro);
        console.log(`Livro "${livro}" adicionado à biblioteca.`);
    }

    emprestarLivro(livro) {
        const livroIndex = this.livrosDisponiveis.indexOf(livro);
        if (livroIndex !== -1) {
            const livroEmprestado = this.livrosDisponiveis.splice(livroIndex, 1)[0];
            this.livrosEmprestados.push(livroEmprestado);
            console.log(`Livro "${livro}" emprestado com sucesso.`);
        } else {
            console.log(`Livro "${livro}" não disponível para empréstimo.`);
        }
    }
}

const biblioteca1 = new Biblioteca("Biblioteca Central", "Rua Principal, 123");

biblioteca1.adicionarLivro("Dom Casmurro");
biblioteca1.adicionarLivro("A Arte da Guerra");
biblioteca1.adicionarLivro("1984");

biblioteca1.emprestarLivro("A Arte da Guerra");
biblioteca1.emprestarLivro("Dom Casmurro");
biblioteca1.emprestarLivro("Senhor dos Anéis");
