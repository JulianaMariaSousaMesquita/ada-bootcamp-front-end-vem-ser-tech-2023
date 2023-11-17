// 4. Criando estrutura de números
// Crie laços de repetição para retornar a seguinte estrutura de numeros:
// ```jsx
// 12345
// 1234
// 123
// 12
// 1
// ```

for (var i = 5; i >= 1; i--) {
    var linha = "";
  for (var j = 1; j <= i; j++) {
    linha += j;
  }
  console.log(linha);
}
