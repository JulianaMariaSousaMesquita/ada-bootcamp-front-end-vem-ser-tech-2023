
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




async function init(){
    try {
        const element = await updateValue("São Paulo");

        throw new Error('errooo');
        document.body.appendChild(element);
        
    } catch (error) {
        document.body.innerHTML = `<p> Erro! </p>`
    }
}

init();
