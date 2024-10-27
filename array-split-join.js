// la méthode .split() permet de créer un tableau à partir d'une chaîne de caractères. 
// Chaque fois que le caractère mis entre les parenthèse sera détecté, un nouvel élément sera créé au sein du tableau obtenu.

const str = "How are you doing today ?";

// const tab =str.split();
// console.log(tab); // [ 'How are you doing today ?' ]

// afin de diviser la string, on peut supprimer les espaces en intégrant ceci (" ")
// const tab =str.split(" ");
// console.log(tab); // [ 'How', 'are', 'you', 'doing', 'today', '?' ]

// si ajout d'un argument, création d'un nouvel élément 
// et en plus si l'argument en question était déjà présent dans la string, l'argument est supprimé.
// const tab =str.split("o");
// console.log(tab); // [ 'H', 'w are y', 'u d', 'ing t', 'day ?' ]

// Création d'un tableau de lettres qui peuvent être manipulées
// const tab = str.split("");
// console.log(tab);
// [
//     'H', 'o', 'w', ' ', 'a', 'r',
//     'e', ' ', 'y', 'o', 'u', ' ',
//     'd', 'o', 'i', 'n', 'g', ' ',
//     't', 'o', 'd', 'a', 'y', ' ',
//     '?'
//   ]

// Chaque élément du tableau peut être réassigné :
// const tab = str.split("");
// tab[0] = "X";
// console.log(tab);
// [
//     'X', 'o', 'w', ' ', 'a', 'r',
//     'e', ' ', 'y', 'o', 'u', ' ',
//     'd', 'o', 'i', 'n', 'g', ' ',
//     't', 'o', 'd', 'a', 'y', ' ',
//     '?'
//   ]


// Création d'une boucle sur le tableau afin de manipuler chaque élément comme bon nous semble
// const tab = str.split("");
// console.log(tab);

// for (let i = 0; i < tab.length; i++) {
// console.log(i); // Il y a bien 24 éléments dans le tableau [FORMAT NUMERIQUE]
// [i] varie de 0 à 24. Donc un tour où i vaut 0, puis au deuxième tour, [i] vaut 1, etc...
// }
        // VV   DIFFERENT   VV
// const tab = str.split("");
// console.log(tab);

// for (let i = 0; i < tab.length; i++) {
// console.log(tab[i]); // Il y a bien 24 éléments dans le tableau [FORMAT LETTRES]
// //[i] varie de 0 à 24. Donc un tour où i vaut "H", puis au deuxième tour, l'index [i] vaut "o", etc...
// }

// Si je décide de réassigner l'index [i]
// for (let i = 0; i < tab.length; i++) {
//     tab[i] = "X";
//     console.log(tab); // tableau avec index [i] réassigné en "X"
//         }


// AVEC DES CONDITIONS
const tab = str.split("");
console.log(tab);

for (let i = 0; i < tab.length; i++) {
    if (tab[i] === "o") { // si l'index [i] = "o"
            tab[i] = "X" ;   // je peux décider de remplacer tous les "o" par "X"
    }
}
//console.log(tab);

// la méthode .join() permet de retransformer un tableau en chaîne de caractères
console.log(tab.join("")); // HXw are yXu dXing tXday ?   
    // VV   DIFFERENT   VV
console.log(tab.join());   // H,X,w, ,a,r,e, ,y,X,u, ,d,X,i,n,g, ,t,X,d,a,y, ,?

