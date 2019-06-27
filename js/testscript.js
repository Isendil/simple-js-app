
var repository = [
  {
    name: 'Bullbasar',
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
    type: ['Water', 'Hydro'],
  },
];

/* checking on console if the names types and heights are working */
console.log(repository[2]);

document.write(repository);

/* for loop */
for (i = 0; i < repository[i].length; i++); {
  var pokemon = repository[i];
  if (repository[i] > 0.6) {
    document.write('<p>Wow he is the biggest pokemon </p>');
  }

if (repository[i] === 'Grass') {
  document.write('<span style="color:rgb(0, 100, 0);">' + repository.name + ',');
}
else if (repository[i] === 'Poison') {
  document.write('<span style="color:rgb(50, 205, 50);">' + repository[i] + ',');
}
else if (repository[i] === 'Fire') {
  document.write ('<span style="color:rgb(139, 0, 0);">' + repository[i] + ',');
}
else if (repository[i] === 'Burn') {
  document.write ('<span style="color:rgb(128, 0, 0);">' + repository[i] + ',');
}
else if (repository[i] === 'Water') {
  document.write ('<span style="color:rgb(0, 0, 128);">' + repository[i] + ',');
}
else if (repository[i] == 'Hydro') {
  document.write ('<span style="color:rgb(0, 0, 255);">' + repository[i] + ',');
}

document.write('<h2>>' + repository.name + '</h2>');
document.write('<p>Type: </p>');
document.write('<p>');
document.write('<br>');
}
