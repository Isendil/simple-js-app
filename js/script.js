var pokemonRepository = (function () {
  var repository = [
    {
      name: 'Pikachu',
      height: 0.4,
      types: ['electric']
    }, 
    {
      name: 'Torterra',
      height: 2.2,
      types: ['grass', 'ground']
    },
     {
      name: 'Ninetales',
      height: 1.1,
      types: ['fire']
    }, 
    {
      name: 'Metalgross',
      height: 1.6,
      types: ['psychic', 'steel']
    }, 
    {
      name: 'Pidove',
      height: 0.3,
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
  return {
    add: add,
    getAll: getAll
  };
})();
  
  console.log(pokemonRepository.getAll()); // []
  pokemonRepository.add({ name: 'Squirtle', height: 0.6, types: ['water'] });
  console.log(pokemonRepository.getAll());
  
  // seeing everything inside the console.
  // console.dir(document);
  
  
    
   /* Here is our loop 
  for (var i = 0; i < repository.length; i++) {
    var size;
    if (repository[i].height > 1) {
    size = "Wow, that is a big Pokemon";
  } else {
    size = "It is a small Pokemon";
  } */
  
  // for each loop

  var repository = pokemonRepository.getAll();
  console.log('reps',repository)
  repository.forEach(function(pokemon) {
   
    var size;
    if (pokemon.height > 1) {
      size = "Wow, that is a big Pokemon";
    } else {
      size = "It is a small Pokemon";
    }
    
    var result;
    pokemon.types.forEach(function(item) {
      if (item == 'electric') {
        result = '<span style="color:yellow;"> ';
      } else if (item == 'ground') {
        result = '<span style="color:rgb(0, 100, 0);"> ';
      } else if (item == 'fire') {
        result = '<span style="color:darkred;"> ';
      } else if (item == 'psychic') {
        result = '<span style="color:yellow;"> ';
      } else if (item == 'steel') {
        result = '<span style="color:rgb(75, 0, 130);"> ';
      } else if (item == 'flying') {
        result = '<span style="color:sandybrown;"> ';
      } else if (item == 'water') {
        result = '<span style="color:blue;"> ';
      }
    });

  /* Here we ask we write what we want to see on our browser */
    document.write(
      '<div class="box">' +
      pokemon.name +
      "(height: " +
      pokemon.height +
      "m" +
      ")" +
      "<br>" +
      size +
      result +
      "<br>" +
      pokemon.types +
      "<br>" +
      "</div>"
    );
    console.log(size, result)
  });
  