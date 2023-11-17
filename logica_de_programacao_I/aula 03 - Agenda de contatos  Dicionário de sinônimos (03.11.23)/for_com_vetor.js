let numeros = [10,20,30,40,50,40];

for(let i = 0; i < numeros.length; i++){
    console.log("numores["+[i]+"] = "+numeros[i]);
}

//somar elementos sem for
let somaSemRepeticao = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4]+ numeros[5];
console.log("somaSemRepeticao = ",somaSemRepeticao);

//somar utilizando estrutura de repetição
let somaComRepeticao = 0;
for(let i = 0; i < numeros.length; i++){
    somaComRepeticao = somaComRepeticao + numeros[i];
}
console.log("somaComRepeticao = ",somaComRepeticao);

//Estrutura de repetição foreach VETOR
numeros.forEach(function(item, index){
    console.log(index,item)
});