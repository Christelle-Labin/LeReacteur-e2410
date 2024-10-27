// strings : 
let firstname = "Alexis";
//2 méthodes pour index
console.log(firstname[0]); //Cette méthode peut etre utilisée aussi bien pour les string que pour les tableaux
// VV ou VV
console.log(firstname.charAt(0)); // ATTENTION fonctionne uniquement avec les string et non les tableaux


// tableaux : 
// un tableau est constitué d'éléments séparés poar des virgules
const array = [];
//console.log(array);

const list = ["Alexis", 45, null, undefined, true, []];
console.log(list[1]); // 45


const colors = ["red", "green", "yellow", "blue"];
console.log(colors[0]); // red

// mais on peut chercher dans un élément qui est une string, un charAt
console.log(colors[0].charAt(1)); // e
// VV ou VV
console.log(colors[0][1]);

// longueur d'un tableau
const length = colors.length;
//console.log(length); // le tableau a une longueur de 4 éléments

