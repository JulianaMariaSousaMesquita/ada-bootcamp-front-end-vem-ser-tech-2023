// Enunciado
// Obtendo o primeiro elemento de um dropdown
// Os componentes de seleção de texto são muito importantes para que o usuário final possa selecionar dados para uma pesquisa, por exemplo.
// Suponha que você esteja fornecendo uma lista de Imobiliárias para serem exibidas e que o usuário final possa selecionar uma e listar os imóveis disponíveis nela.
// A lista é essa aqui:
// const imobiliarias = ["Arantes", "Terra Nova", "Ivan", "Seratto", "Azaleia"];

// Agora você tem que sempre trazer o nome da primeira imobiliaria, para ela ficar selecionada por default no nosso dropdown.
// Para resolver esse problema, crie uma função chamada retornarPrimeiraImobiliaria que deve:
// Receber um array de string onde cada string seja o nome de uma imobiliaria.
// Retornar uma string que seja referente ao nome da primeira imobiliaria da lista.
// Utilize a função shift() da API do Javascript para isso;

export function retornarPrimeiraImobiliaria(imobiliarias) {
    return imobiliarias.shift();
}