let array = ["green"];
console.log(array); // [ 'green' ]

// ATTENTION // sans crochets, tout se transforme en chaine de caracatères
array = array + "purple"; // greenpurple
console.log(array);


const colors =["green", "red", "blue"];

// 2 méthodes pour ajouter un élément du tableau :
// Méthode : ajouter un ou plusieurs éléments à la fin du tableau :
colors.push("pink");
console.log(colors);
// Méthode : ajouter un élément au début du tableau :
colors.unshift("black");
console.log(colors);

// Méthode : supprimer le premier élément du tableau :
colors.pop();
console.log(colors);

// Méthode : supprimer le dernier élément du tableau :
colors.shift();
console.log(colors);



// Méthode : supprimer le dernier élément du tableau :
// const index = colors.indexOf("red");
// console.log(index); // 1

// si élément non présent dans le tableau => retour de -1
const index = colors.indexOf("purple");
console.log(index);
            // VV OU VV
if (colors.indexOf("purple") === -1) {
    // SI "purple" = -1, ALORS "purple" n'est pas présent dans le tableau
}

// Afin de connaître le nombre d'éléments d'un tableau 
let newColors = ["green", "red", "blue"];
newColors = newColors.push();
console.log(newColors); // 3
