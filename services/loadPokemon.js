import { fetchPokemonList } from "../api/pokemonApi.js";
import { fetchSinglePokemon } from "../api/pokemonApi.js";
import { renderPokemonList } from "../ui/renderPokemon.js";

let offset = 0;
const limit = 12;

export async function loadPokemonList() {
    const inputValue = document.querySelector(".inputForSearch").value;

    if (inputValue == "") {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
        console.log(url)
        offset += limit;
        
        const pokemon = await fetchPokemonList(url);
        console.log(pokemon);
        renderPokemonList(pokemon);
    }
    else {
        // hier fehlt noch der event listener für die suche (wann soll es ausgeführt werden)
        const url = `https://pokeapi.co/api/v2/pokemon/6`;
        console.log(url)
        const pokemon = await fetchSinglePokemon(url);
        console.log(pokemon);
        renderPokemonList([pokemon]);
    }
}

export function loadMorePokemon() {
    const loadMorePokemon = document.getElementById("loadPokemon");
    loadMorePokemon.addEventListener("click", loadPokemonList);
}