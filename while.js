//Incrémentation
let counter = 1;

console.log("Avant");

while (counter < 6) {
    // dans ces accolades, se situera le code qui sera répété
    console.log(counter);
    counter = counter + 1; // incrémentation
}

console.log("Après");



console.log("Début");

// Décrémentation
let soustractCounter = 0;
let limit = -6;

while (soustractCounter > limit) {
    // dans ces accolades, se situera le code qui sera répété
    console.log(soustractCounter);
    soustractCounter = soustractCounter - 1; // décrémentation
}

console.log("Fin");
