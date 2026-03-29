const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/squirtle'

async function getPokemon(BASE_URL) {
    try {
        const response = await fetch(BASE_URL)
        const pokemon = await response.json()

        const pic = document.querySelector(".picture")
        pic.setAttribute("src", pokemon.sprites.front_default)

        const id = document.querySelector(".id")
        id.textContent = (`Nr. ${pokemon.id}`)

        const speciesResponse = await fetch(pokemon.species.url)
        const species = await speciesResponse.json()
        const germanName = species.names.find(german => german.language.name === "de")
        const name = document.querySelector(".name")
        name.textContent = germanName.name[0].toUpperCase() + germanName.name.slice(1);

        // const name = document.querySelector(".name")
        // name.textContent = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

        for (const type of pokemon.types) {
            let typesElement = document.createElement("p")
            typesElement.classList.add(type.type.name)
            typesElement.textContent = type.type.name[0].toUpperCase() + type.type.name.slice(1);
            document.querySelector(".types-container").append(typesElement)
        }

    } catch(error){
        console.log(error);
    }
}

getPokemon(BASE_URL)


/*
1. BASE_URL so https://pokeapi.co/api/v2/pokemon verwenden um kein spezifisches Pokemon vorab zu wählen. Dann kann ich alle Pokemon laden, der Reihe nach.
2. Limit auf 10 Stück festlegen und über Button (in HTML definieren) weiter 10 Stück laden können.
 */
