//Cerca
var option = [{
    testo: "Il Burlamacco",
    descrizione: "e' la maschera ufficiale del Carnevale di Viareggio, nata nel 1930 dalla penna del pittore viareggino Uberto Bonetti."
},
{
    testo: "Ondina",
    descrizione: "e' il simbolo dell'estate e della costa viareggina, \"compagna\" di Burlamacco, apparsa per la prima volta negli anni '30."
},
{
    testo: "La Burlamacca",
    descrizione: "e' la sbeffeggiante bandiera ufficiale del Carnevale di Viareggio, issata sui viali a mare per la prima volta nel Carnevale 1961... Marameo!"
},
{
    testo: "I carri",
    descrizione: "del Carnevale di Viareggio possono essere di due categorie: quelli di prima e di seconda, diverse per dimensioni."
},
{
    testo: "Le maschere",
    descrizione: "del Carnevale di Viareggio possono essere di due categorie: quelle di gruppo e quelle isolate. In particolare, le prime sono un insieme di sei complessi mascherati singoli."
},
{
    testo: "I premi",
    descrizione: "vengono assegnati ogni anno alla fine delle sfilate. I carri e le maschere vengono valutati da una giuria in base ad una classifica di punteggi in grado poi di far avanzare o retrocedere i carri o le maschere di categoria."
}
]

function calcolaListaDescrizioni(items) {
    var listaDescrizioni = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var s = item.testo + " " + item.descrizione;
        listaDescrizioni.push(s);
    }
    return listaDescrizioni;
}

function gestoreCerca() {
    var testo = document.getElementById("sideTestoCerca").value;
    var items = ricercaTesto(testo), listaDescrizioni;
    if (items.length != 0) listaDescrizioni = calcolaListaDescrizioni(items);
    else listaDescrizioni = ["Nessun risultato"];
    creaLista(document.getElementById("risultato"), listaDescrizioni);
}

function creaLista(nodoLista, elementi) {
    rimuoviFigli(nodoLista);
    for (var i = 0; i < elementi.length; i++) {
        var nodoElemento = document.createElement("p");
        nodoLista.appendChild(nodoElemento);
        var nodoTesto = document.createTextNode(elementi[i]);
        nodoElemento.appendChild(nodoTesto);
    }
}

function rimuoviFigli(nodo) {
    while (nodo.childNodes.length > 0) {
        nodo.removeChild(nodo.firstChild);
    }
}

function ricercaTesto(testo) {
    var items = [];
    for (var i = 0; i < option.length; i++) {
        var item = option[i];
        if (item.testo == testo) items.push(item)
    }
    return items
}

//Sidenav Search
function openNav() {
    document.getElementById("sidenav").style.width = "250px"
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0"
}

//Bottone Go to Top --> Mostra quando la pagina viene scrollata di 90px
function scrollFunction() {
    if (document.documentElement.scrollTop > 500) document.getElementById("buttonTop").style.display = "block"
    else document.getElementById("buttonTop").style.display = "none"
}

//Bottone 'Go to Top' --> Vai all'inizio della pagina
function topFunction() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}