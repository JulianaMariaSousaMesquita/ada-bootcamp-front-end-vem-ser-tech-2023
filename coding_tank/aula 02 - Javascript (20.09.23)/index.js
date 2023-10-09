//Boolean
var a = true;
var b = false;
 
//Number
var c = 10;
var d = 11.5;
 
//String
var e = "teste";
 
//Undefined
var f;
var g = undefined;
 
//function
var a = function(){};
var b = () => {};
 
//object
var c = {};
var d = []; //array
var e = null;

let numero = 123456789;
let numero2 = 1234.56789;
let numero3 = 12_345_678_989;
let numeromax = 9007199254740991999; //9007199254740991 - valor maximo permitido
let numeromax2 = 9007199254740991999n;
let numeromaior = 1651652326542165151651515165155151533n;
let string = "4585695";
let string2 = '4582623';
let string3 = `dsdasd : ${string}`;
let string4 = "148562\"5.10a";
let string5 = "148562\\5.10a";
let nulo = null;
let indefinido = undefined;
let meunan =  NaN;
let booleano = false;
let infinito = Infinity;
let infinitoNegativo = -Infinity;
let resposta = prompt("sim ou não?");
let symbol = Symbol("abc");

document.body.innerHTML += `<h1>Adicionando dados com javascript no HTML - Tipos de dados</h1>`;
document.body.innerHTML += `<p>${typeof(numeromax)} - ${numeromax}</p>`;
document.body.innerHTML += `<p>${typeof(numeromax2)} - ${numeromax2}</p>`;
document.body.innerHTML+= `<p>${BigInt(numeromax) + numeromaior} </p>`;
document.body.innerHTML+= `<p>${numeromax + Number(numeromaior)} </p>`;
document.body.innerHTML+= `<p>${typeof(numero)} - ${numero.toString()} </p>`;
document.body.innerHTML+= `<p>${typeof(string4)} - ${string4} </p>`;
document.body.innerHTML+= `<p>${typeof(string5)} - ${string5} </p>`;
document.body.innerHTML+= `<p>${typeof(numeromax)} - ${numeromax} </p>`;
document.body.innerHTML+= `<p>${typeof(numeromaior)} - ${numeromaior} </p>`;
document.body.innerHTML+= `<p>${typeof(booleano)} - ${booleano} </p>`;
document.body.innerHTML+= `<p>${typeof(infinito)} - ${infinito} </p>`;
document.body.innerHTML+= `<p>${typeof(infinitoNegativo)} - ${infinitoNegativo} </p>`;
document.body.innerHTML+= `<p>${typeof(resposta)} - ${resposta} </p>`;

document.body.innerHTML += `<h1>Adicionando dados com javascript no HTML - Funções nativas da linguagem</h1>`;
console.log('console.log: Olá mundo!');
console.error('console.error: Ops, não era para acontecer isso');
console.warn('console.warn: Alguma coisa não está me cheirando bem. Mas, tudo ainda funciona.')
console.table(['Azul', 'Vermelho', 'Verde']);

let numero4 = parseFloat('1.2');
let numero5 = parseInt('1');
let novoTexto = 'Olá mundo!'.replace('!', "@");
let novoTexto2 = 'Olá, '.concat('novo aluno! ').concat('Tudo bem com você?');
'Olá mundo!'.includes('Olá') // -> true
'Olá mundo!'.includes('olá') // -> false
Math.floor(1.4) // -> 1
Math.floor(1.98) // -> 1
Math.round(1.49) // -> 1
Math.round(1.5) // -> 2

document.body.innerHTML+= `<p>${typeof(numero4)} - ${numero4} </p>`;
document.body.innerHTML+= `<p>${typeof(numero5)} - ${numero5} </p>`;
document.body.innerHTML+= `<p>${typeof(novoTexto)} - ${novoTexto} </p>`;
document.body.innerHTML+= `<p>${typeof(novoTexto2)} - ${novoTexto2} </p>`;

const x = parseInt('10');
const y = parseFloat('10.5');
const z = Number('10');
const t = Number('10.5');

document.body.innerHTML+= `<p>${typeof(x)} - ${x} </p>`;
document.body.innerHTML+= `<p>${typeof(y)} - ${y} </p>`;
document.body.innerHTML+= `<p>${typeof(z)} - ${z} </p>`;
document.body.innerHTML+= `<p>${typeof(t)} - ${t} </p>`;


