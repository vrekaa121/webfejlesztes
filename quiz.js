document.getElementById("ertekeles").addEventListener("click", pontszamitas);

function pontszamitas() {
    let pont = 0

    const a = document.getElementById("helyes1").checked;

    if (a == 1) {
        pont += 1;
        document.getElementById("valasz1").innerHTML = "A válasz helyes";
        document.getElementById("valasz1").style.color = "green";
    }
    else {
        document.getElementById("valasz1").innerHTML = "A válasz helytelen";
        document.getElementById("valasz1").style.color = "red";
    }

    const b = document.getElementById("helyes2").value;

    if (b == 7) {
        pont += 1;
        document.getElementById("valasz2").innerHTML = "A válasz helyes";
        document.getElementById("valasz2").style.color = "green";
    }
    else {
        document.getElementById("valasz2").innerHTML = "A válasz helytelen";
        document.getElementById("valasz2").style.color = "red";
    }

    const c = document.getElementById("helyes3").checked;

    if (c == 1) {
        pont += 1;
        document.getElementById("valasz3").innerHTML = "A válasz helyes";
        document.getElementById("valasz3").style.color = "green";
    }
    else {
        document.getElementById("valasz3").innerHTML = "A válasz helytelen";
        document.getElementById("valasz3").style.color = "red";
    }

    const d = document.getElementById("helyes4").value;

    if (d == "koffein") {
        pont += 1;
        document.getElementById("valasz4").innerHTML = "A válasz helyes";
        document.getElementById("valasz4").style.color = "green";
    }
    else {
        document.getElementById("valasz4").innerHTML = "A válasz helytelen";
        document.getElementById("valasz4").style.color = "red";
    }

    const e = document.getElementById("helyes5").checked;

    if (e == 1) {
        pont += 1;
        document.getElementById("valasz5").innerHTML = "A válasz helyes";
        document.getElementById("valasz5").style.color = "green";
    }
    else {
        document.getElementById("valasz5").innerHTML = "A válasz helytelen";
        document.getElementById("valasz5").style.color = "red";
    }

    const f = document.getElementById("helyes6_1").checked;
    const g = document.getElementById("helyes6_2").checked;
    const h = document.getElementById("helyes6_3").checked;
    const i = document.getElementById("helyes6_4").checked;
    const j = document.getElementById("helytelen6_1").checked;
    const k = document.getElementById("helytelen6_2").checked;
    const l = document.getElementById("helytelen6_3").checked;

    if (f == 1 && g == 1 && h == 1 && i == 1 && j == 0 && k == 0 && l == 0) {
        pont += 1;
        document.getElementById("valasz6").innerHTML = "A válasz helyes";
        document.getElementById("valasz6").style.color = "green";
    }
    else {
        document.getElementById("valasz6").innerHTML = "A válasz helytelen";
        document.getElementById("valasz6").style.color = "red";
    }

    const m = document.getElementById("lista").selectedIndex;

    if (m == 2) {
        pont += 1;
        document.getElementById("valasz7").innerHTML = "A válasz helyes";
        document.getElementById("valasz7").style.color = "green";
    }
    else {
        document.getElementById("valasz7").innerHTML = "A válasz helytelen";
        document.getElementById("valasz7").style.color = "red";
    }

    const n = document.getElementById("helyes8").checked;

    if (n == 1) {
        pont += 1;
        document.getElementById("valasz8").innerHTML = "A válasz helyes";
        document.getElementById("valasz8").style.color = "green";
    }
    else {
        document.getElementById("valasz8").innerHTML = "A válasz helytelen";
        document.getElementById("valasz8").style.color = "red";
    }

    const o = document.getElementById("helyes9").value;

    if (o == "piros") {
        pont += 1;
        document.getElementById("valasz9").innerHTML = "A válasz helyes";
        document.getElementById("valasz9").style.color = "green";
    }
    else {
        document.getElementById("valasz9").innerHTML = "A válasz helytelen";
        document.getElementById("valasz9").style.color = "red";
    }

    const p = document.getElementById("helyes10").checked;

    if (p == 1) {
        pont += 1;
        document.getElementById("valasz10").innerHTML = "A válasz helyes";
        document.getElementById("valasz10").style.color = "green";
    }
    else {
        document.getElementById("valasz10").innerHTML = "A válasz helytelen";
        document.getElementById("valasz10").style.color = "red";
    }

    if (pont == 10) {
        document.getElementById("eredmeny").innerHTML = `${pont} pontot értél el a 10-ből! <br><br> Kiváló teljesítmény, megérdemelsz egy csésze finom kávét!`;
    }
    else if (pont > 7) {
        document.getElementById("eredmeny").innerHTML = `${pont} pontot értél el a 10-ből! <br><br> Szuper teljesítmény, látszik, hogy nem áll tőled távol a kávézás!`;
    }
    else if (pont > 5) {
        document.getElementById("eredmeny").innerHTML = `${pont} pontot értél el a 10-ből! <br><br> Ügyes vagy, majdnem mindent tudsz a kávék világáról!`;
    }
    else if (pont > 3) {
        document.getElementById("eredmeny").innerHTML = `${pont} pontot értél el a 10-ből! <br><br> Egész jó, legközelebb kávézás közben olvasgass még egy kicsit a kávékról!`;
    }
    else if (pont > 1) {
        document.getElementById("eredmeny").innerHTML = `${pont} pontot értél el a 10-ből! <br><br> Ne add fel, igyál egy kávét, és próbáld meg újra!`;
    }
    else {
        document.getElementById("eredmeny").innerHTML = `${pont} pontot értél el a 10-ből! <br><br> Ne csüggedj, sosem késő elkezdeni beleásni magad a kávék világába!`;
    }

}