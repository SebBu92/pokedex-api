export async function searchPokemonwithID(value) {

    if (value == "") {
        const  url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`       
        
        const pokemon = await fetchPokemonList(url);
        renderPokemonList(pokemon);
    }
    else {
        const url = `https://pokeapi.co/api/v2/pokemon/${value}`

        const pokemon = await fetchPokemonList(url);
        renderPokemonList(pokemon);
    }
}

    // const form = document.getElementById("searchPokemon");

    // form.addEventListener("submit", function(event) {
    //     event.preventDefault(); // verhindert den reload der Seite

    //     return document.querySelector(".inputForSearch").value;
    // });

    
/* 
Ich möchte prüfen ob eine Eingabe erfolgt ist.
Wenn ja: url ohne limit und offset dafür mit eingabewert aufbauen
wenn nein: url mit limit und offset aufbauen
*/