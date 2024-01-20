// // Exemplo de implementação da Pokédex com async/await
// async function fetchPokemon(id) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const data = await response.json();
//     return data;
// }

// async function displayPokemonData(id) {
//     try {
//         const pokemon = await fetchPokemon(id);
//         const pokemonInfoElement = document.getElementById('pokemonInfo');

//         const pokemonCard = document.createElement('div');
//         pokemonCard.classList.add('pokemonCard');

//         const pokemonImage = document.createElement('img');
//         pokemonImage.classList.add('pokemonImage');
        
//         // Verifica se a imagem existe, se não, usa a imagem coringa.jpg
//         const imageUrl = `images/${pokemon.name.toLowerCase()}.jpg`;
//         pokemonImage.src = await imageExists(imageUrl) ? imageUrl : 'images/coringa.jpg';

//         const pokemonName = document.createElement('div');
//         pokemonName.classList.add('pokemonName');
//         pokemonName.textContent = `Nome: ${pokemon.name}`;

//         const pokemonType = document.createElement('div');
//         pokemonType.classList.add('pokemonType');
//         pokemonType.textContent = `Tipo: ${pokemon.types[0].type.name}`;

//         pokemonCard.appendChild(pokemonImage);
//         pokemonCard.appendChild(pokemonName);
//         pokemonCard.appendChild(pokemonType);

//         pokemonInfoElement.appendChild(pokemonCard);
//     } catch (error) {
//         console.error(`Erro ao recuperar dados do Pokémon: ${error.message}`);
//     }
// }

// // Função para verificar se a imagem existe
// async function imageExists(url) {
//     try {
//         const response = await fetch(url, { method: 'HEAD' });
//         return response.ok;
//     } catch (error) {
//         return false;
//     }
// }

// // Teste para exibir dados do Pokémon com ID 1 a 30
// for (let i = 1; i <= 30; i++) {
//     displayPokemonData(i);
// }

// Exemplo de implementação da Pokédex com async/await
async function fetchPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
}

async function displayPokemonData(id) {
    try {
        const pokemon = await fetchPokemon(id);
        const pokemonInfoElement = document.getElementById('pokemonInfo');

        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemonCard');

        const pokemonImage = document.createElement('img');
        pokemonImage.classList.add('pokemonImage');

        // Construir a URL da imagem usando o nome do Pokémon
        const imageUrl = `https://img.pokemondb.net/artwork/large/${pokemon.name.toLowerCase()}.jpg`;
        pokemonImage.src = imageUrl;

        const pokemonName = document.createElement('div');
        pokemonName.classList.add('pokemonName');
        pokemonName.textContent = `Nome: ${pokemon.name}`;

        const pokemonType = document.createElement('div');
        pokemonType.classList.add('pokemonType');
        pokemonType.textContent = `Tipo: ${pokemon.types[0].type.name}`;

        pokemonCard.appendChild(pokemonImage);
        pokemonCard.appendChild(pokemonName);
        pokemonCard.appendChild(pokemonType);

        pokemonInfoElement.appendChild(pokemonCard);
    } catch (error) {
        console.error(`Erro ao recuperar dados do Pokémon: ${error.message}`);
    }
}

// Teste para exibir dados do Pokémon com ID 1 a 100
for (let i = 1; i <= 100; i++) {
    displayPokemonData(i);
}
