//var chico = ["Mall", "Bidwell Park", "Chico state", "Bidwell Mansion", "Gateway Science Museum"];
var current;
var chico = [
  {description: "Mall",
   picture: "http://www.centennialrec.com/images/made/a7a5d8042b20c99d/Chico_Mall_234_582_388_c1.jpg",
   from: "centennialrec.com"
  },
  {description: "Bidwell Park",
   picture: "http://www.csuchico.edu/our-region/about-town/images/bidwell1.jpg",
   from: "csuchico.edu"
  },
  {description: "Bidwell Mansion",
   picture: "http://www.csuchico.edu/our-region/about-town/images/bidwell.jpg",
   from: "csuchico.edu"
  },
  {description: "Gateway Science Museum",
   picture: "http://www.csuchico.edu/gateway/_assets/images/rotating-interior/augers.jpg",
   from: "csuchico.edu"
  }
];

function shuffleGallery()
{
  var randomIndex;
  do
  {
    randomIndex = Math.floor(Math.random() * chico.length);
  }while(randomIndex == current);
  current = randomIndex;
  document.getElementById("picture").src = chico[current].picture;
  document.getElementById("caption").innerHTML = chico[current].description;
  document.getElementById("source").innerHTML = "image courtesy of: " + chico[current].from;
}
