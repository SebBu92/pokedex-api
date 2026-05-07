import { loadPokemonList } from "./services/loadPokemon.js";
import { loadMorePokemon } from "./services/loadPokemon.js";

function init() {
    const form = document.getElementById("searchPokemon");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // verhindert den reload der Seite

        console.log(document.querySelector(".inputForSearch").value);
        console.log(typeof(document.querySelector(".inputForSearch").value));

    });
    loadPokemonList();
    loadMorePokemon();
}

init();

/* 
ToDo:
1. Suche nach ID implementieren
Über Enter und Search Button die Suche starten und Input Feld leeren.
Dann soll Suchergebnis angezeigt werden.
Über Pokem Laden button unten wieder die ersten 10 Pokemon laden

- Suche nach Name implementieren (Deutsche name eingeben zurück ins englische übersetzen)
- Random treffer implementieren Button und Funktion
- sotieren nach ID und Namen auf- und absteigend
*/