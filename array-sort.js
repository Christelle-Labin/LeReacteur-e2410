// La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. 
// ATTENTION // Le tri s'effectue par défaut selon les points de code Unicode de la chaine de caractères => VOIR TABLE ASCII
const tab = ["e", "b", "a", "c"];
tab.sort();
console.log(tab); // [ 'a', 'b', 'c', 'e' ]

// Si présence de casse différente (minuscules et majuscules), afin d'obtenir un tri dans l'ordre alphabétique, 
//utilisation de la méthode .localeCompare
// const array = ["E", "b", "a", "C"];
// array.sort(function (a, b) {
//     return a.localeCompare(b);
// });
// console.log(array); // [ 'a', 'b', 'C', 'E' ]

        //  VV   OU   VV  //
// utilisation en fonction fléchée = même résultat
const array = ["E", "b", "a", "C"];
array.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(array); // [ 'a', 'b', 'C', 'E' ]


// ATTENTION // Comportement singulier
// Comportement particulier car le tri n'est pas fait: 18. Car selon la table Ascii, le nombre 18 est décomposé 1 puis 8
// const tab2 = [1, 5, 2, 18, 6]; // [ 1, 18, 2, 5, 6 ] //  
// tab2.sort();
// console.log(tab2);
// Afin de palier à ce comportement et d'obtenir le tri escompté
const tab2 = [1, 5, 2, 18, 6]; // [ 1, 18, 2, 5, 6 ] //  
tab2.sort((a, b) => {
    return a - b;
});
console.log(tab2);
