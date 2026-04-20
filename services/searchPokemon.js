export function searchPokemonwithID() {

    if (id == 0) {
        return url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`       
    }
    else {
        return url = `https://pokeapi.co/api/v2/pokemon/${id}?limit=${limit}&offset=${offset}`
    }
}