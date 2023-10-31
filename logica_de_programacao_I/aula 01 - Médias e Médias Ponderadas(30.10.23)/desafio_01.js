// Crie uma função chamada verificarElegibilidadeVoto que aceita dois argumentos:
// idade
// nacionalidade
// A função deve retornar true se a pessoa for elegível para votar, o que ocorre quando a idade for maior ou igual a 16 e a nacionalidade for "brasileira", caso contrário, retorna false.
// Entrada:		idade: 16 - brasileiro 	=> saida: true
// idade: 15 - brasileiro 	=> saida: false
// idade: 18 - brasileiro 	=> saida: true
// idade: 16 - eua 			=> saida: false
// idade: 15 - eua 			=> saida: false
// idade: 18 - eua 			=> saida: false		

function verificarElegibilidadeVoto (idade, nacionalidade){
    return (idade >= 16 && (nacionalidade === 'Brasileira' || nacionalidade === 'brasileira' || nacionalidade === 'Brasileiro' || nacionalidade === 'brasileiro' || nacionalidade === 'br' || nacionalidade === 'Br'));
}

console.log(verificarElegibilidadeVoto(16,'Brasileiro'));
console.log(verificarElegibilidadeVoto(15,'brasileiro'));
console.log(verificarElegibilidadeVoto(18,'brasileira'));
console.log(verificarElegibilidadeVoto(16,'eua'));
console.log(verificarElegibilidadeVoto(15,'eua'));
console.log(verificarElegibilidadeVoto(18,'eua'));
