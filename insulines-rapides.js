
    FunctionC();
    const buttonC = document.querySelector("#button_C");
    const answerC = document.querySelector("#answer_C");

function FunctionC() {
    var dose = document.querySelector("#dose-départ-insuline-rapide").value;
    var insulinerd = document.querySelector("#insuline-rapide-départ").value;
    var insulinerf = document.querySelector("#insuline-rapide-finale").value;

    if (insulinerd === "asparte") {
        insulinerd1 = "d'asparte";
    }
    if (insulinerd === "glulisine") {
        insulinerd1 = "de glulisine";
    }
    if (insulinerd === "lispro") {
        insulinerd1 = "de lispro";
    }
    if (insulinerd === "régulière") {
        insulinerd1 = "de régulière";
    }
   


    if (insulinerf === "asparte") {
        insulinerf1 = "d'asparte";
    }
    if (insulinerf === "glulisine") {
        insulinerf1 = "de glulisine";
    }
    if (insulinerf === "lispro") {
        insulinerf1 = "de lispro";
    }
    if (insulinerf === "régulière") {
        insulinerf1 = "de régulière";
    }


    if ((insulinerd1 === "de glulisine" || "d'asparte" || "de lispro" || "de régulière") && (insulinerf1 === "de glulisine" || "d'asparte" || "de lispro" || "de régulière") && (dose >= 0)) {
    yolo1 = dose + "u " + insulinerd1 + " donne " + dose + "u " + insulinerf1;
    }
    document.getElementById("answer_C").textContent = yolo1;
}
