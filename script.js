$(function () {
  let shuffledArray = arrKever();
  for (let index = 0; index < 10; index++) {
    $("#bevitelPan").append(
      `<button id="${index}">${shuffledArray[index]}</button>`
    );
    $("#bevitelPan").children("button:last-child").on("click", KATT);
  }

    $("#ujra").on("click", ujra);
    $("#fejlec").on('mousedown',function (){$("#ablak").draggable()});
    $("#fejlec").on('mouseup',
    function (){
        $("#ablak").draggable("destroy")
        /* $("#fejlec").on('mousedown',function (){$("#ablak").draggable()}); */
    })
});
function KATT(event) {
  const valami = new Audio("kliksound.wav");
  valami.play();
  let elem = event.target;
  let gomb = $(`#${elem.id}`);
  let adat = $("#pinkod").val();
  if (adat.length < 4) {
    adat += gomb.text();
    $("#pinkod").val(adat);
  }
  if (adat.length === 4) {
    for (let index = 0; index < 10; index++) {
      let btn = $(`#${index}`);
      btn.off("click", KATT);
      btn.prop("disabled", true);
    }
  }
}
function ujra() {
  let ertek = $("#pinkod").val();
  if (ertek.length === 4) {
    for (let index = 0; index < 10; index++) {
      let btn = $(`#${index}`);
      btn.on("click", KATT);
      btn.prop("disabled", false);
    }
  }
  $("#pinkod").val("");
  let arr = arrKever();
  for (let index = 0; index < arr.length; index++) {
    $(`#${index}`).text("" + arr[index]);
  }
}
function arrKever() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return array.sort((a, b) => 0.5 - Math.random());
}


