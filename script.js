async function getPokemonInfo() {
    try {
        let response = await fetch(`${link}${pokemon}`)
        let data = await response.json();
        console.log(data);
        let imgUrl = (data.sprites.versions["generation-v"]["black-white"].animated.front_default)
        sprite.setAttribute("src", imgUrl);
        return data;
    } catch(e) {
        console.log(e.message);
    }
}

const sprite = document.getElementById("pic");
const searchInput = document.getElementById("search");
const submitButton = document.getElementById("submit");
let pokemon = "milotic";
const link = "https://pokeapi.co/api/v2/pokemon/";

//if submit button pressed: 
submitButton.addEventListener("click", () => {
        searchInput.addEventListener("input", (poke) => {
            let value = poke.target.value
            if (value && value.trim().length > 0){
                 value = value.trim().toLowerCase()
                 pokemon = value;
                 getPokemonInfo();
            }
    });
 
        console.log(e);
    
});

    //add error

// });

getPokemonInfo();
