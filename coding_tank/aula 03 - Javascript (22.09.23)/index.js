// @ts-nocheck



var dez = 10;
dez = 20;

var vinte = 20;

const quarenta = 40;



if(1) {
    let cinquenta;
    if(1) {
        let trinta = 30;
        cinquenta = 50;
    }

}

let numero = 80938406983;
let numero2 = -27989.2355798;
let numeromax = 9007199254740991;
let numeromaior = 90071992547409919875982735872983;
let numeromaior2 = -90071992547409919875982735872983n;
let string = "79475.10";
let string2 = 'meu valor é ' + numero2;
let string3 = `meu valor é ${numero2}`;
let nulo = null;
let indefinido = undefined;
let booleano = false;
let meunan = NaN;
let infinito = Infinity;
let infinito2 = -Infinity;
let inf = 1/0;
let symbol = Symbol("identificar uma vaca");
let symbol2 = Symbol("identificar uma vaca");

let n1 = 10;
let n2 = 20;
let n3 = 30;

let r1 = n1 > n2;
let r2 = n1 > n3;

false
null
undefined
0
0n
""
NaN

let minhachave = "abc";

let v1 = [1,2,3,4,8, "wjgpwiegj", null, undefined, 235n];

let o1 = {
    [symbol]: 50,
    chave1: 10,
    chave2: "abc",
    chave3: "xyz"
}

// = += -= /= *= **= %=
// + - / * ** % ++ --
// == === != !== < <= > >=
// ?
// && || ?? !

let meuvalor = 2;
if(meuvalor === 3) {

} else if (meuvalor === 2) {

} else {

}

let s = "";

switch(meuvalor) {
    case 1: case 2: {
        s += "caso 12"
        
    }
    case 3: {
        s += "caso 3"
        break;
    }
    case 4: {
        s += "caso 4"
        break;
    }
    default: {
        s += "5"
        break;
    }
}

switch(true) {
    case meuvalor > 2: {

    }
}

let r = soma(soma(meuvalor, n2), 5)

function soma(parametro1, parametro2) {
    if(parametro1 === 5) {
        return soma(10, parametro2)
    }
    return parametro1 + parametro2;
}

let abc = 0;

s = "";

while(abc++ < 10) {
    
    if(abc === 5) {
        continue;
    }
    s += String(abc);
}



document.body.innerText = s;



document.body.innerHTML+= `<p>${typeof(50 % 2)} - ${50 % 2} </p>`;
document.body.innerHTML+= `<p>${typeof(50 % 2)} - ${50 % 2} </p>`;