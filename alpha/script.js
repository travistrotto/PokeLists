const pokemonList = [
    "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Eevee", "Jigglypuff", "Snorlax", "Mewtwo"
];
const listContainer = document.getElementById("listContainer");
const pokemonListElement = document.getElementById("pokemonList");

// Create an object to keep track of the contents of each list
const lists = {};

// Populate the Pokemon list
for (let i = 0; i < pokemonList.length; i++) {
    const pokemonName = pokemonList[i];
    const listItem = document.createElement("li");
    listItem.textContent = pokemonName;
    pokemonListElement.appendChild(listItem);

    // Add click event listener to each list item
    listItem.addEventListener("click", () => {
        const selectedPokemon = listItem.textContent;
        const selectedList = document.querySelector(".selected");

        if (selectedList) {
            selectedList.classList.remove("selected");
        }

        // Add selected class to clicked list item
        listItem.classList.add("selected");

        // Get the ID of the active list
        const activeListId = document.querySelector(".active").id;

        // Add the selected Pokemon to the active list in the lists object
        if (!lists[activeListId]) {
            lists[activeListId] = [];
        }
        lists[activeListId].push(selectedPokemon);
    });
}

// Function to create a new list
function createList() {
    const listNameInput = document.getElementById("listNameInput");
    const listName = listNameInput.value;

    if (listName) {
        // Create a new list element and append it to the list container
        const newList = document.createElement("ul");
        newList.classList.add("pokemon-list", "active");
        newList.id = "list" + Object.keys(lists).length; // Set a unique ID for the new list
        listContainer.appendChild(newList);

        // Create a new list item with the list name and append it to the sidebar
        const newListItem = document.createElement("li");
        newListItem.textContent = listName;
        listContainer.appendChild(newListItem);

        // Add click event listener to the new list item
        newListItem.addEventListener("click", () => {
            const selectedList = document.querySelector(".active");
            if (selectedList) {
                selectedList.classList.remove("active");
            }

            newList.classList.add("active");

            // Clear the currently active list
            selectedList.innerHTML = "";
        });

        // Clear the input field
        listNameInput.value = "";

        // Add the new list to the lists object
        lists[newList.id] = [];
    }
}

// Function to create a new list item with the given Pokemon name
function createListItem(pokemonName) {
    const listItem = document.createElement("li");
    listItem.textContent = pokemonName;
    return listItem;
}
