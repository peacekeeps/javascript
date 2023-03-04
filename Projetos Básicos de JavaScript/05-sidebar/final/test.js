// function rangeOfNumbers(startNum, endNum) {
//     if (startNum > endNum) {
//       return [];
//     } else {
//       const myArray = rangeOfNumbers(startNum + 1, endNum)
//       myArray.unshift(startNum)
//       return myArray
//     }
//   }

//   console.log(rangeOfNumbers(10, 10))

  function somar(arr, n) {
    if (n < 1) {
        return []
    } else {
        arr = somar(arr, n - 1)
        arr.push(arr[n] + arr[n - 1])
        return arr
    }
  }

  const myArray = [1, 2, 3, 4, 5]
  console.log(somar(myArray, 4))