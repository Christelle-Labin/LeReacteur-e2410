//const isKeyInObject = (obj, str) => {

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 34,
    address: { number: 2, street: "Picadilly Circus", city: "London" },
    admin: true,
    premium: false,
    phones: ["01 45 46 32 11", "06 34 77 12 98"]
};

//          *****   Toutes ces méthodes nous retournent des tableaux    *****
// Récupérer toutes les clefs d'un objet : Object.keys(object)
const keys = Object.keys(user);
console.log(keys); // ['firstName', 'lastName', 'age', 'address', 'admin', 'premium', 'phones']

// Récupérer toutes les valeurs d'un objet : Object.values(object)
const values = Object.values(user);
console.log(values); // ['John', 'Doe', 34, { number: 2, street: 'Picadilly Circus', city: 'London' }, true, false, [ '01 45 46 32 11', '06 34 77 12 98' ]]

// Récupérer toutes les paires clefs/valeurs d'un objet : Object.entries(object)
const entries = Object.entries(user);
console.log(entries);

// Une fois un tableau obtenu, nous obtenons une longueur et donc, nous pouvons "boucler" dessus :
for (let i = 0; i < keys.length; i++) {
console.log(keys[i]);
console.log(user[keys[i]]);
   
}