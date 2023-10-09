// Desafio: Quantidade de Palavras
// 2 - Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte frase:
// "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"
// Como você pode perceber, essa frase está no padrão camelCase, portanto cada nova palavra é representada 
// pela inicial em maiúscula. 
// Crie uma função que receba uma string e retorne a quantidade de palavras existentes!

function quantidadePalavras(frase){       
    let letrasMaiuscula = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let tamanhoMaiuscula = letrasMaiuscula.length;
    let tamanhoFrase = frase.length;
    let quantidade = 1; //Primeira palavra em minusculo por ser camelCase
    for(let i = 0; i < tamanhoFrase; i++) {  
        for(let j = 0; j < tamanhoMaiuscula; j++){
            if(frase[i] === letrasMaiuscula[j]){
                quantidade+=1;
            }
        }
    }
    return quantidade;
}
console.log(quantidadePalavras("façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"));