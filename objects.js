let city = "Paris";
let age = 34;
let isPresent = true;
const colors = ["yellow", "red", "purple"];

const user = {
    firstName: "John", // string
    lastName: "Doe",
    "date of birth": "01/01/01",
    age: 34, // number
    address: { number: 2, street: "Picadilly Circus", city: "London" }, // objet
    admin: true, // boolean
    premium: false,
    phones: ["01 45 46 32 11", "06 34 77 12 98"] // array

};

// Récupérer des valeurs dans un objet
// Méthode 1 : la notation pointée
console.log(user.lastName);
console.log(user.lastName[0]);
console.log(user.phones[1]);

// Méthode 2 : utiliser les clefs en tant que string dans des crochets :
console.log(user["premium"]);
console.log(user["age"]);
console.log(user["date of birth"]);

// méthode 3 : utiliser une variable en tant que clef :
const key = "address";
console.log(user[key]);

const key2 = "firstName"
console.log(user[key2]);



