/* here goes the var, arrays, objects with strings inside them */
var pokemonRepository = (function () {
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
    }];
  console.log(repository)

  function add(pokemon) {
    repository.push(pokemon);
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
  // pokemonRepository.add({ name: 'Pikachu' });
  console.log(pokemonRepository.getAll());




  /* Here is our loop 
 for (var i = 0; i < repository.length; i++) {
   var size;
   if (repository[i].height > 1) {
   size = "Wow, that is a big Pokemon";
 } else {
   size = "It is a small Pokemon";
 }
 */

  // for each loop
  var repository = pokemonRepository.getAll();
  console.log('reps', repository)
  repository.forEach(function (pokemon, i) {

    var size;
    if (pokemon.height > 1) {
      size = "Wow, that is a big Pokemon";
    } else {
      size = "It is a small Pokemon";
    }

    var result;
    for (var j = 0; j < pokemon.types.length; j++) {
      if (repository[i].types[j] == 'electric') {
        result = '<span style="color:yellow;"> ';
      } else if (repository[i].types[j] == 'ground') {
        result = '<span style="color:rgb(0, 100, 0);"> ';
      } else if (repository[i].types[j] == 'fire') {
        result = '<span style="color:darkred;"> ';
      } else if (repository[i].types[j] == 'psychic') {
        result = '<span style="color:yellow;"> ';
      } else if (repository[i].types[j] == 'steel') {
        result = '<span style="color:rgb(128, 0, 128);"> ';
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
    console.log(size, result)
  });
