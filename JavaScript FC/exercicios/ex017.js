let bestPlaces = ["home", "beach", "nightclub"]

function generateSentence(desc, arr) {
    let arrayString = ""
    for (let i = 0; i < arr.length; i++) {
        arrayString += `${arr[i]}, `
    }
    console.log(`The ${arr.length} ${desc} are ${arrayString}`)
}

generateSentence("best places", bestPlaces)