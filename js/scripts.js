
var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // function add  specifically adds whatever is outside the code to access it.
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log('add and object');
    }
  }
  // function that can get what is written outside the IIFE code and access it.
  function getAll() {
    return repository;
  }
  // created a new function and connected with the index.html, created variables and inside new elements with li and button
  // and after we connected the text inside the button to be the names of each pokemon. created a classList and connected
  // with css to style it. after we created the button and put an order in the list, an event click with function event
  // was created and inside we defined a parameter so when we click it the pokemon informations to be shown.
  function addListItem(pokemon = {}) {
    var pokemonList = document.querySelector(".pokemon-list");
    var $listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("my-class");
    $listItem.appendChild(button);
    pokemonList.appendChild($listItem);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);

    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      // console.log(item)
    });
  }
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  //function return with the keys add and getAll what we have defined and ask it specificaly, in this case names etc...
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList()
  .then(function () {
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
