let box = document.getElementById("box");
let hits = 0;
let score=document.getElementById("score");
score.innerHTML="Score : "+hits;

box.onclick = function () {
   
    hits++;
    score.innerHTML="Score : "+hits;
    let col = Math.random() * (10 ** 8);
    let val1 = Math.random() * 90;
    let val2 = Math.random() * 90;
    // col%=19199999;

    col = parseInt(col);
    box.style.backgroundColor = '#' + col;

    box.animate([
        { marginLeft: val1 + "vw", marginTop: val2 + "vh" },
        { marginLeft: val2 + "vw", marginTop: val1 + "vh" }
    ], {
        duration: 1000,
        iterations: 10,
        
    });
}