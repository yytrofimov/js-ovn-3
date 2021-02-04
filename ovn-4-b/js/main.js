var numbers = [3, 4, 5, 6, 7]
numbers = numbers.map(x => x*2)
console.log(numbers)
numbers.push(100)
function createUlFromArray (numbers) {
    var numbersElement = document.createElement("ul")
    for (number of numbers) {
        let numberElement = document.createElement("li")
        numberElement.innerHTML = number
        numbersElement.appendChild(numberElement)
    }
    document.body.append(numbersElement)
}
createUlFromArray(numbers)
numbers2 = [1000,2000,3000]
numbers = numbers.concat(numbers2)
createUlFromArray(numbers)