// Função para validar o primeiro passo
function validateStep1() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const cepInput = document.getElementById('cep');

    // Validar campos
    if (!nameInput.checkValidity()) {
      nameInput.classList.add('invalid');
      return;
    }

    if (!emailInput.checkValidity()) {
      emailInput.classList.add('invalid');
      return;
    }

    if (!cepInput.checkValidity()) {
      cepInput.classList.add('invalid');
      return;
    }

    // Armazenar no Local Storage
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('cep', cepInput.value);

    // Passar para o próximo passo
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  }


// Função para calcular o preço de cada item
function calculateItemPrice(itemQty, itemPrice) {
    return itemQty * itemPrice;
}
    
// Função para calcular o preço total de todos os itens para o churrasco
function calculateTotalPrice(meatQty, garlicBreadQty, charcoalQty, saltQty, iceQty, sodaQty, waterQty, beerQty) {
    const meatPrice = calculateItemPrice(meatQty, 25);
    const garlicBreadPrice = calculateItemPrice(garlicBreadQty, 4);
    const charcoalPrice = calculateItemPrice(charcoalQty, 15);
    const saltPrice = calculateItemPrice(saltQty, 5);
    const icePrice = calculateItemPrice(iceQty, 7);
    const sodaPrice = calculateItemPrice(sodaQty, 15);
    const waterPrice = calculateItemPrice(waterQty, 5);
    const beerPrice = calculateItemPrice(beerQty, 8);
  
    return  meatPrice + garlicBreadPrice + charcoalPrice + saltPrice + icePrice + sodaPrice + waterPrice + beerPrice;
}
  
// Função para calcular quantidades de itens no churrasco
function calculateItems() {
    const menQty = parseInt(document.getElementById('men').value);
    const womenQty = parseInt(document.getElementById('women').value);
    const childrenQty = parseInt(document.getElementById('children').value);
    const drinkersQty = parseInt(document.getElementById('drinkers').value);

    // Cálculos
    const meatQty = 0.4 * menQty + 0.32 * womenQty + 0.2 * childrenQty;
    const garlicBreadQty = 2 * (menQty + womenQty) + childrenQty;
    const charcoalQty = menQty + womenQty + childrenQty;
    const saltQty = 0.04 * (menQty + womenQty + childrenQty);
    const iceQty = Math.ceil((menQty + womenQty + childrenQty) / 10) * 5;
    const sodaQty = Math.ceil((menQty + womenQty + childrenQty) / 5);
    const waterQty = Math.ceil((menQty + womenQty + childrenQty) / 5);
    const beerQty = 3 * drinkersQty;

    // Calcular total convidados
    const totalQty = menQty + womenQty + childrenQty;

    // Calcular preço de todos os itens
    const price = calculateTotalPrice(meatQty, garlicBreadQty, charcoalQty, saltQty, iceQty, sodaQty, waterQty, beerQty);

    // Prencher Resumo
    const summary = document.getElementById('summary');
    summary.innerHTML = `<p>Homens: ${menQty} - Mulheres: ${womenQty} - Crianças: ${childrenQty} </p>
    <p class="text-success">Total de convidados: ${totalQty}</p>`;

    // Preencher Tabela
    const table = document.getElementById('resultTable');
    table.innerHTML = `
      <tr><td>Carne:</td><td>${meatQty.toFixed(2)} KG</td></tr>
      <tr><td>Pão de Alho:</td><td>${garlicBreadQty}</td></tr>
      <tr><td>Carvão:</td><td>${charcoalQty} KG</td></tr>
      <tr><td>Sal:</td><td>${saltQty.toFixed(2)} KG</td></tr>
      <tr><td>Gelo:</td><td>${iceQty} KG</td></tr>
      <tr><td>Refrigerante:</td><td>${sodaQty} garrafas</td></tr>
      <tr><td>Água:</td><td>${waterQty} garrafas</td></tr>
      <tr><td>Cerveja:</td><td>${beerQty} garrafas</td></tr>
      <tr><td>Preço por pessoa:</td><td> R$ ${(price/totalQty).toFixed(2)} </td></tr>
      <tr><td>Preço total:</td><td> R$ ${price.toFixed(3)} </td></tr>
    `;    

    // Armazenar dados no Local Storage
    localStorage.setItem('meatQty', meatQty.toFixed(2));
    localStorage.setItem('garlicBreadQty', garlicBreadQty);
    localStorage.setItem('charcoalQty', charcoalQty);
    localStorage.setItem('saltQty', saltQty.toFixed(2));
    localStorage.setItem('iceQty', iceQty);
    localStorage.setItem('sodaQty', sodaQty);
    localStorage.setItem('waterQty', waterQty);
    localStorage.setItem('beerQty', beerQty);

    // Exibir o terceiro passo
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

// Função para voltar ao Step 1
function goBackToStep1() {
    // Esconder o Step 3
    document.getElementById('step3').style.display = 'none';
  
    // Limpar os dados armazenados
    localStorage.removeItem('meatQty');
    localStorage.removeItem('garlicBreadQty');
    localStorage.removeItem('charcoalQty');
    localStorage.removeItem('saltQty');
    localStorage.removeItem('iceQty');
    localStorage.removeItem('sodaQty');
    localStorage.removeItem('waterQty');
    localStorage.removeItem('beerQty');
  
    // Exibir o Step 1
    document.getElementById('step1').style.display = 'block';
 }