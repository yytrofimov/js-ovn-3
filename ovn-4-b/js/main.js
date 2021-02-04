var numbers = [3, 4, 5, 6, 7];
numbers = numbers.map((x) => x * 2);
console.log(numbers);
numbers.push(100);
function createUlFromArray(numbers) {
  let numbersElement = document.createElement("ul");
  for (number of numbers) {
    let numberElement = document.createElement("li");
    numberElement.innerHTML = number;
    numbersElement.appendChild(numberElement);
  }
  document.body.append(numbersElement);
}
createUlFromArray(numbers);
numbers2 = [1000, 2000, 3000];
numbers = numbers.concat(numbers2);
createUlFromArray(numbers);

const shortcuts = [
  { name: "Prakticum", url: "https://prakticum.fi" },
  { name: "Wilma", url: "https://prakticum.inschool.fi" },
  { name: "e-post", url: "https://outlook.office.com/" },
  { name: "Google drive", url: "https://drive.google.com" },
  { name: "Google classroom", url: "https://classroom.google.com" },
  { name: "Github", url: "https://github.com" },
];

function createShortcutsTable(shortcuts, requiredData) {
  let shortcutsTable = document.createElement("table");
  let labelString = document.createElement("tr");
  for (label of requiredData) {
    let labelCell = document.createElement("th");
    labelCell.innerHTML = label;
    labelString.appendChild(labelCell);
  }
  shortcutsTable.appendChild(labelString);
  for (shortcut of shortcuts) {
    let tableString = document.createElement("tr");
    for (label of requiredData) {
      let stringCell = document.createElement("th");
      stringCell.innerHTML += shortcut[label];
      tableString.appendChild(stringCell);
    }
    shortcutsTable.append(tableString);
  }
  document.body.append(shortcutsTable);
}
//for of implementation i stället forEach
createShortcutsTable(shortcuts, ["name", "url"]);
// requiredData blir en separated variabeln för att kunna använda andra dataset lättare
const ageSummarizeReducer = (accumulator, currentValue) => accumulator + currentValue['Age'];
const staff = [
    {'name':'Paul','occupation':'Teacher','Age':40},
    {'name':'Erik','occupation':'Teacher','Age':22},
]
console.log(staff.reduce(ageSummarizeReducer,0))

const code = [
    {name: 'john', langs: ['HTML','CSS']}, 
    {name: 'jack', langs: ['HTML','JavaScript','Python','TypeScript']}, 
    {name: 'diane', langs: ['JavaScript','PHP']}
   ];

let langs = [];
for (el of code) {
    langs = langs.concat(el['langs']);
}
console.log(langs)
let langSet = new Set(langs);
console.log(langSet)
//for of implementation i stället reduce