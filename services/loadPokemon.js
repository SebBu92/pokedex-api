import { fetchPokemonList } from "../api/pokemonApi.js";
import { renderPokemonList } from "../ui/renderPokemon.js";
import { buildUrl } from "./urlBuilder.js";

let offset = 0;
const limit = 12;

export async function loadPokemonList() {
    // const url = buildUrl();

    const inputValue = document.querySelector(".inputForSearch").value;

    if (inputValue == "") {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
        console.log(url)
        offset += limit;
        
        const pokemon = await fetchPokemonList(url);
        renderPokemonList(pokemon);
    }
    else {
        const url = `https://pokeapi.co/api/v2/pokemon/6`;
        console.log(url)
        const pokemon = await fetchPokemonForSearch(url);
        console.log(pokemon);
        renderPokemonList([pokemon]);
    }


    // const pokemon = await fetchPokemonList(url);
    // renderPokemonList([pokemon]);
}

export function loadMorePokemon() {
    const loadMorePokemon = document.getElementById("loadPokemon");
    loadMorePokemon.addEventListener("click", loadPokemonList);
}