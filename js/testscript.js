var repository = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "dirt"]
  },
  {
    name: "Charmander",
    height: 1.1,
    types: ["fire"]
  },
  {
    name: "Squirtle",
    height: 0.5,
    types: ["water"]
  }
];




for (var i = 0; i < repository.length; i++) {
  var result;
  for (var j = 0; j < repository[i].types.length; j++) {
    if (repository[i].types[j] == "grass") {
      result = '<span style="color:green;"> ';
    } else if (repository[i].type[j]  == "fire") {
      result = '<span style="color:red;"> ';
    } else if (repository[i].type[j]  == "water") {
      result = '<span style="color:blue;"> ';
    }
  }

  var size;
  if (repository[i].height > 1) {
    size = "Wow, that is big!";
  } else {
    size = "Is a small";
  }

  document.write(
    '<div class = "box">' + repository[i].name + " " +
    "(Height: " + repository[i].height + "m" + ")" +
    "<br>" +
    repository[i].types +
    "<br>" +
    result +
    "<br>" +
    size +
    "</div>" +
    "<br>"
  );
}
