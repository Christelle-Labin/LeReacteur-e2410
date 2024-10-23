console.log("Début");

// déclaration de la variable en dehors du if
const password = null;

// intégration d'une condition qui `sécurise`notre script
if (password) {
    if (password.length > 9) {
        console.log("mot de passe trop long");
    } else {
    console.log("OK"); 
}

}

console.log("Fin");
