let box = document.getElementById("box");
let hits = 0;
let score = document.getElementById("score");
let tc = 0;
let body = document.getElementById("body");
console.log(body);
let result = document.createElement("div");
let colList = ['red', '#FFF033', '#FF339E', '#71FF33', '#33FFF7'];
body.onclick = function () {
    console.log(tc);
    tc++;
    score.innerHTML = "Score : " + hits + "/" + tc;
    if (tc == 50) {

        result.style.display = "flex";
        result.style.fontSize = "2rem";
        result.style.justifyContent = "center";
        result.style.backgroundColor = colList[hits%colList.length];
        result.style.alignItems = "center";
        result.style.height = "90vh";
        result.style.width = "90vw";
        result.style.borderRadius = "15px";
        result.style.position = "absolute";
        result.style.top = "5vh";
        result.style.left = "5vw";
        result.innerHTML = "Your Score: " + hits + "/" + tc;

        // result.style.boxShadow=""
        body.appendChild(result);
        btn
    }
}
score.innerHTML = "Score : " + hits + "/" + tc;
box.style.position = "absolute";

box.onclick = function () {

    hits++;
    let val1 = parseInt(Math.random() * 100 + Date.now());
    let val2 = Math.random() * 100;
    console.log(Date.now());
    val1 %= 95;
    val2 %= 95;
    // col%=19199999;
    box.style.backgroundColor = colList[hits % colList.length];
    if (hits % 2 != 0) {
        box.animate([
            { left: val1 + "vw", top: val2 + "vh" },
            { left: val2 + "vw", top: val1 + "vh" }
        ], {
            duration: 1500,
            iterations: 10,

        });
    }
    else {
        box.animate([
            { right: val1 + "vw", bottom: val2 + "vh" },
            { right: val2 + "vw", bottom: val1 + 10 + "vh" }
        ], {
            duration: 1000,
            iterations: 10,

        });
    }

}
let btn = document.createElement('div');
btn.innerHTML = "RESTART";
btn.style.position = "fixed";
btn.style.top = "5vh";
btn.style.height = "5vh";
btn.style.width = "10vw";
btn.style.justifyContent = 'center';
btn.style.display = "flex";
btn.style.alignItems = "center";
btn.style.backgroundColor = "pink";
btn.onclick = function () {
    result.style.display = 'none';
    tc = -1;
    hits = 0;
}
body.appendChild(btn);