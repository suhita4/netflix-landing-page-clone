var x = 1;
function showOrHide1() {
  if (x == 1) {
    document.getElementById("answer1").style.display = "flex";
    document.getElementById("plus1").style.transform = 'rotate(45deg)';

    return x = 0;
  }
  else {
    document.getElementById("answer1").style.display = "none";
    document.getElementById("plus1").style.transform = 'rotate(90deg)';

    return x = 1;
  }
}

function showOrHide2() {
  if (x == 1) {
    document.getElementById("answer2").style.display = "flex";
    document.getElementById("plus2").style.transform = 'rotate(45deg)';

    return x = 0;
  }
  else {
    document.getElementById("answer2").style.display = "none";
    document.getElementById("plus2").style.transform = 'rotate(90deg)';

    return x = 1;
  }
}

function showOrHide3() {
  if (x == 1) {
    document.getElementById("answer3").style.display = "flex";
    document.getElementById("plus3").style.transform = 'rotate(45deg)';

    return x = 0;
  }
  else {
    document.getElementById("answer3").style.display = "none";
    document.getElementById("plus3").style.transform = 'rotate(90deg)';

    return x = 1;
  }
}

function showOrHide4() {
  if (x == 1) {
    document.getElementById("answer4").style.display = "flex";
    document.getElementById("plus4").style.transform = 'rotate(45deg)';

    return x = 0;
  }
  else {
    document.getElementById("answer4").style.display = "none";
    document.getElementById("plus4").style.transform = 'rotate(90deg)';

    return x = 1;
  }
}

function showOrHide5() {
  if (x == 1) {
    document.getElementById("answer5").style.display = "flex";
    document.getElementById("plus5").style.transform = 'rotate(45deg)';

    return x = 0;
  }
  else {
    document.getElementById("answer5").style.display = "none";
    document.getElementById("plus5").style.transform = 'rotate(90deg)';

    return x = 1;
  }
}

//browsepage

var a = 1;
function vidPlayback() {
  if (a == 1) {
    document.getElementById("overlay").style.display = "flex";

    return a = 0;
  }
  else {
    document.getElementById("overlay").style.display = "none";

    return a = 1;
  }
}

//Arrays

const cardText = [
  {'name': 'Fight Club', 
   'description': 'A disillusioned office worker finds an outlet for his pent-up feelings when he and mysterious new pal Tyler Durden start a violent underground society.'
  },
  {'name': 'The Prestige', 
   'description': 'Desperate to reveal each other\'s secrets, two rival magicians begin to perform increasingly risky tricks -- which soon turn deadly.'
  },
  {'name': 'The Social Network', 
   'description': 'Harvard sophomore Mark Zuckerberg pursues an idea that propels him to internet success, bringing in legal trouble and costing him friendships.'
  },
  {'name': 'The Revenant', 
   'description': 'In the 1820s, a fur trapper struggles for survival to exact retribution against a ruthless mercenary who left him to die along the Missouri River.'
  },
  {'name': 'The King\' Speech', 
   'description': 'The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.'
  },
  {'name': 'Nightcrawler', 
   'description': 'When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.'
  },
  {'name': 'The Silence of the Lambs', 
   'description': 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.'
  },
  {'name': 'Black Swan', 
   'description': 'A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky\'s "Swan Lake".'
  },
  {'name': 'Joker', 
   'description': 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.'
  },
  {'name': 'A Quiet Place', 
   'description': 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.'
  },
  {'name': 'Hotel Transylvania', 
   'description': 'Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count\'s teenaged daughter.'
  },
  {'name': 'Spirited Away', 
   'description': 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.'
  },
  {'name': 'Up', 
   'description': '78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.'
  },
  {'name': 'Frozen', 
   'description': 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.'
  },
  {'name': 'Despicable Me', 
   'description': 'When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.'
  },
  {'name': 'Shutter Island', 
   'description': 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.'
  },
  {'name': 'Seven', 
   'description': 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.'
  },
  {'name': 'Prisoners', 
   'description': 'When Keller Dover\'s daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.'
  },
  {'name': 'Zodiac', 
   'description': 'Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.'
  },
  {'name': 'Gone Girl', 
   'description': 'With his wife\'s disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it\'s suspected that he may not be innocent.'
  },
  {'name': 'La La Land', 
   'description': 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.'
  },
  {'name': 'Titanic', 
   'description': 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.'
  },
  {'name': 'A Star is Born', 
   'description': 'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.'
  },
  {'name': 'The Notebook', 
   'description': 'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.'
  },
  {'name': 'Blue Valentine', 
   'description': 'The relationship of a contemporary married couple, charting their evolution over a span of years by cross-cutting between time periods.'
  },
];

