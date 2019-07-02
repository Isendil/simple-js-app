/* here goes the var, arrays, objects with strings inside them */
var repository = [
  {
    name: 'Pikachu',
    height: 0.4,
    types: ['electric']
  }, {
    name: 'Torterra',
    height: 2.2,
    types: ['grass', 'ground']
  }, {
    name: 'Ninetales',
    height: 1.1,
    types: ['fire']
  }, {
    name: 'Metalgross',
    height: 1.6,
    types: ['psychic', 'steel']
  }, {
    name: 'Pidove',
    height: 0.3,
    types: ['flying']
  } ];
   console.log(repository)
  
   var pokemonRepository = (function () {
    var repository = []; 
  
    return {
      add: function(pokemon) {
        repository.push(pokemon);
      },
      getAll: function() {
        return repository;
      }
    };
  })();
  
  console.log(pokemonRepository.getAll()); // []
  pokemonRepository.add({ name: 'Pikachu' });
  console.log(pokemonRepository.getAll());
  
   /* Here is our loop */
   var $container = document.querySelectorAll('.pokemon-list');
   var button = document.createElement('button');
   button.innerText = repository.name;
   $container.appendChild(button);
   repository.forEach(function(pokemon, index) {
    var pokemon = pokemon
    })
  
  var result;
  for (var j = 0; j < repository[i].types.length; j++) {
    if (repository[i].types[j] == 'electric') {
      result = '<span style="color:yellow;"> ';
    } else if (repository[i].types[j] == 'ground') {
      result = '<span style="color:rgb(0, 100, 0);"> ';
    } else if (repository[i].types[j] == 'fire') {
      result = '<span style="color:red;"> ';
    } else if (repository[i].types[j] == 'psychic') {
      result = '<span style="color:yellow;"> ';
    } else if (repository[i].types[j] == 'steel') {
      result = '<span style="color:rgb(199, 21, 133);"> ';
    } else if (repository[i].types[j] == 'flying') {
      result = '<span style="color:blue;"> ';
    }
  }
  
  
  
  
  /* Here we ask we write what we want to see on our browser */
  document.write(
    '<div class="box">' +
    repository[i].name +
    "(height: " +
    repository[i].height +
    "m" +
    ")" +
    "<br>" +
    size +
    result +
    "<br>" +
    repository[i].types +
    "<br>" +
    "</div>"
  );
  }