
//fetch().then((response)=>{    })


const updateValue = (text) => {
    const elementP = document.createElement('p');

    const promise = new Promise(  (resolve,reject) => {
        setTimeout( ()=>{
            if(text === ''){
                reject('Está vazio!');
            }else{
                elementP.innerHTML += text;
                resolve(elementP);
            }
        } , 2000  ); 
    });

    return promise;
}


const cidade = prompt('digite o nome de uma cidade')
updateValue(cidade)
    .then( (response)=>{
        const conteudo = response.textContent;

        if(conteudo !== 'São Paulo')
            throw new Error('forçando erro');

        mostrarCorreto(conteudo);
    })
    .catch( (error) => {
        mostrarErro();
    });


function mostrarErro(){
    document.body.innerHTML = '<p> Aconteceu um erro! </p>'
}
function mostrarCorreto(texto){
    document.body.innerHTML = `<p> ${texto} </p>`
}