const bgImg = [
  "imgs/Movies/Drama/fight-club-large.jpg",
  "imgs/Movies/Drama/the-prestige-large.jpg",
  "imgs/Movies/Drama/the-social-network-large.jpg", 
  "imgs/Movies/Drama/the-revenant-large.jpg",
  "imgs/Movies/Drama/kings-speech-large.jpg",
  "imgs/Movies/Thriller/nighcrawler-large.jpg",
  "imgs/Movies/Thriller/lambs-large.jpg",
  "imgs/Movies/Thriller/black-swan-large.jpg",
  "imgs/Movies/Thriller/joker-large.jpg",
  "imgs/Movies/Thriller/a-quiet-place-large.jpg",
  "imgs/Movies/Children/translyvania-large.jpg",
  "imgs/Movies/Children/spiritedaway-large.jpg",
  "imgs/Movies/Children/up-large.jpg",
  "imgs/Movies/Children/frozen-large.jpg",
  "imgs/Movies/Children/despicable-me-large.jpg",
  "imgs/Movies/Suspense/shutter-large.jpg",
  "imgs/Movies/Suspense/seven-large.jpg",
  "imgs/Movies/Suspense/prisoners-large.jpg",
  "imgs/Movies/Suspense/zodiac-large.jpg",
  "imgs/Movies/Suspense/gone-girl-large.jpg",
  "imgs/Movies/Romance/la-la-land-large.jpg",
  "imgs/Movies/Romance/titanic-large.jpg",
  "imgs/Movies/Romance/a-star-is-born-large.jpg",
  "imgs/Movies/Romance/the-notebook-large.jpg",
  "imgs/Movies/Romance/blue-valentine-large.jpg"
]

function displayText1(number){
  document.querySelector('#name1').textContent = `${cardText[number].name}`;
  document.querySelector('#description1').textContent = `${cardText[number].description}`;
  document.querySelector('#movieCard1').style.backgroundImage = 'url(' + bgImg[number] + ')';
}

function displayText2(number){
  document.querySelector('#name2').textContent = `${cardText[number].name}`;
  document.querySelector('#description2').textContent = `${cardText[number].description}`;
  document.querySelector('#movieCard2').style.backgroundImage = 'url(' + bgImg[number] + ')';
}

function displayText3(number){
  document.querySelector('#name3').textContent = `${cardText[number].name}`;
  document.querySelector('#description3').textContent = `${cardText[number].description}`;
  document.querySelector('#movieCard3').style.backgroundImage = 'url(' + bgImg[number] + ')';
}

function displayText4(number){
  document.querySelector('#name4').textContent = `${cardText[number].name}`;
  document.querySelector('#description4').textContent = `${cardText[number].description}`;
  document.querySelector('#movieCard4').style.backgroundImage = 'url(' + bgImg[number] + ')';
}

function displayText5(number){
  document.querySelector('#name5').textContent = `${cardText[number].name}`;
  document.querySelector('#description5').textContent = `${cardText[number].description}`;
  document.querySelector('#movieCard5').style.backgroundImage = 'url(' + bgImg[number] + ')';
}

//Movie card

var b = 1;
function movieCard1() {
  if (b == 1) {
    document.getElementById("movieCard1").style.display = "flex";

    return b = 0;
  }
  else {
    document.getElementById("movieCard1").style.display = "none";

    return b = 1;
  }
}

var c = 1;
function movieCard2() {
  if (c == 1) {
    document.getElementById("movieCard2").style.display = "flex";

    return c = 0;
  }
  else {
    document.getElementById("movieCard2").style.display = "none";

    return c = 1;
  }
}

var d = 1;
function movieCard3() {
  if (d == 1) {
    document.getElementById("movieCard3").style.display = "flex";

    return d = 0;
  }
  else {
    document.getElementById("movieCard3").style.display = "none";

    return d = 1;
  }
}

var e = 1;
function movieCard4() {
  if (e == 1) {
    document.getElementById("movieCard4").style.display = "flex";

    return e = 0;
  }
  else {
    document.getElementById("movieCard4").style.display = "none";

    return e = 1;
  }
}

var f = 1;
function movieCard5() {
  if (f == 1) {
    document.getElementById("movieCard5").style.display = "flex";

    return f = 0;
  }
  else {
    document.getElementById("movieCard5").style.display = "none";

    return f = 1;
  }
}