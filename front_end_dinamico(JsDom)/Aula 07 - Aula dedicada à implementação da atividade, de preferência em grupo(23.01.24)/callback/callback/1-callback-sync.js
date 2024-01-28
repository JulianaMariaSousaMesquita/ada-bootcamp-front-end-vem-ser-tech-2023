const valdirBoss = (valor1, valor2, funcaoQueExecutara) => {
  const resultado = funcaoQueExecutara(valor1, valor2);
  console.log(resultado);
};

valdirBoss(7, 3, soma);

const soma = (numero1, numero2) => {
  return numero1 + numero2;
};
const subtracao = (numero1, numero2) => numero1 - numero2;
const multiplicacao = (numero1, numero2) => numero1 * numero2;
const divisao = (numero1, numero2) => numero1 / numero2;

const executaOperacao = (numero1, numero2, operacaoCallback) => {
  const resultado = operacaoCallback(numero1, numero2);
  return resultado;
};

const contatenar = (arg1, arg2, callback) => {
  return `${arg1}${arg2}`;
};

const resultadoDaSoma = executaOperacao(4, 2, contatenar); // 3

console.log({ resultadoDaSoma });
