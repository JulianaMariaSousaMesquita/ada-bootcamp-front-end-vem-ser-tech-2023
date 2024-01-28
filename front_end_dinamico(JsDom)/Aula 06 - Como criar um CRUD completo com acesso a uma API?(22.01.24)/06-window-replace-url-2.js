const url = new URL(window.location.href);
url.searchParams.set('param1', 'conteudoDiferente');



function trocarURL(){
    console.log('timerFuncionou');
    window.location.href = url.href;
}

setTimeout( trocarURL , 5000 )