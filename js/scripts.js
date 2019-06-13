var repository = [
  ['Bullbasur', 0.7,
  ['Grass', 'Poison']],

  ['Charmander', 0.6,
  ['Fire', 'Burn'] ],

  ['Squirtle', 0.5,
  ['Water', 'Hydro pump']],
]

console.log(repository[1][0]);

// Loop for each item
for (var i = 0; i < repository.length; i++) {
  is (repository[i][1] > 1.1) {
    document.write ('<p class="top_article">Wow - he is the biggest Pokemon</p>');
  }
}

document.write ('<h3><a href="">' + repository[i][0] + '</a></h3>');

document.write ('<p class="p_poke">Types: ');
for (var j = 0; j < repository[i][2].length; j++) {
  if (repository[i][2][j] == 'Grass') {
    document.write (' <span class="p_poke";' + repository[i][2][j] + ',');
  }
  else if (repository[i][2][j] == 'Poison'){
    document.write (' <span class="p_poke";' + repository[i][2][j] + ',');
  }
  else if (repository[i][2][j] == 'Fire'){
    document.write (' <span class="p_poke";' + repository[i][2][j] + ',');
  }
  else if (repository[i][2][j] == 'Burn'){
    document.write (' <span class="p_poke";' + repository[i][2][j] + ',');
  }
  else if (repository[i][2][j] == 'Water'){
    document.write (' <span class="p_poke";' + repository[i][2][j] + ',');
  }
  else if (repository[i][2][j] == 'Hydro pump'){
    document.write (' <span class="p_poke";' + repository[i][2][j] + ',');
  }
}
document.write ('</p>');
