//Uppgift 1
//Allt görs i separata funktioner för anpassningsbarhet till andra data
function mealFormHandler(formID, divID) {
    let meal = ["morgonmål", "lunch", "middag", "kvällsmål"];
    function validateForm(formID) {
        //Vi kontrollerar om formuläret är tomt
        //Vi kontrollerar inte riktigheten av de angivna data
        if (document.getElementById(formID).value == "") {
            return false;
        } else {
            return true;
        }
    }
    function outputMeal(formID, divID) {
        let cond = false;
        for (i of meal) {
            if (i == document.getElementById(formID).value) {
                document.getElementById(divID).innerHTML = document.getElementById(formID).value;
                cond = true;
            }
        }
        if (!cond) {
            //De förväntade variablerna beskrivs i meal variabeln
            document.getElementById(divID).innerHTML =
                "Ditt val är ovanligt, men ändå: " + document.getElementById(formID).value;
        }
    }
    if (validateForm(formID)) {
        outputMeal(formID, divID);
    } else {
        alert("Inget värde matat!");
        console.log(false);
    }
}
//Vi använder EventListner i stället för onlick därför att EventListner funkar bättre i alla platformer
document.getElementById("meal_out").addEventListener("click", function () {
    mealFormHandler("meal_input", "meal");
});
//Uppgift 2
function calcFormHandler(formsClass, divID, operation) {
    function validateForm(formsClass) {
        //Vi kontrollerar om formuläret är tomt
        //Vi kontrollerar inte riktigheten av de angivna data
        //Jag använder isNaN-kontrollen för att undvika fel
        let cond = true;
        console.log(document.getElementsByClassName(formsClass));
        for (el of document.getElementsByClassName(formsClass)) {
            if (el.value != "" && !isNaN(parseInt(el.value))) {
                cond = cond && true;
            } else {
                cond = false;
            }
        }
        return cond;
    }
    let numbers = [];
    function getNumbers(formsClass) {
        for (form of document.getElementsByClassName(formsClass)) {
            numbers.push(parseInt(form.value));
        }
        console.log(numbers);
        return numbers;
    }
    function outputCalc(numbers, divID, operation) {
        if (operation == "+") {
            document.getElementById(divID).innerHTML = (numbers[0] + numbers[1]).toFixed(2);
        } else if (operation == "-") {
            document.getElementById(divID).innerHTML = (numbers[0] - numbers[1]).toFixed(2);
        } else if (operation == "*") {
            document.getElementById(divID).innerHTML = (numbers[0] * numbers[1]).toFixed(2);
        } else {
            document.getElementById(divID).innerHTML = (numbers[0] / numbers[1]).toFixed(2);
        }
    }
    if (validateForm(formsClass)) {
        getNumbers(formsClass);
        outputCalc(numbers, divID, operation);
    } else {
        alert("Du har inte angett något eller du inte ange nummer");
        console.log(false);
    }
}

document.getElementById("addition").addEventListener("click", function () {
    calcFormHandler("calc_input", "resultat", "+");
});
document.getElementById("subtraction").addEventListener("click", function () {
    calcFormHandler("calc_input", "resultat", "-");
});
document.getElementById("multiplication").addEventListener("click", function () {
    calcFormHandler("calc_input", "resultat", "*");
});
document.getElementById("division").addEventListener("click", function () {
    calcFormHandler("calc_input", "resultat", "/");
});
