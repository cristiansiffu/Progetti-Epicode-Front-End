const arrayIcone = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
let arrayComparison = [];

let interval;
let iconsFind = document.getElementsByClassName("find");
let icon = document.getElementsByClassName("icon");
let icons = [...icon];
let modal = document.getElementById("modal");
let timer = document.querySelector(".timer");

document.body.onload = startGame();

function shuffle(a) {
  var currentIndex = a.length;
  var temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = a[currentIndex];
    a[currentIndex] = a[randomIndex];
    a[randomIndex] = temporaryValue;
  }
  return a;
}

function startGame() {
  clearInterval(interval);
  arrayConfronto = [];

  var arrayShuffle = shuffle(arrayIcone);

  var lista = document.getElementById("griglia");
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }

  for (var i = 0; i < 16; i++) {
    var box = document.createElement("div");
    var element = document.createElement("div");
    element.className = "icon";
    document.getElementById("griglia").appendChild(box).appendChild(element);
    element.innerHTML = arrayShuffle[i];
  }

  startTimer();

  icon;
  icons = [...icon];

  for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", displayIcon);
    icons[i].addEventListener("click", openModal);
  }
}


function displayIcon() {
  icon;
  icons = [...icon];

  this.classList.toggle("show");
  arrayComparison.push(this);

  var len = arrayComparison.length;
  if (len === 2) {
    if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
      arrayComparison[0].classList.add("find", "disabled");
      arrayComparison[1].classList.add("find", "disabled");
      arrayComparison = [];
    } else {
      icons.forEach(function (item) {
        item.classList.add("disabled");
      });
      setTimeout(function () {
        arrayComparison[0].classList.remove("show");
        arrayComparison[1].classList.remove("show");
        icons.forEach(function (item) {
          item.classList.remove("disabled");
          for (var i = 0; i < iconsFind.length; i++) {
            iconsFind[i].classList.add("disabled");
          }
        });
        arrayComparison = [];
      }, 700);
    }
  }
}


function openModal() {
  if (iconsFind.length == 16) {
    clearInterval(interval);
    modal.classList.add("active");
    document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
  }
}

function playAgain() {
  modal.style.display = "none";
  startGame();
}

function startTimer() {

  var s = 0; var m = 0; var h = 0;

  interval = setInterval(function () {
    timer.innerHTML = "Tempo: " + (h > 9 ? h : "0" + h) + ":" + (m > 9 ? m : "0" + m) + ":" + (s > 9 ? s : "0" + s);
    s++;
    if (s == 60) {
      m++;
      s = 0;
    }
    if (m == 60) {
      h++;
      m = 0;
    }
  }, 1000);
}


