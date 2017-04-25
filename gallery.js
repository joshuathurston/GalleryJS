var chico = ["Mall", "Bidwell Park", "Chico state", "Bidwell Mansion", "Gateway Science Museum"];
var current;

function shuffleGallery()
{
  var randomIndex;
  do
  {
    randomIndex = Math.floor(Math.random() * chico.length);
  }while(randomIndex == current);
  current = randomIndex;
  console.log(chico[current]);
}
