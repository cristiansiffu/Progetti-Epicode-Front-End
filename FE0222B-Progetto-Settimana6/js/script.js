const searchImg = [
  "./img/amare.png",
  "./img/amare1.png",
  "./img/arrabbiato.png",
  "./img/bello.png",
  "./img/piangere.png",
  "./img/ridere.png",
  "./img/shock.png",
  "./img/spavento.png"
];

let box = "";
let selectedImg = "";
let count = 0;
let imgFound = 0;
const boxImg = "#box-img";

function randomImg(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

function shuffle() {
  let images = $(boxImg).children();
  let currentImg = $(boxImg + " div:first-child");
  let arrayImg = [];

  for (let i = 0; i < images.length; i++) {
    arrayImg[i] = $("#" + currentImg.attr("id") + " img").attr("src");
    currentImg = currentImg.next();
  }

  currentImg = $(boxImg + " div:first-child");

  for (let n = 0; n < images.length; n++) {
    let numRandom = randomImg(0, arrayImg.length - 1);

    $("#" + currentImg.attr("id") + " img").attr("src", arrayImg[numRandom]);
    arrayImg.splice(numRandom, 1);
    currentImg = currentImg.next();
  }
}

function openImg() {
  let id = $(this).attr("id");

  if ($("#" + id + " img").is(":hidden")) {
    $(boxImg + " div").unbind("click", openImg);

    $("#" + id + " img").fadeIn('fast');

    if (selectedImg == "") {
      box = id;
      selectedImg = $("#" + id + " img").attr("src");
      setTimeout(function () {
        $(boxImg + " div").bind("click", openImg)
      }, 500);
    } else {
      openedImg = $("#" + id + " img").attr("src");
      if (selectedImg != openedImg) {
        setTimeout(function () {
          $("#" + id + " img").fadeOut('fast');
          $("#" + box + " img").fadeOut('fast');
          box = "";
          selectedImg = "";
        }, 500);
      } else {
        $("#" + id + " img").parent().css({
          opacity: "1",
          animation: "rotazione 1s infinite linear",
          animationFillMode: "forwards"
        });
        $("#" + box + " img").parent().css({
          opacity: "1",
          animation: "rotazione 1s infinite linear",
          animationFillMode: "forwards"
        });
        imgFound++;
        box = "";
        selectedImg = "";
      }
      setTimeout(function () {
        $(boxImg + " div").bind("click", openImg)
      }, 500);
    }
    count++;
    $("#count").html("" + count);

    if (imgFound == searchImg.length) {
      $("#count").prepend('<span id="success">Partita completata con: </span>');
      $(boxImg + " div").css({
        opacity: "1",
        animation: "rotazione-inversa 0.5s infinite linear",
        animationFillMode: "backwards"
      });

    }
  }
}

$(() => {
  for (let m = 1; m < 3; m++) {
    $.each(searchImg, function (i, val) {
      $(boxImg).append("<div id=card" + m + i + "><img src=" + val + " />");
    });
  }
  $(boxImg + " div").click(openImg);
  shuffle();
});

function restart() {
  shuffle();
  $(boxImg + " div img").hide();
  $(boxImg + " div").css({
    visibility: "visible",
    animation: "none"
  });
  count = 0;
  $("#success").remove();
  $("#count").html("" + count);
  box = "";
  selectedImg = "";
  imgFound = 0;
  return false;
};