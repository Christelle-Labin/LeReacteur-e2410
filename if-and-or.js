const password = "azerty";

if (password.length < 6 || password.length > 9) {
    console.log("password incorrect");
} else {
    console.log("OK");
}

// Le script au-dessus donne le même résultat que celui ci-dessous
// mais il est préférable d'opter pour celui ci-dessus avec || OU BIEN:

// if (password.length < 6) {
//     console.log("password incorrect"); 
// } else if (password.length > 9) {
//     console.log("password incorrect");
// } else {
//     console.log("OK");  
// }

// Deuxième possibilité afin que le script s'enclenche :
if (password.length <= 6 && password.length >= 9) {
    console.log("password incorrect");
} else {
    console.log("OK");
}