const string = "JavaScript";

const firstLetter = string[0];
console.log(firstLetter);  // J

const secondLetter = string.charAt(2);
console.log(secondLetter); // v

const majLanguage = string.toUpperCase();
console.log(majLanguage); // JAVASCRIPT

const lowerLanguage = string.toLowerCase();
console.log(lowerLanguage); // javascript

const slicedString = string.slice(0,4); // attention l'indice de caractère de fin est exclu d'où indication d
console.log(slicedString); // Java

// Les méthodes peuvent s'enchaîner :
const string2 = "Bonjour".slice(0,3).toUpperCase();
console.log(string2);


// Cas spécifique avec CamelCase, nous puvons extraire une partie de la string, soit le début, soit la fin juste avec UN SEUL paramètre.
const endOfString = string.slice(4);
console.log(endOfString); // Script

// Remplacer une partie d'une chaîne de caractères:
// Fisrt exemple
const modifiedString = string.replace("JavaScript","Python");
console.log(modifiedString); // Python
// Second exemple
const modifiedString2 = string.replace()
console.log(modifiedString2); // JxvaScript
//Third exemple
const modifiedString3 = string.replaceAll("a","x");
console.log(modifiedString3); // JxvxScript

const indexOfI = string.indexOf("i");
console.log(indexOfI); // 7
console.log(string[indexOfI]); // i

// Suppression des espaces et des tabulations en début et fin de string
let stringB = "   Bienvenue   ";
console.log(stringB); // Espace     Bienvenue     Espace

stringB = stringB.trim();
console.log(stringB); // Bienvenue

// Création d'un tableau à partir d'une string
// First exemple
const stringArray = "How are you doing today ?"
const newStringArray = stringArray.split(" "); // Le séparateur est un espace donc nouvelle variable avec tableau + nouvel élément => nouveau mot
console.log(newStringArray); // [ 'How', 'are', 'you', 'doing', 'today', '?' ]
//Second exemple
const stringArray2 = "Le Reacteur"
const newStringArray2 = stringArray2.split(""); // Le séparateur est une string vide donc nouvelle variable avec tableau + nouvel élément => chaque nouveau caractère
console.log(newStringArray2); // ['L', 'e', ' ', 'R','e', 'a', 'c', 't','e', 'u', 'r']

// Création d'une chaine de caractères vide
let newStr = ""; // variable avec une chaine de caractère vide
newStr = newStr + "T";
//console.log(newStr); // T
newStr = newStr + "O";
console.log(newStr); // TO






