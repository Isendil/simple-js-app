var repository = [
  {
    name: 'Bulbasaur',
    height: 0.5,
    type: ['Grass', 'Poison'],
  },
  {
    name: 'Charmander',
    height: 0.6,
    type: ['Fire', 'Burn']
  }
  {
    name: 'Squirtle',
    height: 0.7,
    Type: ['Water', 'hydro pump']
  }
];

console.log (repository[1][0]);

/* forEach function */
var names = ['Bullbasur', 'Chrmander', 'Squirtle']

for (var i = 0; i < repository.length; i++) {
  var pokemon = repository[i];
  if (pokemon.height > 1.9) {
    document.write ('<p class="top_article">Wow - he is biggest Pokemon</p>');
  }
}
 names.forEach(loopBlockFunction);

  document.write ('<H2><a href="">' + pokemon.height + '</a></H2>');

  document.write ('<p class="p__small">Types: ');
  for (var j = 0; j < repository.length; j++) {
    console.log (repository);
    if (repository == 'Grass') {
      document.write (' <span class="p__small" style="color:rgb(0, 100, 0);">' + repository[i][2][j] + ',');
    }
    else if (repository == 'Poison') {
      document.write (' <span class="p__small" style="color:rgb(50, 205, 50);">' + repository[i][2][j] + ',');
    }
    else if (repository == 'Fire') {
      document.write (' <span class="p__small" style="color:rgb(139, 0, 0);">' + repository[i][2][j] + ',');
    }
    else if (repository == 'Burn') {
      document.write (' <span class="p__small" style="color:rgb(128, 0, 0);">' + repository[i][2][j] + ',');
    }

    else if (repository == 'Water') {
      document.write (' <span class="p__small" style="color:rgb(0, 0, 128);">' + repository[i][2][j] + ',');
    }

    else (repository == 'hydro pump') {
      document.write (' <span class="p__small" style="color:rgb(0, 0, 255);">' + repository[i][2][j] + ',');
    }

  }
  document.write ('</p>');
  document.write ('<br>');
}
