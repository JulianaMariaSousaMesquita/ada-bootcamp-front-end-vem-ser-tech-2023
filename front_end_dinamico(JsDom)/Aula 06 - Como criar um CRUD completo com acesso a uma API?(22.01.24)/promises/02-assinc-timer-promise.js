
//fetch().then((response)=>{    })


const updateValue = (text) => {
    const elementP = document.createElement('p');

    const promise = new Promise(  (resolve,reject) => {
        setTimeout( ()=>{
            if(text === ''){
                reject('Está vazio!');
            }else{
                elementP.innerHTML += text + ' ';
                resolve(elementP);
            }
        } , 2000  ); 
    });

    return promise;
}

updateValue('').then( (response)=>{
    console.log('response: ', response)
    document.body.appendChild(response);
} );


console.log('linha de código posterior')