const string = "JavaScript";

// Deux moyens pour chercher une lettre à un index précis :

// Le premier :
console.log(string.charAt(0));

// Le deuxième :
console.log(string[0])


// l'index de la dernière lettre est toujours égal à la longueur de la chaîne cad -1
console.log(string.length);


// Création d'une boucle for
// Init index i =0 ; qui continuera TANT QUE i est inférieur à la longueur de ma chaine de caractères ; et qui à chaqsue tour incrémentera i de 1
for (let i = 0; i < string.length; i++) {
    console.log(i); 
}

// Création d'une boucle for afin d'afficher Javascript lettre après lettre
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);      
}

// Compteur : avec un console log
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (string[i] === "a") {
        console.log("C'est un a !");   
    }   
}

// Compteur : si vous devez compter les "a", utilisation d'un counterOf
counterOfA =0;
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (string[i] === "a") {
        counterOfA = counterOfA +1;
       }   
}
console.log(counterOfA);   
