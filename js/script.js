var pokemonRepository = (function () {
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

  function getAll() {
    return repository;
  }
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
  function showDetails(item) {
    console.log(item);
    alert(item.height + item.types);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
  
  console.log(pokemonRepository.getAll()); // []
  pokemonRepository.add({ name: 'Squirtle ', height: 0.6 , types: ['water'] });
  pokemonRepository.add({ name: 'MewTwo ', height: 2.2 , types: ['psychic'] });
  console.log(pokemonRepository.getAll());
  
  
   
  pokemonRepository.getAll().forEach(function(item) {
    var size;
    if (item.height > 1) {
      size = "Wow, that is a big Pokemon";
    } else {
      size = "It is a small Pokemon";
    }
    
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
  