import { fetchPokemonList } from "../api/pokemonApi.js";
import { renderPokemonList } from "../ui/renderPokemon.js";
import { buildUrl } from "./urlBuilder.js";

export async function loadPokemonList() {
    const url = buildUrl();

    const pokemon = await fetchPokemonList(url);
    renderPokemonList(pokemon);
}

export function loadMorePokemon() {
    const loadMorePokemon = document.getElementById("loadPokemon");
    loadMorePokemon.addEventListener("click", loadPokemonList);
}