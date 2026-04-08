const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

async function getPokemon(BASE_URL) {
    try {
        const response = await fetch(BASE_URL);
        const pokemonData = await response.json();

        const singleResponse = pokemonData.results
            .map(pokemon => fetch(pokemon.url)
            .then(pokemonResults => pokemonResults.json())
        );

        const pokemonDetails = await Promise.all(singleResponse)

        const container = document.getElementById("pokedex");
        
        for (const pokemon of pokemonDetails) {
            const tmpl = document
                .getElementById("pokecard_template")
                .content.cloneNode(true);

            tmpl.querySelector(".pokemonPicture").setAttribute("src", pokemon.sprites.front_default)
            tmpl.querySelector(".pokemonID").textContent = (`Nr. ${pokemon.id}`)
            
            const speciesResponse = await fetch(pokemon.species.url);
            const species = await speciesResponse.json();
            const germanName = species.names.find(german => german.language.name === "de");
            tmpl.querySelector(".pokemonName").textContent = germanName.name[0].toUpperCase() + germanName.name.slice(1);

            for (const type of pokemon.types) {
                const typeElement = document.createElement("p")
                typeElement.classList.add(type.type.name)
                typeElement.textContent = type.type.name[0].toUpperCase() + type.type.name.slice(1)
                tmpl.querySelector(".types-container").appendChild(typeElement)
            };

            container.appendChild(tmpl)
        };

    } catch(error){
        console.log(error);
    }
}

getPokemon(BASE_URL)