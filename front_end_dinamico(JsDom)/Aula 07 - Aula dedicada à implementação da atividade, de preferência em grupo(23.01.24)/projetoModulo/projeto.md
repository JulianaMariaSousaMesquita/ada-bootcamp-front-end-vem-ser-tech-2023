Enunciado do projeto prático

Objetivo

O objetivo desta atividade é desenvolver uma calculadora chamada "Churrascômetro" que tem o intuito de calcular os itens para um churrasco. A página deve funcionar em 3 passos, sendo que cada passo pode ser uma tela montada dinamicamente dentro do mesmo arquivo HTML ou simplesmente os componentes sendo atualizados dinamicamente.

Requisitos

1. O primeiro passo deve exibir 4 campos para digitar "nome, e-mail e CEP além de checkbox de consentimento com o texto "aceito receber e-mails com promoções".
  - Os campos "nome", "e-mail" e CEP devem ser obrigatórios;
  - O campo "e-mail" deve conter um e-mail válido;
  - O checkbox deve ser carregado marcado automaticamente;
  - Caso algum campo esteja inválido, deve haver uma indicação visual na tela;
  - Uma vez que o usuário já tenha preenchido estes campos, não devemos solicitá-los novamente após a página ser recarregada.

2. O passo seguinte deve conter 3 ou 4 campos para indicar a quantidade de pessoas entre (homens, mulheres/adultos, crianças e pessoas que bebem bebidas alcoólicas).
  - Os campos devem permitir somente inteiros não negativos;

3. O terceiro passo deve exibir uma tabela com o resultado do cálculo com a quantidade indicada para cada um dos itens. Os itens são: carne, cerveja, sal grosso, refrigerante, água, carvão, gelo e pão de alho.
  - Tabela de referência(sugestão)
  - Carne
    - 0,4 KG por homem;
    - 0,32 KG por mulher;
    - 0,20 KG por criança;
  - Pão de alho
    - 2 por adulto;
    - 1 por criança;
  - Carvão
    - 1 KG por pessoa;
  - Sal
    - 0,04 KG por pessoa;
  - Gelo
    - 5KG a cada 10 pessoas;
  - Refrigerante
    - 1 garrafa de 2L a cada 5 pessoas;
  - Água
    - 1 garrafa de 1L a cada 5 pessoas;
  - Cerveja
    - 3 garrafas de 600ml por pessoa (adultos)

Critérios

1. A calculadora deve funcionar corretamente e atender aos requisitos especificados;
2. O código deve fazer uso de seletores e métodos para manipulação do DOM;
3. O código deve fazer uso de adição e remoção de classes e estilização através do Javascript;
4. O código deve fazer uso de eventos ligados aos elementos da página;
5. O código deve fazer uso de armazenamento no browser (Web Storage API);
6. O código deve fazer uso de chamadas assíncronas e seus derivados.