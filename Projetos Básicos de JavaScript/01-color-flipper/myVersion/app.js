const colors = ["red", "blue", "white", "black", "pink", "grey", "brown"];

const colorsHex = {
  red: "#ff0000",
  blue: "#0000ff",
  white: "#ffffff",
  black: "#000000",
  pink: "#ffc0cb",
  grey: "#808080",
  brown: "#a52a2a",
};

const hexCode = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const identifier = document.getElementById("identifier");
const modeBtn = document.querySelector(".hex-btn");
const colorBtn = document.querySelector(".color-btn");
let hex = false;

const colorTxt = document.querySelector("#color-txt");
const bg = document.querySelector(".bg");
let activeColor = "white";

modeBtn.addEventListener("click", function () {
  if (modeBtn.classList.contains("hex-btn")) {
    document.title = "Color Flipper || Hex"
    modeBtn.textContent = "simple";
    identifier.textContent = "hex generator";
    modeBtn.classList.remove("hex-btn");
    modeBtn.classList.add("simple-btn");

    hex = true;
    let hexColor = colorMatch();
    console.log(hexColor);
    colorTxt.style.letterSpacing = "5px";
    colorTxt.textContent = hexColor;
    bg.style.backgroundColor = hexColor;

  } else {
    document.title = "Color Flipper || Simple"
    modeBtn.textContent = "hex";
    identifier.textContent = "simple generator";
    modeBtn.classList.remove("simple-btn");
    modeBtn.classList.add("hex-btn");

    hex = false;
    colorTxt.style.letterSpacing = "1px";

    if (colorsHex.hasOwnProperty(activeColor)) {
      colorTxt.textContent = activeColor;
      bg.style.backgroundColor = activeColor;
      activeColor = activeColor;
    } else {
      colorTxt.textContent = "white";
      bg.style.backgroundColor = "white";
      activeColor = "white";
    }

  }
});

colorBtn.addEventListener("click", function () {
  colorGenerator();
});

/*
===============
Functions
===============
*/
function colorMatch() {
  if (colorsHex.hasOwnProperty(activeColor)) {
    return colorsHex[activeColor];
  }
}

function colorGenerator() {
  if (!hex) {
    let random = Math.floor(Math.random() * colors.length);

    if (colors[random] === activeColor) {
      while (colors[random] === activeColor) {
        random = Math.floor(Math.random() * colors.length);
      }
    }

    console.log(random);
    colorTxt.textContent = colors[random];
    bg.style.backgroundColor = colors[random];
    activeColor = colors[random];
  } else {
    let randomHex = hexGenerator();

    while (randomHex === activeColor) {
      randomHex = hexGenerator();
    }

    colorTxt.textContent = randomHex;
    bg.style.backgroundColor = randomHex;
    activeColor = randomHex;
  }
}

function hexGenerator() {
  let x = "#";
  for (i = 0; i < 6; i++) {
    x += hexCode[Math.floor(Math.random() * hexCode.length)];
  }
  return x;
}
