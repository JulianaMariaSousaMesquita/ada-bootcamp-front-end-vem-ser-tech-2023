function calcularFatorial(n) {
    console.log(n);
    if (n === 0) {
      return 1;
    }
    return n * calcularFatorial(n - 1);
  }
  
  const resultado = calcularFatorial(5);
  console.log(resultado);