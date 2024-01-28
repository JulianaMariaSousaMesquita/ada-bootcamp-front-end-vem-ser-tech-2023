
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

    /* arrayCidades.forEach( async (item)=>{
       const element = await updateValue(item);
       document.body.appendChild(element)
    })
    */
    for (const cidade of arrayCidades) {
       const element = await updateValue(cidade);
       document.body.appendChild(element)
    }
}

init();












function mostrarErro(){
    document.body.innerHTML = '<p> Aconteceu um erro! </p>'
}
function mostrarCorreto(texto){
    document.body.innerHTML = `<p> ${texto} </p>`
}