// Crie uma função chamada elegivelParaDesconto que aceita dois argumentos: 

// idade
// compraMinima. 
// isNewClient

// A função deve retornar true se a pessoa for elegível para um desconto, o que ocorre quando: 

// A idade for maior ou igual a 60 anos. 
// E a compra for maior ou igual a R$ 100.
// E se isNewClient for False


// Entrada:	idade: 65 - compraMinima: 100 - isNewClient: false	=> 	Saida: true
// 		idade: 45 - compraMinima: 120 - isNewClient: true	=> 	Saida: false
// idade: 45 - compraMinima: 120 - isNewClient: false	=> 	Saida: true
// 		idade: 55 - compraMinima: 50 -  isNewClient: false	=> 	Saida: false	

function verificarCompatibilidade(navegador, sistemaOperacional){
    return((navegador === "Chrome" || navegador === "Firefox") && (sistemaOperacional === "Windows" || sistemaOperacional === "Mac"))
}

console.log(verificarCompatibilidade("Chrome","Windows"));
console.log(verificarCompatibilidade("Chrome","Mac"));
console.log(verificarCompatibilidade("Firefox","Windows"));
console.log(verificarCompatibilidade("Firefox","Mac"));
console.log(verificarCompatibilidade("Firefox","Sony"));
console.log(verificarCompatibilidade("Safari","Mac"));