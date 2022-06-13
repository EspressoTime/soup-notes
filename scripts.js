const map = {
  A: "assets/A.jpeg",
  B: "assets/B.jpeg",
  C: "assets/C.jpeg",
  D: "assets/D.jpeg",
  E: "assets/E.jpeg",
  F: "assets/F.jpeg",
  G: "assets/G.jpeg",
  H: "assets/H.jpeg",
  I: "assets/I.jpeg",
  J: "assets/J.jpeg",
  K: "assets/K.jpeg",
  L: "assets/L.jpeg",
  M: "assets/M.jpeg",
  N: "assets/N.jpeg",
  O: "assets/O.jpeg",
  P: "assets/P.jpeg",
  Q: "assets/Q.jpeg",
  R: "assets/R.jpeg",
  S: "assets/S.jpeg",
  T: "assets/T.jpeg",
  U: "assets/U.jpeg",
  V: "assets/V.jpeg",
  W: "assets/W.jpeg",
  X: "assets/X.jpeg",
  Y: "assets/Y.jpeg",
  Z: "assets/Z.jpeg",
  0: "assets/0.jpeg",
  1: "assets/1.jpeg",
  2: "assets/2.jpeg",
  3: "assets/3.jpeg",
  4: "assets/4.jpeg",
  5: "assets/5.jpeg",
  6: "assets/6.jpeg",
  7: "assets/7.jpeg",
  8: "assets/8.jpeg",
  9: "assets/9.jpeg",
  ".": "assets/dot.jpeg",
  "-": "assets/dash.jpeg",
  "(": "assets/paren_L.jpeg",
  ")": "assets/paren_R.jpeg",
  "+": "assets/plus.jpeg",
  "=": "assets/equal.jpeg",
  "*": "assets/asterisk.jpeg",
  "!": "assets/bang.jpeg",
  "?": "assets/question.jpeg",
};

const textarea = document.querySelector("#textarea");
const target = document.querySelector("#target");

textarea.onkeyup = function () {
  this.value = this.value.replace(/[^a-zA-Z0-9 \-+\n=*!?)(\.]/, "");

  target.innerText = "";
  if (this.value.length > 20) {
    document.querySelector('#target').classList.add("smaller");
  }
  else {
    document.querySelector('#target').classList.remove("smaller");
  }
  [...this.value].forEach((e, i) => {
    //manage spaces
    if (e === " ") {
      target.insertAdjacentHTML("beforeend", `<div class="spacer"></div>`);
    }
    //manage newline
    if (e === "\n"){
      target.insertAdjacentHTML("beforeend", `<br>`);
    }
    //manage characters
    if (map[e.toUpperCase()]) {
      const path = `<img src="${map[e.toUpperCase()]}" alt="${e}">`;
      target.insertAdjacentHTML("beforeend", path);
    }
  });
};

