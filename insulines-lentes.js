

FunctionB();
const buttonB = document.querySelector("#button_B");
const answerB = document.querySelector("#answer_B");


function FunctionB() {
    var dose = document.querySelector("#dose-départ-insuline-lente").value;
    var insulineld = document.querySelector("#insuline-lente-départ").value;
    var insulinelf = document.querySelector("#insuline-lente-finale").value;
    
    // NPH DIE-----------------------------

        // NPH DIE vers NPH DIE
        if (insulineld === "nph-die" && insulinelf === "nph-die") {
            malcom = Math.round(dose);
        }
        // NPH DIE vers NPH BID
        if (insulineld === "nph-die" && insulinelf === "nph-bid") {
            malcom = Math.round(dose/2);
        }
        // NPH DIE vers Détémir DIE
        if (insulineld === "nph-die" && insulinelf === "détémir-die") {
            malcom = Math.round(dose);
        }
        // NPH DIE vers Détémir BID
        if (insulineld === "nph-die" && insulinelf === "détémir-bid") {
            malcom = Math.round(dose / 2);
        }
        // NPH DIE vers Glargine 100u/mL
        if (insulineld === "nph-die" && insulinelf === "glargine-100") {
            malcom = Math.round(dose);
        }
        // NPH DIE vers Glargine 300u/mL
        if (insulineld === "nph-die" && insulinelf === "glargine-300") {
            malcom = Math.round(dose);
        }
        // NPH DIE vers Dégludec
        if (insulineld === "nph-die" && insulinelf === "dégludec") {
            malcom = Math.round(dose);
        }
        // NPH DIE vers Icodec
        if (insulineld === "nph-die" && insulinelf === "icodec") {
            malcom = (Math.round(dose * 7 / 10)) * 10;
        }



    // NPH BID-----------------------------

        // NPH BID vers NPH DIE
        if (insulineld === "nph-bid" && insulinelf === "nph-die") {
            malcom = Math.round(dose * 2);
        }
        // NPH BID vers NPH BID
        if (insulineld === "nph-bid" && insulinelf === "nph-bid") {
            malcom = Math.round(dose);
        }
        // NPH BID vers Détémir DIE
        if (insulineld === "nph-bid" && insulinelf === "détémir-die") {
            malcom = Math.round(dose * 2);
        }
        // NPH BID vers Détémir BID
        if (insulineld === "nph-bid" && insulinelf === "détémir-bid") {
            malcom = Math.round(dose);
        }
        // NPH BID vers Glargine 100u/mL
        if (insulineld === "nph-bid" && insulinelf === "glargine-100") {
            malcom = Math.round(dose * 2 * 0.8);
        }
        // NPH BID vers Glargine 300u/mL
        if (insulineld === "nph-bid" && insulinelf === "glargine-300") {
            malcom = Math.round(dose * 2 * 0.8);
        }
        // NPH BID vers Dégludec
        if (insulineld === "nph-bid" && insulinelf === "dégludec") {
            malcom = Math.round(dose * 2 * 0.8);
        }
        // NPH BID vers Icodec
        if (insulineld === "nph-bid" && insulinelf === "icodec") {
            malcom = (Math.round(dose * 14 / 10)) * 10;
        }



    // Détémir DIE-----------------------------

        // Détémir DIE vers NPH DIE
        if (insulineld === "détémir-die" && insulinelf === "nph-die") {
            malcom = Math.round(dose * 0.8);
        }
        // Détémir DIE vers NPH BID
        if (insulineld === "détémir-die" && insulinelf === "nph-bid") {
            malcom = Math.round(dose * 0.4);
        }
        // Détémir DIE vers Détémir DIE
        if (insulineld === "détémir-die" && insulinelf === "détémir-die") {
            malcom = Math.round(dose);
        }
        // Détémir DIE vers Détémir BID
        if (insulineld === "détémir-die" && insulinelf === "détémir-bid") {
            malcom = Math.round(dose / 2);
        }
        // Détémir DIE vers Glargine 100u/mL
        if (insulineld === "détémir-die" && insulinelf === "glargine-100") {
            malcom = Math.round(dose);
        }
        // Détémir DIE vers Glargine 300u/mL
        if (insulineld === "détémir-die" && insulinelf === "glargine-300") {
            malcom = Math.round(dose);
        }
        // Détémir DIE vers Dégludec
        if (insulineld === "détémir-die" && insulinelf === "dégludec") {
            malcom = Math.round(dose);
        }
        // Détémir DIE vers Icodec
        if (insulineld === "détémir-die" && insulinelf === "icodec") {
            malcom = (Math.round(dose * 7 / 10)) * 10;
        }



    // Détémir BID-----------------------------

        // Détémir BID vers NPH DIE
        if (insulineld === "détémir-bid" && insulinelf === "nph-die") {
            malcom = Math.round(dose * 1.6);
        }
        // Détémir BID vers NPH BID
        if (insulineld === "détémir-bid" && insulinelf === "nph-bid") {
            malcom = Math.round(dose * 0.8);
        }
        // Détémir BID vers Détémir DIE
        if (insulineld === "détémir-bid" && insulinelf === "détémir-die") {
            malcom = Math.round(dose * 2);
        }
        // Détémir BID vers Détémir BID
        if (insulineld === "détémir-bid" && insulinelf === "détémir-bid") {
            malcom = Math.round(dose);
        }
        // Détémir BID vers Glargine 100u/mL
        if (insulineld === "détémir-bid" && insulinelf === "glargine-100") {
            malcom = Math.round(dose * 2);
        }
        // Détémir BID vers Glargine 300u/mL
        if (insulineld === "détémir-bid" && insulinelf === "glargine-300") {
            malcom = Math.round(dose * 1.6);
        }
        // Détémir BID vers Dégludec
        if (insulineld === "détémir-bid" && insulinelf === "dégludec") {
            malcom = Math.round(dose * 1.6);
        }
        // Détémir BID vers Icodec
        if (insulineld === "détémir-bid" && insulinelf === "icodec") {
            malcom = (Math.round(dose * 14 / 10)) * 10;
        }




    // Glargine 100u/mL-----------------------------

        // Glargine 100u/mL vers NPH DIE
        if (insulineld === "glargine-100" && insulinelf === "nph-die") {
            malcom = Math.round(dose * 0.8);
        }
        // Glargine 100u/mL vers NPH BID
        if (insulineld === "glargine-100" && insulinelf === "nph-bid") {
            malcom = Math.round(dose * 0.4);
        }
        // Glargine 100u/mL vers Détémir DIE
        if (insulineld === "glargine-100" && insulinelf === "détémir-die") {
            malcom = Math.round(dose);
        }
        // Glargine 100u/mL vers Détémir BID
        if (insulineld === "glargine-100" && insulinelf === "détémir-bid") {
            malcom = Math.round(dose / 2);
        }
        // Glargine 100u/mL vers Glargine 100u/mL
        if (insulineld === "glargine-100" && insulinelf === "glargine-100") {
            malcom = Math.round(dose);
        }
        // Glargine 100u/mL vers Glargine 300u/mL
        if (insulineld === "glargine-100" && insulinelf === "glargine-200") {
            malcom = Math.round(dose);
        }
        // Glargine 100u/mL vers Dégludec
        if (insulineld === "glargine-100" && insulinelf === "dégludec") {
            malcom = Math.round(dose);
        }
        // Glargine 100u/mL vers Icodec
        if (insulineld === "glargine-100" && insulinelf === "icodec") {
            malcom = (Math.round(dose * 7 / 10)) * 10;
        }



    // Glargine 300u/mL-----------------------------

        // Glargine 300u/mL vers NPH DIE
        if (insulineld === "glargine-300" && insulinelf === "nph-die") {
            malcom = Math.round(dose * 0.8);
        }
        // Glargine 300u/mL vers NPH BID
        if (insulineld === "glargine-300" && insulinelf === "nph-bid") {
            malcom = Math.round(dose * 0.4);
        }
        // Glargine 300u/mL vers Détémir DIE
        if (insulineld === "glargine-300" && insulinelf === "détémir-die") {
            malcom = Math.round(dose * 0.8);
        }
        // Glargine 300u/mL vers Détémir BID
        if (insulineld === "glargine-300" && insulinelf === "détémir-bid") {
            malcom = Math.round(dose * 0.4);
        }
        // Glargine 300u/mL vers Glargine 100u/mL
        if (insulineld === "glargine-300" && insulinelf === "glargine-100") {
            malcom = Math.round(dose * 0.8);
        }
        // Glargine 300u/mL vers Glargine 300u/mL
        if (insulineld === "glargine-300" && insulinelf === "glargine-300") {
            malcom = Math.round(dose);
        }
        // Glargine 300u/mL vers Dégludec
        if (insulineld === "glargine-300" && insulinelf === "dégludec") {
            malcom = Math.round(dose * 0.8);
        }
        // Glargine 300u/mL vers Icodec
        if (insulineld === "glargine-300" && insulinelf === "icodec") {
            malcom = (Math.round(dose * 7 / 10)) * 10;
        }



    // Dégludec-----------------------------

        // Dégludec vers NPH DIE
        if (insulineld === "dégludec" && insulinelf === "nph-die") {
            malcom = Math.round(dose * 0.8);
        }
        // Dégludec vers NPH BID
        if (insulineld === "dégludec" && insulinelf === "nph-bid") {
            malcom = Math.round(dose * 0.4);
        }
        // DégludecL vers Détémir DIE
        if (insulineld === "dégludec" && insulinelf === "détémir-die") {
            malcom = Math.round(dose * 0.8);
        }
        // Dégludec vers Détémir BID
        if (insulineld === "dégludec" && insulinelf === "détémir-bid") {
            malcom = Math.round(dose * 0.4);
        }
        // Dégludec vers Glargine 100u/mL
        if (insulineld === "dégludec" && insulinelf === "glargine-100") {
            malcom = Math.round(dose * 0.8);
        }
        // Dégludec vers Glargine 300u/mL
        if (insulineld === "dégludec" && insulinelf === "glargine-300") {
            malcom = Math.round(dose * 0.8);
        }
        // Dégludec vers Dégludec
        if (insulineld === "dégludec" && insulinelf === "dégludec") {
            malcom = Math.round(dose);
        }
        // Dégludec vers Icodec
        if (insulineld === "dégludec" && insulinelf === "icodec") {
            malcom = (Math.round(dose * 7 / 10)) * 10;
        }



    // Icodec-----------------------------

        // Icodec vers NPH DIE
        if (insulineld === "icodec" && insulinelf === "nph-die") {
            malcom = Math.round(dose / 7);
        }
        // Icodec vers NPH BID
        if (insulineld === "icodec" && insulinelf === "nph-bid") {
            malcom = Math.round(dose / 14);
        }
        // Icodec vers Détémir DIE
        if (insulineld === "icodec" && insulinelf === "détémir-die") {
            malcom = Math.round(dose / 7);
        }
        // Icodec vers Détémir BID
        if (insulineld === "icodec" && insulinelf === "détémir-bid") {
            malcom = Math.round(dose / 14);
        }
        // Icodec vers Glargine 100u/mL
        if (insulineld === "icodec" && insulinelf === "glargine-100") {
            malcom = Math.round(dose / 7);
        }
        // Icodec vers Glargine 300u/mL
        if (insulineld === "icodec" && insulinelf === "glargine-300") {
            malcom = Math.round(dose / 7);
        }
        // Icodec vers Dégludec
        if (insulineld === "icodec" && insulinelf === "dégludec") {
            malcom = Math.round(dose / 7);
        }
        // Icodec vers Icodec
        if (insulineld === "icodec" && insulinelf === "icodec") {
            malcom = Math.round(dose);
        }



        if (insulineld === "nph-die") {
            insulineld1 = "de NPH DIE";
        }
        if (insulineld === "nph-bid") {
            insulineld1 = "de NPH BID";
        }
        if (insulineld === "détémir-die") {
            insulineld1 = "de détémir DIE";
        }
        if (insulineld === "détémir-bid") {
            insulineld1 = "de détémir BID";
        }
        if (insulineld === "glargine-100") {
            insulineld1 = "de glargine 100u/mL";
        }
        if (insulineld === "glargine-300") {
            insulineld1 = "de glargine 300u/mL";
        }
        if (insulineld === "dégludec") {
            insulineld1 = "de dégludec";
        }
        if (insulineld === "icodec") {
            insulineld1 = "d'icodec";
        }


        if (insulinelf === "nph-die") {
            insulinelf1 = "de NPH DIE";
        }
        if (insulinelf === "nph-bid") {
            insulinelf1 = "de NPH BID";
        }
        if (insulinelf === "détémir-die") {
            insulinelf1 = "de détémir DIE";
        }
        if (insulinelf === "détémir-bid") {
            insulinelf1 = "de détémir BID";
        }
        if (insulinelf === "glargine-100") {
            insulinelf1 = "de glargine 100u/mL";
        }
        if (insulinelf === "glargine-300") {
            insulinelf1 = "de glargine 300u/mL";
        }
        if (insulinelf === "dégludec") {
            insulinelf1 = "de dégludec";
        }
        if (insulinelf === "icodec") {
            insulinelf1 = "d'icodec";
        }

        let yolo1 = dose + "u " + insulineld1 + " donne " + malcom + "u " + insulinelf1;    
        document.getElementById("answer_B").textContent = yolo1;
}
