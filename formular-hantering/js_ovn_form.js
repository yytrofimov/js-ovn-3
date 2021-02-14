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
        cond = false;
        for (i of meal) {
            if (i == document.getElementById(formID).value) {
                document.getElementById(
                    divID
                ).innerHTML = document.getElementById(formID).value;
                cond = true;
            }
        }
        if (!cond) {
            //De förväntade variablerna beskrivs i meal variabeln
            document.getElementById(divID).innerHTML =
                "Ditt val är ovanligt, men ändå: " +
                document.getElementById(formID).value;
        }
    }
    if (validateForm(formID)) {
        outputMeal(formID, divID);
    } else {
        alert("inget värde matat!");
        console.log(false);
    }
}
//Vi använder EventListner i stället för onlick därför att EventListner funkar bättre i alla platformer
document.getElementById("meal_out").addEventListener("click", function () {
    mealFormHandler("meal_input", "meal");
});
