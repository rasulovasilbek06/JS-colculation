
    var properti = {
  gosh: 0,
  guruch: 0,
  sabzi: 0,
  piyoz: 0,
  piyoz: 0,
  pamidor: 0,
  kartoshka: 0,
  yog: 0,
};

var osh = {
  yog: 200,
  piyoz: 300,
  gosh: 500,
  sabzi: 300,
  guruch: 1500,
};
var shorva = {
  yog: 200,
  gosh: 1000,
  sabzi: 400,
  piyoz: 200,
  kartoshka: 700,
};
var bosma = {
  yog: 500,
  gosh: 5000,
  piyoz: 300,
  sabzi: 200,
  kartoshka: 4000,
};
// Osh uchun hisob kitob.
function ovqatPishirildiosh(ovqat) {
  yog = osh.yog * 5;
  piyoz = osh.piyoz * 5;
  gosh = osh.gosh * 5;
  sabzi = osh.sabzi * 5;
  guruch = osh.guruch * 5;
  console.log(
    "OSH uchun bir haftada: " + yog + "ml " + "YOG'",
    ", " + piyoz + "g " + "PIYOZ",
    "," + gosh + "g " + "GOSH",
    "," + sabzi + "g " + "SABZI" + " ,",
    guruch + "g" + " GURUCH" + " Sarflanadi..."
  );
}
// Sho'rva uchun hisob kitob.
function ovqatPishirildishorva(ovqat) {
  yog = shorva.yog * 5;
  piyoz = shorva.piyoz * 5;
  gosh = shorva.gosh * 5;
  sabzi = shorva.sabzi * 5;
  guruch = shorva.guruch * 5;
  console.log(
    "SHO'RVA uchun bir haftada: " + yog + "ml " + "YOG'",
    ", " + piyoz + "g " + "PIYOZ",
    "," + gosh + "g " + "GOSH",
    "," + sabzi + "g " + "SABZI" + " Sarflanadi..."
  );
}
// Bosma uchun hisob kitob.

function ovqatPishirildibosma(ovqat) {
  yog = bosma.yog * 5;
  piyoz = bosma.piyoz * 5;
  gosh = bosma.gosh * 5;
  sabzi = bosma.sabzi * 5;
  guruch = bosma.guruch * 5;
  console.log(
    "Dimlama uchun bir haftada: " + yog + "ml " + "YOG'",
    ", " + piyoz + "g " + "PIYOZ",
    "," + gosh + "g " + "GOSH",
    "," + sabzi + "g " + "SABZI" + " Sarflanadi..."
  );
}

ovqatPishirildiosh(osh);
ovqatPishirildishorva(shorva);
ovqatPishirildibosma(bosma);
