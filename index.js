let response = axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
response.then((response)=>{
    console.log(response.data); 
    displayPokemon(response);
})
.catch((error)=>{
    console.log(error);
})

function displayPokemon(response){
    let parentDiv = document.getElementById('mainDiv');
    parentDiv.innerHTML = "";

    let pokemon = document.createElement('h1');
    pokemon.innerHTML = response.data.name;
    parentDiv.appendChild(pokemon);
}