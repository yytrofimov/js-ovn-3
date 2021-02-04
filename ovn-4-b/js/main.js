var numbers = [3, 4, 5, 6, 7]
numbers = numbers.map(x => x*2)
console.log(numbers)
var numbersElement = document.createElement("ul")
for (number of numbers) {
    let numberElement = document.createElement("li")
    numberElement.innerHTML = number
    numbersElement.appendChild(numberElement)
}
document.body.append(numbersElement)