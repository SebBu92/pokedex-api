export async function searchPokemonwithID(value) {
    inputValue = document.querySelector(".inputForSearch").value;
    
    if (inputValue == "") {
        const  url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`       
        
        const pokemon = await fetchPokemonList(url);
        renderPokemonList(pokemon);

        
    }
    else {
        const url = `https://pokeapi.co/api/v2/pokemon/${value}`

        const pokemon = await fetchPokemonList(url);
        renderPokemonList([pokemon]);
    }
}