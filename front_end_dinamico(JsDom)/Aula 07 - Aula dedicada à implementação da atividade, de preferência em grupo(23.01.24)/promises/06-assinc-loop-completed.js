
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
    const arrayCidades = ["Rio","São Paulo", "Porto Alegre"];

    const arrayPromisses = arrayCidades.map( async item => {
        const element = await updateValue(item);
        return document.body.appendChild(element);
    })



    Promise.all(arrayPromisses).then( (retorno)=>{
        console.log('terminaram todas as requisições: ', retorno )
    } )

   // const response = await  Promise.all(arrayPromisses);
   // console.log('terminaram todas as requisições')
}

init();












