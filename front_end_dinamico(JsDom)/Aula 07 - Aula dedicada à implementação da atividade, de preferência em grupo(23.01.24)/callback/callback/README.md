# Callback

## Função First-class (first-class citizen)

Função First-class:

- funções são tratadas como qualquer outra variável;
- Função pode ser passada como argumento pra outras funções;
- Função pode ser retornada por outra função e pode ser atribuída como um valor à uma variável.

## Função Callback

Uma função `callback` é uma função passada a outra função como argumento,
que é então invocada dentro da função externa para completar algum tipo de rotina ou ação.

É usada em código `síncrono`, como por examplo em `Array.forEach` e `Array.map`.

É essencial para código `assíncrono`, como por exemplo em `setTimeout` e `XMLHttpRequest`.

## Synchronous vs Asynchronous Callback Functions

1. Synchronous Callbacks

- Exemplo simples
- forEach
- addEventListener

2. Asynchronous Callbacks

- setTimeout
- XMLHttpRequest

3. usando em setTimeout

4. example with getData

5. example of callback hell

6. promises (Murilo)

### referências

- https://developer.mozilla.org/pt-BR/docs/Glossary/First-class_Function
- https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function
