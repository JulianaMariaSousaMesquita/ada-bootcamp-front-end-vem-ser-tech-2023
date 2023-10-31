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

function elegivelParaDesconto(idade, compraMinima, isNewClient){
    return(idade >= 60 && compraMinima >= 100 && isNewClient == false)
}

console.log(elegivelParaDesconto(65,100,false));
console.log(elegivelParaDesconto(45,120,true));
console.log(elegivelParaDesconto(45,120,false));
console.log(elegivelParaDesconto(55,50,false));