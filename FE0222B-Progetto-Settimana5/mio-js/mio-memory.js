const section = document.querySelector("section");
const tentativiGiocatore = document.querySelector("span");


let numeroTentativi = 7;
tentativiGiocatore.textContent = numeroTentativi;
let interval;
let modale = document.getElementById("modale");
let timer = document.querySelector(".timer");

const prendiImmagini = () => [
  { cercaImmagini: "./img/anakin-skywalker.jpeg", name: "anakin-skywalker" },
  { cercaImmagini: "./img/darth-sidious.jpeg", name: "darth-sidious" },
  { cercaImmagini: "./img/darth-vader.jpeg", name: "darth-vader" },
  { cercaImmagini: "./img/lightsaber.jpeg", name: "lightsaber" },
  { cercaImmagini: "./img/mace-windu.jpeg", name: "mace-windu" },
  { cercaImmagini: "./img/obi-wan-kenobi.jpeg", name: "obi-wan-kenobi" },
  { cercaImmagini: "./img/podracer.jpeg", name: "podracer" },
  { cercaImmagini: "./img/r2-d2.jpeg", name: "r2-d2" },
  { cercaImmagini: "./img/starfighter.jpeg", name: "starfighter" },
  { cercaImmagini: "./img/yoda.jpeg", name: "yoda" },
  { cercaImmagini: "./img/anakin-skywalker.jpeg", name: "anakin-skywalker" },
  { cercaImmagini: "./img/darth-sidious.jpeg", name: "darth-sidious" },
  { cercaImmagini: "./img/darth-vader.jpeg", name: "darth-vader" },
  { cercaImmagini: "./img/lightsaber.jpeg", name: "lightsaber" },
  { cercaImmagini: "./img/mace-windu.jpeg", name: "mace-windu" },
  { cercaImmagini: "./img/obi-wan-kenobi.jpeg", name: "obi-wan-kenobi" },
  { cercaImmagini: "./img/podracer.jpeg", name: "podracer" },
  { cercaImmagini: "./img/r2-d2.jpeg", name: "r2-d2" },
  { cercaImmagini: "./img/starfighter.jpeg", name: "starfighter" },
  { cercaImmagini: "./img/yoda.jpeg", name: "yoda" }
];

const random = () => {
  const datiImmagini = prendiImmagini();
  datiImmagini.sort(() => Math.floor(Math.random()-0.5));
  console.log(datiImmagini);
  return datiImmagini;
};
const generaCarte = () => {
  const datiImmagini = random()

  datiImmagini.forEach((item) => {
    const carta = document.createElement("div");
    const fronte = document.createElement("img");
    const retro = document.createElement("div");

    carta.classList = "carta";
    fronte.classList = "fronte";
    retro.classList = "retro";

    fronte.src = item.cercaImmagini;
    carta.setAttribute("name", item.name)

    section.appendChild(carta);
    carta.appendChild(fronte);
    carta.appendChild(retro);

    carta.addEventListener("click", (e) => {
      carta.classList.toggle("attivaCarta");
      controllaCarta(e);
    })
  });
};

const controllaCarta = (e) => {
  const carteCliccate = e.target;
  carteCliccate.classList.add("girata");
  const carteGirate = document.querySelectorAll(".girata");
  const attivaCarta = document.querySelectorAll(".attivaCarta");

  if (carteGirate.length === 2) {
    if (carteGirate[0].getAttribute("name") === carteGirate[1].getAttribute("name")) {
      console.log("Corrisponde");
      carteGirate.forEach((carta) => {
        carta.classList.remove("girata");
        carta.style.pointerEvents = "none";
      });
    }
    else {
      console.log("Non corrisponde");
      carteGirate.forEach((carta) => {
        carta.classList.remove("girata");
        setTimeout(() => carta.classList.remove("attivaCarta"), 1500);
      });
      numeroTentativi--;
      tentativiGiocatore.textContent = numeroTentativi;
      if (numeroTentativi === 0) {
        sconfitta();
      }
    }
    if (attivaCarta.length === 20) {
      vittoria();
    }
  }
};

const inizioPartita = (avviso) => {
  clearInterval(interval);
  startTimer();
  avviso = "Inizia la partita";
  let datiImmagini = random();
  let facce = document.querySelectorAll(".fronte");
  let carte = document.querySelectorAll(".carta");
  section.style.pointerEvents = "none";
  datiImmagini.forEach((item, index) => {
    carte[index].classList.remove("attivaCarta");
    setTimeout(() => {
      carte[index].style.pointerEvents = "all";
      facce[index].src = item.cercaImmagini;
      carte[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1500);
    numeroTentativi = 7;
    tentativiGiocatore.textContent = numeroTentativi;
    setTimeout(() => console.log(avviso), 500);
  });
};

startTimer();
generaCarte();



function vittoria() {
  clearInterval(interval);
  modale.style.display = "flex";
  document.getElementById("finePartita").textContent = "Congratulazioni!";
  document.getElementById("ricompensa").textContent = "Hai vinto una Spada-Laser!!!";
  document.getElementById("premio").innerHTML = "<img src='img/spada-laser.png' style='height: 300px; width: 300px;'>";
  document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
}
function sconfitta() {
  clearInterval(interval);
  modale.style.display = "flex";
  document.getElementById("finePartita").textContent = "Hai perso...";
  document.getElementById("ricompensa").textContent = "Ecco il tuo premio di consolazione:";
  document.getElementById("premio").innerHTML = "<img src='img/sfigato.jpeg' style='height: 300px; width: 300px;'>";
  document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
}

function giocaAncora() {
  modale.style.display = "none";
  inizioPartita();
}

function startTimer() {

  var s = 0; var m = 0; var h = 0;

  interval = setInterval(function () {
    timer.innerHTML = "Tempo: " + (h > 9 ? h : '0' + h) + ':' + (m > 9 ? m : '0' + m) + ':' + (s > 9 ? s : '0' + s);
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
