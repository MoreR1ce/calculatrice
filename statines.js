FunctionD();
const buttonD = document.querySelector("#button_D");
const answerD = document.querySelector("#answer_D");

function FunctionD() {
    var dose = document.querySelector("#dose-départ-statine").value;
    var statined = document.querySelector("#statine-départ").value;
    var statinef = document.querySelector("#statine-finale").value;


// atorvastatine-----------------------------
// atorvastatine vers atorvastatine
 if (statined === "atorvastatine" && statinef === "atorvastatine") {
    malcom = Math.round(dose);
}
// atorvastatine vers fluvastatine
if (statined === "atorvastatine" && statinef === "fluvastatine") {
    malcom = Math.round(dose * 8);
}
// atorvastatine vers lovastatine
if (statined === "atorvastatine" && statinef === "lovastatine") {
    malcom = Math.round(dose * 4);
}
// atorvastatine vers pravastatine
if (statined === "atorvastatine" && statinef === "pravastatine") {
    malcom = Math.round(dose * 4);
}
// atorvastatine vers rosuvastatine
if (statined === "atorvastatine" && statinef === "rosuvastatine") {
    malcom = Math.round(dose / 2);
}
// atorvastatine vers simvastatine
if (statined === "atorvastatine" && statinef === "simvastatine") {
    malcom = Math.round(dose * 2);
}
    


// fluvastatine-----------------------------
// fluvastatine vers atorvastatine
if (statined === "fluvastatine" && statinef === "atorvastatine") {
    malcom = Math.round(dose / 8);
}
// fluvastatine vers fluvastatine
if (statined === "fluvastatine" && statinef === "fluvastatine") {
    malcom = Math.round(dose);
}
// fluvastatine vers lovastatine
if (statined === "fluvastatine" && statinef === "lovastatine") {
    malcom = Math.round(dose / 2);
}
// fluvastatine vers pravastatine
if (statined === "fluvastatine" && statinef === "pravastatine") {
    malcom = Math.round(dose / 2);
}
// fluvastatine vers rosuvastatine
if (statined === "fluvastatine" && statinef === "rosuvastatine") {
    malcom = Math.round(dose / 16);
}
// fluvastatine vers simvastatine
if (statined === "fluvastatine" && statinef === "simvastatine") {
    malcom = Math.round(dose / 4);
}



// lovastatine-----------------------------
// lovastatine vers atorvastatine
if (statined === "lovastatine" && statinef === "atorvastatine") {
    malcom = Math.round(dose / 4);
}
// lovastatine vers fluvastatine
if (statined === "lovastatine" && statinef === "fluvastatine") {
    malcom = Math.round(dose * 2);
}
// lovastatine vers lovastatine
if (statined === "lovastatine" && statinef === "lovastatine") {
    malcom = Math.round(dose);
}
// lovastatine vers pravastatine
if (statined === "lovastatine" && statinef === "pravastatine") {
    malcom = Math.round(dose);
}
// lovastatine vers rosuvastatine
if (statined === "lovastatine" && statinef === "rosuvastatine") {
    malcom = Math.round(dose / 8);
}
// lovastatine vers simvastatine
if (statined === "lovastatine" && statinef === "simvastatine") {
    malcom = Math.round(dose / 2);
}




// pravastatine-----------------------------
// pravastatine vers atorvastatine
if (statined === "pravastatine" && statinef === "atorvastatine") {
    malcom = Math.round(dose / 4);
}
// pravastatine vers fluvastatine
if (statined === "pravastatine" && statinef === "fluvastatine") {
    malcom = Math.round(dose * 2);
}
// pravastatine vers lovastatine
if (statined === "pravastatine" && statinef === "lovastatine") {
    malcom = Math.round(dose);
}
// pravastatine vers pravastatine
if (statined === "pravastatine" && statinef === "pravastatine") {
    malcom = Math.round(dose);
}
// pravastatine vers rosuvastatine
if (statined === "pravastatine" && statinef === "rosuvastatine") {
    malcom = Math.round(dose / 8);
}
// pravastatine vers simvastatine
if (statined === "pravastatine" && statinef === "simvastatine") {
    malcom = Math.round(dose / 2);
}


// rosuvastatine-----------------------------
// rosuvastatine vers atorvastatine
if (statined === "rosuvastatine" && statinef === "atorvastatine") {
    malcom = Math.round(dose * 2);
}
// rosuvastatine vers fluvastatine
if (statined === "rosuvastatine" && statinef === "fluvastatine") {
    malcom = Math.round(dose * 16);
}
// rosuvastatine vers lovastatine
if (statined === "rosuvastatine" && statinef === "lovastatine") {
    malcom = Math.round(dose * 8);
}
// rosuvastatine vers pravastatine
if (statined === "rosuvastatine" && statinef === "pravastatine") {
    malcom = Math.round(dose * 8);
}
// rosuvastatine vers rosuvastatine
if (statined === "rosuvastatine" && statinef === "rosuvastatine") {
    malcom = Math.round(dose);
}
// rosuvastatine vers simvastatine
if (statined === "rosuvastatine" && statinef === "simvastatine") {
    malcom = Math.round(dose * 4);
}




// simvastatine-----------------------------
// simvastatine vers atorvastatine
if (statined === "simvastatine" && statinef === "atorvastatine") {
    malcom = Math.round(dose / 2);
}
// simvastatine vers fluvastatine
if (statined === "simvastatine" && statinef === "fluvastatine") {
    malcom = Math.round(dose * 4);
}
// simvastatine vers lovastatine
if (statined === "simvastatine" && statinef === "lovastatine") {
    malcom = Math.round(dose * 2);
}
// simvastatine vers pravastatine
if (statined === "simvastatine" && statinef === "pravastatine") {
    malcom = Math.round(dose * 2);
}
// simvastatine vers rosuvastatine
if (statined === "simvastatine" && statinef === "rosuvastatine") {
    malcom = Math.round(dose / 4);
}
// simvastatine vers simvastatine
if (statined === "simvastatine" && statinef === "simvastatine") {
    malcom = Math.round(dose);
}


if (statined === "atorvastatine") {
    statined1 = "Atorvastatine";
}
if (statined === "fluvastatine") {
    statined1 = "Fluvastatine";
}
if (statined === "lovastatine") {
    statined1 = "Lovastatine";
}
if (statined === "pravastatine") {
    statined1 = "Pravastatine";
}
if (statined === "rosuvastatine") {
    statined1 = "Rosuvastatine";
}
if (statined === "simvastatine") {
    statined1 = "Simvastatine";
}




let yolo1 = statined1 + " " + dose + "mg/24h équivaut à " + statinef + " " + malcom + "mg/24h";
document.getElementById("answer_D").textContent = yolo1;

}
