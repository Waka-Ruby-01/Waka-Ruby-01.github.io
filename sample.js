var roulette;
function start(){
    var result = document.getElementById("result");
    var omikuji = ["ぬいぐるみ", "本", "時計", "イヤホン", "ペン", "くし", "スマホ", "手帳"];
    roulette = setInterval(function(){
        var random = Math.round(Math.random() * (omikuji.length - 1));
        result.innerHTML = omikuji[random];
    }, 10);
}

function stop(){
    clearInterval(roulette);
}
