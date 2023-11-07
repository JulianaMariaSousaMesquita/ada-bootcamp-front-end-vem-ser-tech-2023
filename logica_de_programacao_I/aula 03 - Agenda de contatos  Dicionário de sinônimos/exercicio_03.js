// 3. Criando estrutura de números
// Crie laços de repetição para retornar a seguinte estrutura de numeros:
// ```jsx
// 1
// 12
// 123
// 1234
// 12345
// ```

for (var i = 0; i <= 5; i++) {
    var linha = "";
  for (var j = 1; j <= i; j++) {
    linha += j;
  }
  console.log(linha);
}


