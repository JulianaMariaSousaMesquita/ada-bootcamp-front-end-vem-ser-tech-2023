
async function resquest(){
   const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
   const body = await response.json();

   //console.log("body: ", body)

   const pokemonName = body.results[0].name;
   const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
   const body2 = await response2.json();

}

resquest();


