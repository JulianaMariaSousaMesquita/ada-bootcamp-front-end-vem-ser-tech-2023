function lancarDados(numeroDados, numeroLados) {
  /*
   * Simula o lançamento de dados.
   *
   * Parâmetros:
   * - numeroDados: O número de dados a serem lançados.
   * - numeroLados: O número de lados de cada dado.
   *
   * Retorna:
   * Uma array com os resultados dos lançamentos.
   */
  const resultados = [];
  for (let i = 0; i < numeroDados; i++) {
      resultados.push(Math.floor(Math.random() * numeroLados) + 1);
  }
  return resultados;
}

const numeroDados = 2;
const numeroLados = 6;
const resultadosLancamento = lancarDados(numeroDados, numeroLados);
console.log(`Resultados do lançamento: ${resultadosLancamento}`);
