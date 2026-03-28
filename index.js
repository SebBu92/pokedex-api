const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'

fetch(BASE_URL)
.then(response => {
    return response.json();
})
.then(pokemon => {
    const pic = document.querySelector(".picture")
    pic.setAttribute("src", pokemon.sprites.front_default)

    const name = document.querySelector(".name")
    name.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const id = document.querySelector(".id")
    id.innerText = "Nr. " + pokemon.id

    for (let type of pokemon.types) {
        const typesElement = document.createElement("p")
        typesElement.classList.add("types")
        typesElement.innerText = type.type.name[0].toUpperCase() + type.type.name.slice(1);
        document.querySelector(".types-container").appendChild(typesElement);
}   
})

.catch(error => console.log(error))




// Pokémon-Array durchgehen
// Für jeden Typ ein <span> erzeugen
// Text setzen → Typname
// Klasse setzen → Typname
// CSS regelt Farbe, Abstand, Größe


for (let type of pokemon.types) {
    const typesElement = document.createElement("p")
    typesElement.classList.add("types")
    typesElement.innerText = type.type.name[0].toUpperCase() + type.type.name.slice(1);
    document.querySelector(".types-container").appendChild(typesElement);
}