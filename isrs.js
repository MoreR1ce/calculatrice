
FunctionE();
const buttonE = document.querySelector("#button_E");
const answerE = document.querySelector("#answer_E");

function FunctionE() {
    var dose = document.querySelector("#dose-départ-isrs").value;
    var isrsd = document.querySelector("#isrs-départ").value;
    var isrsf = document.querySelector("#isrs-finale").value;

// Citalopram-----------------------------
// citalopram vers citalopram
if (isrsd === "citalopram" && isrsf === "citalopram") {
    malcom = Math.round(dose);
}
// citalopram vers escitalopram
if (isrsd === "citalopram" && isrsf === "escitalopram") {
    malcom = Math.round(dose / 2);
}
// citalopram vers fluoxetine
if (isrsd === "citalopram" && isrsf === "fluoxetine") {
    malcom = Math.round(dose);
}
// citalopram vers fluvoxamine
if (isrsd === "citalopram" && isrsf === "fluvoxamine") {
    malcom = Math.round(dose * 3.75);
}
// citalopram vers paroxetine
if (isrsd === "citalopram" && isrsf === "paroxetine") {
    malcom = Math.round(dose);
}
// citalopram vers sertraline
if (isrsd === "citalopram" && isrsf === "sertraline") {
    malcom = Math.round(dose * 2.5);
}
    


// Escitalopram-----------------------------
// escitalopram vers citalopram
if (isrsd === "escitalopram" && isrsf === "citalopram") {
    malcom = Math.round(dose * 2);
}
// escitalopram vers escitalopram
if (isrsd === "escitalopram" && isrsf === "escitalopram") {
    malcom = Math.round(dose);
}
// escitalopram vers fluoxetine
if (isrsd === "escitalopram" && isrsf === "fluoxetine") {
    malcom = Math.round(dose * 2);
}
// escitalopram vers fluvoxamine
if (isrsd === "escitalopram" && isrsf === "fluvoxamine") {
    malcom = Math.round(dose * 7.5);
}
// escitalopram vers paroxetine
if (isrsd === "escitalopram" && isrsf === "paroxetine") {
    malcom = Math.round(dose * 2);
}
// escitalopram vers sertraline
if (isrsd === "escitalopram" && isrsf === "sertraline") {
    malcom = Math.round(dose * 5);
}



// Fluoxetine-----------------------------
// fluvoxamine vers citalopram
if (isrsd === "fluoxetine" && isrsf === "citalopram") {
    malcom = Math.round(dose);
}
// fluvoxamine vers escitalopram
if (isrsd === "fluoxetine" && isrsf === "escitalopram") {
    malcom = Math.round(dose);
}
// fluoxetine vers fluoxetine
if (isrsd === "fluoxetine" && isrsf === "fluoxetine") {
    malcom = Math.round(dose);
}
// fluoxetine vers fluvoxamine
if (isrsd === "fluoxetine" && isrsf === "fluvoxamine") {
    malcom = Math.round(dose);
}
// fluoxetine vers paroxetine
if (isrsd === "fluoxetine" && isrsf === "paroxetine") {
    malcom = Math.round(dose);
}
// fluoxetine vers sertraline
if (isrsd === "fluoxetine" && isrsf === "sertraline") {
    malcom = Math.round(dose);
}



// Fluvoxamine-----------------------------
// fluvoxamine vers citalopram
if (isrsd === "fluvoxamine" && isrsf === "citalopram") {
    malcom = Math.round(dose / 3.75);
}
// fluvoxamine vers escitalopram
if (isrsd === "fluvoxamine" && isrsf === "escitalopram") {
    malcom = Math.round(dose / 7.5);
}
// fluvoxamine vers fluoxetine
if (isrsd === "fluvoxamine" && isrsf === "fluoxetine") {
    malcom = Math.round(dose / 3.75);
}
// fluvoxamine vers fluvoxamine
if (isrsd === "fluvoxamine" && isrsf === "fluvoxamine") {
    malcom = Math.round(dose);
}
// fluvoxamine vers paroxetine
if (isrsd === "fluvoxamine" && isrsf === "paroxetine") {
    malcom = Math.round(dose / 3.75);
}
// fluvoxamine vers sertraline
if (isrsd === "fluvoxamine" && isrsf === "sertraline") {
    malcom = Math.round(dose * 2 / 3);
}



// Paroxetine-----------------------------
// paroxetine vers citalopram
if (isrsd === "paroxetine" && isrsf === "citalopram") {
    malcom = Math.round(dose);
}
// paroxetine vers escitalopram
if (isrsd === "paroxetine" && isrsf === "escitalopram") {
    malcom = Math.round(dose / 2);
}
// paroxetine vers fluoxetine
if (isrsd === "paroxetine" && isrsf === "fluoxetine") {
    malcom = Math.round(dose);
}
// paroxetine vers fluvoxamine
if (isrsd === "paroxetine" && isrsf === "fluvoxamine") {
    malcom = Math.round(dose * 3.75);
}
// paroxetine vers paroxetine
if (isrsd === "paroxetine" && isrsf === "paroxetine") {
    malcom = Math.round(dose);
}
// paroxetine vers sertraline
if (isrsd === "paroxetine" && isrsf === "sertraline") {
    malcom = Math.round(dose * 5 / 2);
}


// Sertraline-----------------------------
// sertraline vers citalopram
if (isrsd === "sertraline" && isrsf === "citalopram") {
    malcom = Math.round(dose / 2.5);
}
// sertraline vers escitalopram
if (isrsd === "sertraline" && isrsf === "escitalopram") {
    malcom = Math.round(dose / 5);
}
// sertraline vers fluoxetine
if (isrsd === "sertraline" && isrsf === "fluoxetine") {
    malcom = Math.round(dose / 2.5);
}
// sertraline vers fluvoxamine
if (isrsd === "sertraline" && isrsf === "fluvoxamine") {
    malcom = Math.round(dose * 1.5);
}
// sertraline vers paroxetine
if (isrsd === "sertraline" && isrsf === "paroxetine") {
    malcom = Math.round(dose / 2.5);
}
// sertraline vers sertraline
if (isrsd === "sertraline" && isrsf === "sertraline") {
    malcom = Math.round(dose);
}




    if (isrsd === "citalopram") {
        isrsd1 = "Citalopram";
    }
    if (isrsd === "escitalopram") {
        isrsd1 = "Escitalopram";
    }
    if (isrsd === "fluoxetine") {
        isrsd1 = "Fluoxétine";
    }
    if (isrsd === "fluvoxamine") {
        isrsd1 = "Fluvoxamine";
    }
    if (isrsd === "paroxetine") {
        isrsd1 = "Paroxétine";
    }
    if (isrsd === "sertraline") {
        isrsd1 = "Sertraline";
    }



    if (isrsf === "citalopram") {
        isrsf1 = "citalopram";
    }
    if (isrsf === "escitalopram") {
        isrsf1 = "escitalopram";
    }
    if (isrsf === "fluoxetine") {
        isrsf1 = "fluoxétine";
    }
    if (isrsf === "fluvoxamine") {
        isrsf1 = "fluvoxamine";
    }
    if (isrsf === "paroxetine") {
        isrsf1 = "paroxétine";
    }
    if (isrsf === "sertraline") {
        isrsf1 = "sertraline";
    }





    if (isrsd != "fluoxetine") {
        yolo1 = isrsd1 + " " + dose + "mg/24h équivaut à " + isrsf1 + " " + malcom + "mg/24h";
    }
    else {
        yolo1 = "Sevrage complet puis attendre 4 à 7 jours avant débuter un autre ISRS";
    }

    

    if (isrsd === "fluoxetine" && isrsf === "fluoxetine") {
        yolo1 = isrsd1 + " " + dose + "mg/24h équivaut à " + isrsf1 + " " + malcom + "mg/24h";
    }


    document.getElementById("answer_E").textContent = yolo1;
    
    }
