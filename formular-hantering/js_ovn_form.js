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
//Uppgift 3
function dateFormHandler(formsClass, divID) {
    function validateForm(formsClass) {
        //Vi kontrollerar om formuläret är tomt
        //Vi kontrollerar inte riktigheten av de angivna data
        let cond = true;
        for (el of document.getElementsByClassName(formsClass)) {
            if (el.value != "") {
                cond = cond && true;
            } else {
                cond = false;
            }
        }
        return cond;
    }
    let dates = [];
    function getDates(formsClass) {
        for (form of document.getElementsByClassName(formsClass)) {
            for (i of [form.value.split("-")]) {
                dates.push(new Date(i[0], i[1], i[2]));
            }
        }
        return dates;
    }
    function outputCalc(dates, divID) {
        document.getElementById(divID).innerHTML =
            Math.round(Math.abs((dates[1] - dates[0]) / (24 * 60 * 60 * 1000))) + " dagar mellan";
    }
    if (validateForm(formsClass)) {
        getDates(formsClass);
        outputCalc(dates, divID);
    } else {
        alert("Du har inte angett något!");
        console.log(false);
    }
}
document.getElementById("date_out").addEventListener("click", function () {
    dateFormHandler("date_input", "date");
});
//Uppgift 4
function dateFormHandler(formsClass, divID) {
    function validateForm(formsClass) {
        //Vi kontrollerar om formuläret är tomt
        //Vi kontrollerar inte riktigheten av de angivna data
        let cond = true;
        for (el of document.getElementsByClassName(formsClass)) {
            if (el.value != "") {
                cond = cond && true;
            } else {
                cond = false;
            }
        }
        return cond;
    }
    let dates = [];
    function getDates(formsClass) {
        for (form of document.getElementsByClassName(formsClass)) {
            for (i of [form.value.split("-")]) {
                dates.push(new Date(i[0], i[1], i[2]));
            }
        }
        return dates;
    }
    function outputCalc(dates, divID) {
        out = Math.round((new Date() - dates[0]) / (24 * 60 * 60 * 1000));
        if (out > 0) {
            document.getElementById(divID).innerHTML =
                Math.round((new Date() - dates[0]) / (24 * 60 * 60 * 1000)) + " dagar kom från din födelsedatum";
        } else {
            console.log(false);
            alert("Den här datum passar inte. Försök igen!");
        }
    }
    if (validateForm(formsClass)) {
        getDates(formsClass);
        outputCalc(dates, divID);
    } else {
        alert("Du har inte angett något!");
        console.log(false);
    }
}
document.getElementById("date_out_2").addEventListener("click", function () {
    dateFormHandler("date_input_2", "date_2");
});
//Uppgift 5
function ageValidation() {
    let age = prompt("Hur gammal är du?");
    if (age >= 18) {
        alert("Du är myndig!");
    } else {
        alert("Du är underårig!");
    }
}
ageValidation();
