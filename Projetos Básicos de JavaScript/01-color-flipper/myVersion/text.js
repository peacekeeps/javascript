const colorsHex = {
    "red": "#ff0000",
    "blue": "#0000ff",
    "white": "#ffffff",
    "black": "#000000",
    "pink": "#ffc0cb",
    "grey": "#808080",
    "brown": "#a52a2a" 
}

const colors = ["red", "blue", "white", "black", "pink", "grey", "brown"];

const text= "red"

    if (colorsHex.hasOwnProperty(text)) {
        console.log(colorsHex[text])
    }
