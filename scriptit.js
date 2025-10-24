valmis = 0
function painallus() {
    if (valmis === 0) {
        näytä();    
    } else if (valmis === 1) {
        valmis = 0
        nollaa();
    }
}
function nollaa() {
    const x = document.getElementById("content");
    x.style.display = "none";
    const nappiteksti = document.getElementById("nappiteksti");
    nappiteksti.style.letterSpacing = "1.5px";
    nappiteksti.style.color = "rgba(0, 0, 0, 0.632)";
    nappiteksti.style.fontSize = "15.6px";
    nappiteksti.style.fontWeight = "bold";
    document.getElementById("nappiteksti").innerHTML = "Laske";
}
function näytä() {
    const x = document.getElementById("content");
    x.style.display = "grid";
    laske();
    ohjeet();
    /// Tulikkonää kattellemmaan mun tihirusteluja
}
function laske() {
    hf = document.getElementById("hf").value;
    spo2 = document.getElementById("spo2").value;
    addito2 = document.getElementById("addito2").checked;
    rrsys = document.getElementById("rrsys").value;
    rrdia = document.getElementById("rrdia").value;
    syke = document.getElementById("syke").value;
    taj = document.getElementById("taj").checked;
    temp = document.getElementById("temp").value;

    pisteet = 0;

    function range(x, min, max) {
        return x >= min && x <= max;
    }

    if (range(hf, 12, 20)) {
        pisteet = pisteet + 0
        omahf = 0
    } else if  (range(hf, 9, 11)) {
        pisteet = pisteet + 1
        omahf = 1
    } else if (hf <= 8) {
        pisteet = pisteet + 3
        omahf = 3
    } else if (range(hf, 21, 24)){
        pisteet = pisteet + 2    
        omahf = 2
    } else if (hf >= 25) {
        pisteet = pisteet + 3
        omahf = 3
    } 


    if (spo2 <= 91) {
        pisteet = pisteet + 3

        omaspo2 = 3
    } else if (range(spo2, 92, 93)) {
        pisteet = pisteet + 2

        omaspo2 = 2
    } else if (range(spo2, 94, 95)) {
        pisteet = pisteet + 1

        omaspo2 = 1
    } else if (spo2 >= 96) {
        pisteet = pisteet + 0
        omaspo2 = 0
    }


    if (addito2.checked) {
        pisteet = pisteet + 2
        omaaddito2 = 2
    }


    if (rrsys <= 90) {
        pisteet = pisteet + 3
        omarrsys = 3
    } else if (range(rrsys, 91, 100)) {
        pisteet = pisteet + 2
        omarrsys = 2
    } else if (range(rrsys, 101, 110)) {
        pisteet = pisteet + 1
        omarrsys = 1
    } else if (range(rrsys, 111, 219)) {
        pisteet = pisteet + 0
        omarrsys = 0
    } else if (rrsys >= 220) {
        pisteet = pisteet + 3
        omarrsys = 3
    }


    if (syke <= 40) {
        pisteet = pisteet + 3
        omasyke = 3
    } else if (range(syke, 41, 50)) {
        pisteet = pisteet + 1
        omasyke = 1
    } else if (range(syke, 51, 90)) {
        pisteet = pisteet + 0
        omasyke = 0
    } else if (range(syke, 91, 110)) {
        pisteet = pisteet + 1
        omasyke = 1
    } else if (range(syke, 111, 130)) {
        pisteet = pisteet + 2
        omasyke = 2
    } else if (syke >= 131) {
        pisteet = pisteet + 3
        omasyke = 3
    }


    if (taj.checked) {
        pisteet = pisteet + 3
        omataj = 0
    }


    if (temp <= 35.0) {
        pisteet = pisteet + 3
        omatemp = 3
    } else if (range(temp, 35.1, 36.0)) {
        pisteet = pisteet + 1
        omatemp = 1
    } else if (range(temp, 36.1, 38.0)) {
        pisteet = pisteet + 0
        omatemp = 0
    } else if (range(temp, 38.1, 39.0)) {
        pisteet = pisteet + 1
        omatemp = 1
    } else if (temp >= 39.1) {
        pisteet = pisteet + 2
        omatemp = 2
    }

    /*var totOma = omatemp + omataj + omasyke + omarrsys + omaaddito2 + omaspo2 + omahf*/

    const pisteElem = document.getElementById("pisteetYht");
    document.getElementById("pisteetYht").innerHTML = "NEWS-pisteet:" + pisteet;
    pisteElem.style.fontSize = "24px";
    pisteElem.style.fontWeight = "bold";

    const nappiteksti = document.getElementById("nappiteksti");
    document.getElementById("nappiteksti")
    nappiteksti.style.letterSpacing = "1.5px";
    nappiteksti.style.color = "rgba(0, 0, 0, 0.632)";
    nappiteksti.style.fontSize = "15.6px";
    nappiteksti.style.fontWeight = "bold";
    document.getElementById("nappiteksti").innerHTML = "Nollaa";

    
    valmis = 1
}       

