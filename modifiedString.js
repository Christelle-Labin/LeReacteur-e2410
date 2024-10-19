// Création d'une chaine de caractères vide
// let newStr = ""; // variable avec une chaine de caractère vide
// newStr = newStr + "T";
// //console.log(newStr); // T
// newStr = newStr + "O";
// console.log(newStr); // TO



// // Pour être plus performant, on peut effectuer ceci
// const language = "JavaScript";

// let newStr = ""; // création d'une variable avec une une chaine de caractère vide

// for (let i = 0; i < language.length; i++) {
//     // console.log(language.charAt(i)); // verification
//     newStr = newStr + language.charAt(i);   
// }

// console.log(newStr); // ATTENTION ne pas intégrer le console log dans la boucle, sinon pyramide



// Pour être plus précis dans le contrôle de CHAQUE caractère, on peut effectuer ceci
const language = "JavaScript";

let newStr = ""; // création d'une variable avec une une chaine de caractère vide

for (let i = 0; i < language.length; i++) {
    // console.log(language.charAt(i)); // verification
    if (language.charAt(i) === "a") {
        newStr = newStr + "xXx";   
    } else if (language.charAt(i) === "p") {
        newStr = newStr + "uWu";
    } else {
    newStr = newStr + language.charAt(i);   
}
}
console.log(newStr); // ATTENTION ne pas intégrer le console log dans la boucle, sinon pyramide
