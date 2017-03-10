//=== Génération de la grille // Début ===//
var tab = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var grille = document.getElementById('grille');
var win    = document.getElementById('win');
var cel    = 0;
var fin    = false;

for (var i = 0; i < tab.length; i++) {
    for (var j = 0; j < tab[i].length; j++) {
        var divElement       = document.createElement("div");
        divElement.className = "case";
        divElement.id        = "cel0" + cel++;
        divElement.setAttribute("onClick", "jouer(this)");
        grille.appendChild(divElement);
    }
}
//=== Génération de la grille // Fin ===//

//=== Gestion des Tours ===//
var nbTour = 0;
var joueur;

function tour() {
    nbTour++;
    if (nbTour % 2 === 0) {
        joueur = "O";
    }else {
        joueur = "X"
    }
    return joueur;
}

//=== Placer un signe SI la cellule est vide ===//
function jouer(cel) {
    if (cel.innerHTML == "" && !fin) {
        cel.innerHTML = tour();
    }
    gagnant();
}

var cellules = document.querySelectorAll('.case');

function resetGame() {
    for (var i = 0; i < cellules.length; i++) {
        cellules[i].innerHTML = "";
        win.innerHTML = " ";
        fin    = false;
        nbTour = 0
    }
}

function verif(a, b, c) {
    if (cellules[a].innerHTML !== '' &&
        cellules[a].innerHTML === cellules[b].innerHTML &&
        cellules[b].innerHTML === cellules[c].innerHTML)
    {
        win.innerHTML = cellules[a].innerHTML + " a gagné !";
        fin = true
        // alert(cellules[a].innerHTML + " a gagné !");
    }
}

function gagnant() {
    verif(0, 1, 2) ||
    verif(3, 4, 5) ||
    verif(6, 7, 8) ||
    verif(0, 3, 6) ||
    verif(1, 4, 7) ||
    verif(2, 5, 8) ||
    verif(0, 4, 8) ||
    verif(2, 4, 6);

}
