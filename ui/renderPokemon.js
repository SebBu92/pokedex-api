import { fetchGermanName } from "../api/pokemonApi.js";
import { textFormater } from "../utils/format.js";

export async function renderPokemonList(pokemonList) {
    const pokedexContainer = document.getElementById("pokedex");
        
    for (const pokemon of pokemonList) {
        const pokecardTemplate = document
            .getElementById("pokecard_template")
            .content.cloneNode(true);

        pokecardTemplate.querySelector(".pokemonPicture").setAttribute("src", pokemon.sprites.front_default);
        pokecardTemplate.querySelector(".pokemonID").textContent = (`Nr. ${pokemon.id}`);
        
        const germanNameForSpecies = await fetchGermanName(pokemon.species.url);
        pokecardTemplate.querySelector(".pokemonName").textContent = germanNameForSpecies;

        for (const type of pokemon.types) {
            const typeElement = document.createElement("p")
            typeElement.classList.add(type.type.name)
            typeElement.textContent = textFormater(type.type.name)
            pokecardTemplate.querySelector(".types-container").appendChild(typeElement)
        };

        pokedexContainer.appendChild(pokecardTemplate)
    };
}

function checkInputValue() {
    const form = document.getElementById("searchPokemon");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // verhindert den reload der Seite

        const inputValue = document.querySelector(".inputForSearch").value;

        if (inputValue === "") {
            console.log("Leer")
        }
        else {
            console.log("Eingabe:", inputValue);
        }

    });
}

checkInputValue();