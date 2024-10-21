// const sayName = (name) => {
//     console.log(`Hello ! My name is ${name} `); // utilisation de l'interpolation 
//                                                 // mais peut s'écrire egalement avec la concaténation console.log("Hello ! My name is + "name")
// }

// sayName("John"); // Affiche Hello ! My name is John 
// sayName("Chris"); // Affiche Hello ! My name is Chris


// Fontion argument condition
const sayName = (name) => {
    if (name === undefined) {
        console.log(`Hello ! My name is nobody`);
    } else {
        console.log(`Hello ! My name is ${name}`);  
    }
}

sayName("John"); // Affiche Hello ! My name is John 
sayName("Chris"); // Affiche Hello ! My name is Chris
sayName(); // Affiche Hello ! My name is nobody
