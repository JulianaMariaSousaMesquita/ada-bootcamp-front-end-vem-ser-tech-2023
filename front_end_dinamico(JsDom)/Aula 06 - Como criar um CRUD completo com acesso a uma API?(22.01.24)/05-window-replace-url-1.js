// http://127.0.0.1:5500/index.html?param1=teste

let result;

// pegar querys/searchs de uma URL
//result = window.location.search;

const urlSearchParams = new URLSearchParams(window.location.search);
result = urlSearchParams.get('param2');

urlSearchParams.set('param1','conteudoAtualizado');

const newURL = ` ${ window.location.origin}${window.location.pathname}?${urlSearchParams.toString()} `

function trocarURL(){
    console.log('timerFuncionou');
    window.location.replace(newURL);
}

setTimeout( trocarURL , 5000 )


console.log('result: ', newURL)