// cas particulier de concaténation
let a = 45;
console.log(a);

let b = "3";

// ATTENTION les variables sont converties automatiquement en string : 
// parce qu'il y a eu utilisation du signe + entre un chiffre et un string
const total = a + b;
console.log(total);

// de même avec un booléen et un string, la conversion en string est effective :
let c = true;
let d = "7"
const result = c + d;
console.log(result);

// pour connaitre quel est le type de ma variable :
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(typeof a + 6); // "number" ou "string" ou "undefined" ... etc

// pour convertir en number, utilisation de Number()
const sum = a + Number(b);
console.log(sum);

// pour convertir en string, utilisation de String() ou .toString()
const otherSum = String(3) + String(6);
console.log(otherSum);

let number = 33;
number = number.toString();
console.log(typeof number);
