// variable pokemonRepository contains Array, objects, functions getAll-add-addListItem-showDetails and the return
// for pokemon informations.
var pokemonRepository = (function () {
  // the repository has Arrays that within these Arrays are (objects) names, heights, types that we have specified.
  var repository = [
    {
      name: 'Pikachu ',
      height: 0.4 ,
      types: ['electric']
    }, 
    {
      name: 'Torterra ',
      height: 2.2 ,
      types: ['grass', 'ground']
    },
     {
      name: 'Ninetales ',
      height: 1.1 ,
      types: ['fire']
    }, 
    {
      name: 'Metalgross ',
      height: 1.6 ,
      types: ['psychic', 'steel']
    }, 
    {
      name: 'Pidove ',
      height: 0.3 ,
      types: ['flying']
    } 
  ];

  // function add  specifically adds whatever is outside the code to access it.
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
    repository.push(pokemon);
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
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
      
    });
  }
  // in here we created a function in order to see the details of each pokemon.
  // created a console.log in order to see it working properly.
  // added an alert to see the height and the type of pokemon as informations of a specific pokemon.
  function showDetails(item) {
    console.log(item);
    alert(item.height + item.types);
  }
  //function return with the keys add and getAll what we have defined and ask it specificaly, in this case names etc...
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
  
// in this case we added some names and informations to the pokemonRepository 
// and it's connected with the line 34 to 39, also we checked it inside the console if it works.
  console.log(pokemonRepository.getAll()); // []
  pokemonRepository.add({ name: 'Squirtle ', height: 0.6 , types: ['water'] });
  pokemonRepository.add({ name: 'MewTwo ', height: 2.2 , types: ['psychic'] });
  console.log(pokemonRepository.getAll());
  
  
   // created a forEach loop
  pokemonRepository.getAll().forEach(function(item) {
     // we created a variable size here with an argument and asked to show which one was big and which small.
    var size;
    if (item.height > 1) {
      size = "Wow, that is a big Pokemon";
    } else {
      size = "It is a small Pokemon";
    }
    
    // the variable results was created to show the color and type of each pokemon.
    var result;
    item.types.forEach(function(typeItem) {
      if (typeItem == 'electric') {
        result = '<span style="color:yellow;"> ';
      } else if (typeItem == 'ground') {
        result = '<span style="color:rgb(0, 100, 0);"> ';
      } else if (typeItem == 'fire') {
        result = '<span style="color:darkred;"> ';
      } else if (typeItem == 'psychic') {
        result = '<span style="color:yellow;"> ';
      } else if (typeItem == 'steel') {
        result = '<span style="color:rgb(75, 0, 130);"> ';
      } else if (typeItem == 'flying') {
        result = '<span style="color:sandybrown;"> ';
      } else if (typeItem == 'water') {
        result = '<span style="color:blue;"> ';
      }
    });

    pokemonRepository.addListItem(item);
    
  });
  