//PokeAPI Website: https://pokeapi.co/
//PokeAPI Docs: https://pokeapi.co/docs/v2
//Note bugs: 
//Giratina is stored as "giratina-altered" and does not work
async function getPokemonInfo() {
    try {
        let response = await fetch(`${link}${pokemon}`)
        let data = await response.json();
        console.log(data);
        let imgUrl = (data.sprites.front_default);
        sprite.setAttribute("src", imgUrl);
        pokemonLabel.innerHTML = `${pokemon}`.toUpperCase();
        errorText.innerText = "";
        return data;
    } catch(e) {
        console.log(e.message);
        errorText.innerText = "Please enter a valid Pokemon.";
    }
}

function clearSearch() {
    searchInput.value = "";
}

const sprite = document.getElementById("pic");
const searchInput = document.getElementById("search");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const errorText = document.getElementById("error");
const pokemonLabel = document.getElementById("pokemon-name");
let pokemon = "pikachu";
const link = "https://pokeapi.co/api/v2/pokemon/";

//Triggers submit button when "Enter" key pressed
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        submitButton.click();
    }
});
//When submit button triggered, reads the value in 
//search button and assigns it to pokemon variable,
//then calls PokeAPI 
submitButton.addEventListener("click", () => {
    try {
        let value = searchInput.value
        if (value && value.trim().length > 0){
                pokemon = value.trim().toLowerCase()
                getPokemonInfo();
        }
    } catch(e) {
        console.log(e);
    }
});

clearButton.addEventListener("click", () => {
    clearSearch();
});

getPokemonInfo();
