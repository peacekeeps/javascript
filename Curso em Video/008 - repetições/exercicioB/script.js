function calc() {
    let baseValueIp = document.getElementById('ip_valor')
    let baseValue = Number(baseValueIp.value)

    if (baseValueIp.value.length == 0) {
        alert('Digite um valor.')
    } else {
        let times = 0
        divResult = document.getElementById('div_result')

        divResult.innerHTML = ''

        // while (times <= 10) {
        //     divResult.innerHTML += `<option>${baseValue} X ${times} = ${baseValue * times}</option>`
        //     times += 1
        // }

        while (times <= 10) {
            let item = document.createElement('option')
            item.text = `${baseValue} X ${times} = ${baseValue*times}`
            item.value = `opt${times}`
            divResult.appendChild(item)
            times++
        }
    }
}
