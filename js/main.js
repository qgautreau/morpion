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

var nbTour = 0;
var joueur;

function tour(){
    nbTour++;
    if(nbTour % 2 == 0){
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

};
