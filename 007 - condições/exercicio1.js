function showHours() {
    const d = new Date()
    var h = d.getHours()
    var m = d.getMinutes()
    var hora = (`${h}:${m}`)
    var hourContainer = document.getElementbyId('hora')

    if (h >= 6 && h < 12) {
        hourContainer.innerHTML =+ 'É nois'
    }
}