/// Ei käytössä tällä hetkellä
///    function tulokset() {
///        function range(x, min, max) {
///            return x >= min && x <= max;
///        }
///        if (valmis === 1) {
///            document.getElementById("potvit").innerText = "Vitaalit:"
///            //document.getElementById("AB").innerHTML = "A + B"
///            document.getElementById("hf").innerHTML = "Hengitysfrekvenssi: " + hf + "/min";
///            document.getElementById("spo2").innerHTML = "Happisaturaatio: " + spo2 + " %";
///            document.getElementById("addito2").innerHTML = "Lisähappi käytössä: " + addito2;
///            //document.getElementById("C").innerHTML = "C"
///            if (rrdia !== 0) {
///                document.getElementById("RR").innerHTML = "Verenpaine: " + rrsys + "/" + rrdia + " mmhg";
///            } else {
///                document.getElementById("rrsys").innerHTML = "Sys. verenpaine: " + rrsys + " mmHg";
///            }
///            document.getElementById("syke").innerHTML = "Syke: " + syke;
///            //document.getElementById("D").innerHTML = "D"
///            document.getElementById("taj").innerHTML = "Tajunnantaso:" + taj; 
///            //document.getElementById("E").innerHTML = "E"
///         document.getElementById("temp").innerHTML = "Lämpö: " + temp + " °C";
///        }
///    } 
///     
function ohjeet() {
    function range(x, min, max) {
        return x >= min && x <= max;
    }
    document.getElementById("ohjeotsikko").innerHTML = "Ohjeet:"
        if (pisteet >= 7) {
            document.getElementById("ohje1").innerHTML = "TEE MET-HÄLYTYS!<br>";
            document.getElementById("ohje2").innerHTML = "- Hälytä hoitava lääkäri!<br> - Laske NEWS-pisteet 0-2 tunnin välein. Jatkuva seuranta.";

        } else if (range(pisteet, 5, 6)) {
            document.getElementById("ohje1").innerHTML = " - Riskiluokka: Kohtalainen<br><br> - Informoi muita hoitajia potilaan voinnin muutoksista.<br> - Konsultoi lääkäriä jatkotoimista<br> - Laske NEWS-pisteet vähintään 2-4 tunnin välein";
            document.getElementById("ohje2").innerHTML = " - Aloita tarvittaessa välittömät hoitotoimenpiteet!";

        } else if (range(pisteet, 1, 4)) {
            document.getElementById("ohje1").innerHTML = " - Riskiluokka: Matala<br> - Informoi muita hoitajia potilaan voinnin muutoksista.<br> - Laske NEWS-pisteet vähintään 8 tunnin välein.";
            document.getElementById("ohje2").innerHTML = ""

        } else if (pisteet === 0) {
            document.getElementById("ohje1").innerHTML = " - Riskiluokka: Matala<br><br> - Laske NEWS-pisteet vähintään 12 tunnin välein."
            document.getElementById("ohje2").innerHTML = ""
        }
}