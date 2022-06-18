const map = {
  A: "assets/A.svg",
  B: "assets/B.svg",
  C: "assets/C.svg",
  D: "assets/D.svg",
  E: "assets/E.svg",
  F: "assets/F.svg",
  G: "assets/G.svg",
  H: "assets/H.svg",
  I: "assets/I.svg",
  J: "assets/J.svg",
  K: "assets/K.svg",
  L: "assets/L.svg",
  M: "assets/M.svg",
  N: "assets/N.svg",
  O: "assets/O.svg",
  P: "assets/P.svg",
  Q: "assets/Q.svg",
  R: "assets/R.svg",
  S: "assets/S.svg",
  T: "assets/T.svg",
  U: "assets/U.svg",
  V: "assets/V.svg",
  W: "assets/W.svg",
  X: "assets/X.svg",
  Y: "assets/Y.svg",
  Z: "assets/Z.svg",
  0: "assets/0.svg",
  1: "assets/1.svg",
  2: "assets/2.svg",
  3: "assets/3.svg",
  4: "assets/4.svg",
  5: "assets/5.svg",
  6: "assets/6.svg",
  7: "assets/7.svg",
  8: "assets/8.svg",
  9: "assets/9.svg",
  ".": "assets/dot.svg",
  "-": "assets/dash.svg",
  "(": "assets/paren_L.svg",
  ")": "assets/paren_R.svg",
  "+": "assets/plus.svg",
  "=": "assets/equal.svg",
  "*": "assets/asterisk.svg",
  "!": "assets/bang.svg",
  "?": "assets/question.svg",
};

const textarea = document.querySelector("#textarea");
const target = document.querySelector("#target");
textarea.addEventListener('input', updateValues);

function updateValues(e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9 \-+\n=*!?)(\.]/, "");

  target.innerText = "";
  if (e.target.value.length > 20) {
    document.querySelector('#target').classList.add("smaller");
  }
  else {
    document.querySelector('#target').classList.remove("smaller");
  }
  [...e.target.value].forEach((ea, i) => {
    //manage spaces
    if (ea === " ") {
      target.insertAdjacentHTML("beforeend", `<div class="spacer"></div>`);
    }
    //manage newline
    if (ea === "\n"){
      target.insertAdjacentHTML("beforeend", `<br>`);
    }
    //manage characters
    if (map[ea.toUpperCase()]) {
      const path = `<img src="${map[ea.toUpperCase()]}" alt="${ea}">`;
      target.insertAdjacentHTML("beforeend", path);
    }
  });
};

