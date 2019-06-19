var pokemonRepository = (function ()){
  var repository = [
    {
      name: 'Bulbasaur',
      height: 0.5,
      type: ['Grass', 'Poison'],
    },
    {
      name: 'Charmander',
      height: 0.6,
      type: ['Fire', 'Burn'],
    },
    {
      name: 'Squirtle',
      height: 0.7,
      Type: ['Water', 'hydro pump'],
    },
  ];
}
console.log (repository[1][0]);


/* forEach function */
var names = ['Bullbasur', 'Chrmander', 'Squirtle'];

function loopBlockFunction(currentName){
  console.log(currentName);
}
names.forEach(loopBlockFunction);



for (var i = 0; i < repository.length; i++) {
  if (repository[i][1] > 1.9) {
    document.write ('<p class="top_article">Wow - he is biggest Pokemon</p>');
  }

  document.write ('<H2><a href="">' + repository[i][0] + '</a></H2>');

  document.write ('<p class="p__small">Types: ');
  for (var j = 0; j < repository[i][2].length; j++) {
    if (repository[i][2][j] == 'Grass') {
      document.write (' <span class="p__small" style="color:rgb(0, 100, 0);">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'Poison') {
      document.write (' <span class="p__small" style="color:rgb(50, 205, 50);">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'Fire') {
      document.write (' <span class="p__small" style="color:rgb(139, 0, 0);">' + repository[i][2][j] + ',');
    }
    else if (repository[i][2][j] == 'Burn') {
      document.write (' <span class="p__small" style="color:rgb(128, 0, 0);">' + repository[i][2][j] + ',');
    }

    else if (repository[i][2][j] == 'Water') {
      document.write (' <span class="p__small" style="color:rgb(0, 0, 128);">' + repository[i][2][j] + ',');
    }

    else if (repository[i][2][j] == 'hydro pump') {
      document.write (' <span class="p__small" style="color:rgb(0, 0, 255);">' + repository[i][2][j] + ',');
    }

  }
  document.write ('</p>');
  document.write ('<BR><BR>');
}

  var pokemonRepository = (function () {
  var repository = [];

  function add(pokemon) {
    repository.push(pokemon);

}
function getAll() {
		return repository;
	}
  return{
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({'Squirtle'});
console.log(pokemonRepository.getAll());
