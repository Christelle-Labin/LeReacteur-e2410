// Avec les conditions && et || il est primordial de tester le script,
// avec l'exemple ci-dessous, il sera nécessaire de tester la variable "a" en modiant sa valeur 
// par exemple, let a = 7; let a = 2; let a = 12; etc.

let a = 7;

// Pour reprendre ce qui a été dit plus haut, on se rend compte que 
// que || doit vérifier les 2 conditions, donc cela ne peut fonctionner
if (a < 5 || a > 10) {
    console.log("c'est good");
} else {
    console.log("is no good");
}

// on veut que a soit entre 5 et 10
if (a > 5 && a < 10) {
    console.log("c'est good");
} else {
    console.log("is no good");
}
