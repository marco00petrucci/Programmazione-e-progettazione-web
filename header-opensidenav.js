//Menu dinamico allo scroll
function gestoreScroll() {
    if (window.matchMedia("(max-width: 800px)").matches) {
        document.getElementById("titolo").style.display = "block";
        document.getElementById("gif").style.display = "none";
        document.getElementById("menu").style.display = "block";
        document.getElementById("cercaHeader").style.display = "none";
        document.getElementById("header").style.padding = "2% 0 0";
        document.getElementById("menu").style.padding = "0% 6%";
    }
    if ((window.matchMedia("(min-width: 800px)").matches) && (document.documentElement.scrollTop > 80)) {
        document.getElementById("titolo").style.display = "none";
        document.getElementById("gif").style.display = "inline-block";
        document.getElementById("menu").style.display = "inline";
        document.getElementById("menu").style.padding = "0% 6%";
        document.getElementById("header").style.padding = "1%";
        document.getElementById("cercaHeader").style.display = "inline-block";
    }
    if ((window.matchMedia("(min-width: 800px)").matches) && (document.documentElement.scrollTop < 80)) {
        document.getElementById("titolo").style.display = "block";
        document.getElementById("gif").style.display = "none";
        document.getElementById("menu").style.display = "block";
        document.getElementById("cercaHeader").style.display = "none";
        document.getElementById("header").style.padding = "2%";
        document.getElementById("menu").style.padding = "0% 6%";
    }
    scrollFunction();
}

//Sidenav Search
function gestoreOpenCloseNav() {
    document.getElementById("cercaHeader").onclick = openNav;
    document.getElementById("closeBtn-icon").onclick = closeNav;
}

var nodoTestoCerca, nodoCercaBtn, nodoRisultato;

function gestoreLoadCercaTop() {
    document.getElementById("buttonTop").onclick = topFunction;
    nodoTestoCerca = document.getElementById("sideTestoCerca");
    nodoCercaBtn = document.getElementById("sideCercaBtn");
    nodoRisultato = document.getElementById("risultato");
    nodoCercaBtn.onclick = gestoreCerca;
    gestoreOpenCloseNav();
}

window.onload = gestoreLoadCercaTop;

window.onscroll = gestoreScroll;