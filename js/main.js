var grid = [["","",""],
["","",""],
["","",""]];
var grille = $("#grille");
var cell = 0;
var win = $("#win");
var fin = false;

for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
        var divEl = $("<div>").attr({
            class: "case",
            id:"cell0" + cell++,
            onclick:"jouer(this)"
        }).appendTo(grille);

    }
}

var nbTours = 0;
var joueur;

function tour(){
    nbTours++;
    if(nbTours % 2 == 0){
        joueur = "O";
    }
    else{
        joueur = "X";
    }
    return joueur;
};

function jouer(curntCell){
    if($(curntCell).html() == "" && !fin){ //fin == false
        $(curntCell).html(tour())
    }
    gagnant();
};

var cases = $(".case");

function resetGame(){
    for(var i = 0; i < cases.length; i++){
        $(cases[i]).html("");
    }
    nbTours = 0;
    fin = false;
};

function verif(a,b,c) {
    if($(cases[a]).html() !== "" && $(cases[a]).html() == $(cases[b]).html() && $(cases[b]).html() == $(cases[c]).html()){
        fin = true;
        win.html($(cases[a]).html() + " " + "a gagné");
    }
};

function gagnant(){
    verif(0,1,2)||
    verif(3,4,5)||
    verif(6,7,8)||
    verif(0,3,6)||
    verif(1,4,7)||
    verif(2,5,8)||
    verif(0,4,8)||
    verif(2,4,6);
};
