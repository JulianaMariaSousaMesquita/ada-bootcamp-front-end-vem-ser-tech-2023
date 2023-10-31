// Crie uma função chamada aprovarEmprestimo que aceita três argumentos: 
// salario
// scoreDeCredito
// idade
// A função deve retornar true se a pessoa for aprovada para um empréstimo nas seguintes condições:
// O salário for maior ou igual a 5000. 
// O score de crédito for maior ou igual a 700. 
// A idade for maior ou igual a 18.
// Entrada: 	Salario: 5001 - Score: 701 - idade: 19		=> Saida: true
// 			Salario: 5000 - Score: 700 - idade: 18		=> Saida: true
// 			Salario: 4999 - Score: 700 - idade: 18		=> Saida: false
// 			Salario: 5000 - Score: 699 - idade: 18		=> Saida: false
// Salario: 5000 - Score: 700 - idade: 17		=> Saida: false

function aprovarEmprestimo (salario, scoreDeCredito, idade){
    return (salario >= 5000 && scoreDeCredito >= 700 && idade >= 18);
}

console.log(aprovarEmprestimo(5001,701,19));
console.log(aprovarEmprestimo(5000,700,18));
console.log(aprovarEmprestimo(4999,700,18));
console.log(aprovarEmprestimo(5000,699,18));
console.log(aprovarEmprestimo(5000,700,17));