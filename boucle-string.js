// Dans une string, chaque lettre porte un index : la première a l'index 0, la seconde index 1, etc
// jusquà la dernière lettre , qui possède comme index la longueur de la chaine -1

const str = "JavaScript";

// la boucle démarre à 0, index de la première lettre
// et termine à str.length -1, index de la dernière lettre
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);  // str[0] désigne la première lettre, str[1] la deuxième, etc...
}