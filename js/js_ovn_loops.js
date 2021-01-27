let i = 1;
while (i <= 20) {
  console.log("hej på dig rad " + i);
  i++;
}
for (i = 10; i <= 20; i++) {
  console.log(i);
}
i = 0;
while (i <= 20) {
  console.log(i);
  i = i + 2;
}

let numbers = "";
i = 0;
while (i <= 10) {
  numbers += i;
  i++;
}
console.log(numbers);
let rad = 3;
if (rad == 0) {
  console.log("värdet är noll");
} else if (rad == 1) {
  console.log("Endast en rad");
} else if (rad > 1 && rad <= 10) {
  let i = 1;
  while (i <= rad) {
    console.log("detta är rad " + i);
    i++;
  }
} else {
  console.log("För mycket rader eller ogiltigt värde");
}

let fruits = ["apple", "orange", "pineapple"];
for (i in fruits) {
  console.log(fruits[i]);
}

var codelang = "JS, PHP, HTML, Phyton".split(", ").sort();
for (i in codelang) {
  console.log(codelang[i]);
}
