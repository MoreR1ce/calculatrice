
    FunctionC();
    const buttonC = document.querySelector("#button_C");
    const answerC = document.querySelector("#answer_C");

function FunctionC() {
    var dose = document.querySelector("#dose-départ-insuline-rapide").value;
    var insulinerd = document.querySelector("#insuline-rapide-départ").value;
    var insulinerf = document.querySelector("#insuline-rapide-finale").value;
    let yolo = insulinerd + " " + dose + "u ----» " + insulinerf + " " + dose + "u";
    document.getElementById("answer_C").textContent = yolo;
}
