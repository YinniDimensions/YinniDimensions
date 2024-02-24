window.lvl = 1;
window.exp = 0;
window.max_hp = 100;
window.hp = 100;
window.def = 0;
window.atk = 5;
window.spd = 10;
window.coins = 0;

function refresh() {
    document.getElementById("lvl").innerHTML = lvl;
    document.getElementById("max_hp").innerHTML = max_hp;
    document.getElementById("hp").innerHTML = hp;
    document.getElementById("def").innerHTML = def;
    document.getElementById("atk").innerHTML = atk;
    document.getElementById("spd").innerHTML = spd;
    document.getElementById("coins").innerHTML = coins;
}

window.saves=0;

function menu_start() {
    window.location.href = "game.html";
}
