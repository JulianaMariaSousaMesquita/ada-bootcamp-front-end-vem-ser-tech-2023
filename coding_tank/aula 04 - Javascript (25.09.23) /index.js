c = "casa";
console.log(c[1])
if(c.includes('a')){
    console.log(c.indexOf("s"));
}

let palavra = "arara";
let palavraInvertida = palavra.split("").reverse().join("");

if(palavra == palavraInvertida){
    console.log("É palíndromo");
}else{
    console.log("Não é palíndromo");
}
console.log(palavra);
console.log(palavraInvertida);

let lista = ["fgde", 3, 'zzz', '456'];

lista.find(function(itematual){
    return typeof itematual === "number"
})

lista.find(function(itematual){
    return typeof itematual === "string" && itematual.startsWith("z");
})

function encontrarItemNoFind(itematual){
    return typeof itematual === "string" && itematual.startsWith("z");
}

lista.find(encontrarItemNoFind);

lista.filter(function(itematual){
    return typeof itematual === "string";
})

lista.map(function(itematual){
    return itematual;
})

lista.map(function(itematual){
    return itematual + "abc";
})

lista.map(function(itematual){
    if(typeof itematual === "string"){
        return itematual[0].toUpperCase() + itematual.slice(1);
    }
})

for(let i=0; i<lista.length; i++){
    console.log(lista[i]);
}

//cada item
for(let item of lista){
    console.log(item);
}

//indice de cada item
for(let item in lista){
    console.log(item);
}


const meuObjeto = {
    chave1: "abc",
    chave2: "xyz"
}

for(let indice in meuObjeto){
    console.log(meuObjeto[indice]);
}

document.body.innerHTML+= `<p>${typeof(50 % 2)} - ${50 % 2} </p>`;
document.body.innerHTML+= `<p>${typeof(50 % 2)} - ${50 % 2} </p>`;