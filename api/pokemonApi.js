export async function fetchPokemonList(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Fehler: ${response.status}`)
        }
        
        const pokemonList = await response.json();

        const singlePokemon = pokemonList.results
            .map(pokemon => fetch(pokemon.url)
            .then(result => result.json())
            );
        
        return Promise.all(singlePokemon);
    }
    catch(error){
        console.log(error);
    }
}

export async function fetchGermanName(speciesUrl) {
    const response = await fetch(speciesUrl);
    const species = await response.json();
    
    const german = species.names.find(languages => languages.language.name === "de");
    return german.name;
}