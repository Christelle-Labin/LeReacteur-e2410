// retour à la ligne dans une string avec guillemets ou backticks: \n
const text = "Hello \nWorld !";
console.log(text);

// concaténation

let age = "30"
let firstName = "Chris";
//console.log("Je m'appelle Alexis et j'ai 30 ans");

// concaténation avec les noms de variables :
// const sentence = "Je m'appelle " + firstName + " et j'ai " + age + " ans."
// console.log(sentence);

// concaténation avec les backtiks => une interpolation
// => concaténation avec la valeur (cad le contenu) des variables :
const sentence = `Je m'appelle ${firstName} et j'ai ${age} ans.`
console.log(sentence);
