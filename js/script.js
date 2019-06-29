var repository = [
  {
    name: 'Pikachu',
    height: 0.4,
    types: ['Electric']
  }, {
    name: 'Torterra',
    height: 2.2,
    types: ['Grass', 'Ground']
  }, {
    name: 'Ninetales',
    height: 1.1,
    types: ['Fire']
  }, {
    name: 'Metalgross',
    height: 1.6,
    types: ['Psychic', 'Steel']
  }, {
    name: 'Pidove',
    height: 0.3,
    types: ['Flying']
  } ];
  
  for (var i = 0; i < repository.length; i++) {
    var size;
    if (repository[i].height > 1) {
    size = "Wow, that is a big Pokemon";
  } else {
    size = "It is a small Pokemon";
  }
  document.write(
    '<div class="box">' +
    repository[i].name +
    "(height: " +
    repository[i].height + "m" + ")" +
    '<br>'
    size +
    result +
    '<br>' + 
    repository[i].types +
    '<br>' +
    '</div>'
    );
  }