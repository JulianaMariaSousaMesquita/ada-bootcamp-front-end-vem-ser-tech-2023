let result;

result = document.body;
result = document.querySelector("#tabela1");
result = document.querySelector(".borda");
result = document.querySelector("[target='_blank']");
result = document.querySelector("h1").innerText ;
result = document.querySelector("h1").textContent ;
result = document.getElementById("tabela1");

document.querySelector("h1").innerText = 'Novo Título!';

const idade = 30;

document.getElementById("tabela1").innerHTML += `
                                                <tr>
                                                    <th>Nome Dinâmica</th>
                                                    <th>${idade}</th>
                                                </tr>
                                                `

function criarConteudo(elemStr){
    const elemP = document.createElement(elemStr);
    elemP.innerText = "texto dinamico";
    
    return elemP;
}

result =  criarConteudo('div');
result = criarConteudo('h1');
result = criarConteudo('p');

const elmentPai = document.body;

elmentPai.appendChild(result);



console.log('result: ', result);