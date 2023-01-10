        // guarda o número
        let numberOneInput = document.getElementById("number-el1")
        
        let numberTwoInput = document.getElementById("number-el2")
        
        let resultEl = document.getElementById("result")
        let addButton = document.getElementById("add-button")
        let subtractButton = document.getElementById("subtract-button")
        let multiplyButton = document.getElementById("multiply-button")
        let divideButton = document.getElementById("divide-button")

        function sum() {
                let numberOne = Number(numberOneInput.value)
                let numberTwo = Number(numberTwoInput.value)

                if (numberOne == 0 && numberTwo == 0) {
                    window.alert("Add at least one number to calculate")
                } else {
                let result = numberOne + numberTwo
                resultEl.innerHTML = `<p>The sum is ${result}`
                }
        }

        function subtract() {
            let numberOne = Number(numberOneInput.value)
            let numberTwo = Number(numberTwoInput.value)

            if (numberOne == 0 && numberTwo == 0) {
                window.alert("Add at least one number to calculate")
            } else {
            let result = numberOne - numberTwo
            resultEl.innerHTML = `<p>The sum is ${result}`
            }
        }

            function multiply() {
                let numberOne = Number(numberOneInput.value)
                let numberTwo = Number(numberTwoInput.value)
    
                if (numberOne == 0 && numberTwo == 0) {
                    window.alert("Add at least one number to calculate")
                } else {
                let result = numberOne * numberTwo
                resultEl.innerHTML = `<p>The sum is ${result}`
                }
            }

                function divide() {
                    let numberOne = Number(numberOneInput.value)
                    let numberTwo = Number(numberTwoInput.value)
        
                    if (numberOne == 0 && numberTwo == 0) {
                        window.alert("Add at least one number to calculate")
                    } else {
                    let result = numberOne / numberTwo
                    resultEl.innerHTML = `<p>The sum is ${result}`
                    }
                }
        
        addButton.addEventListener("click", sum)
        subtractButton.addEventListener("click", subtract);
        multiplyButton.addEventListener("click", multiply);
        divideButton.addEventListener("click", divide);

