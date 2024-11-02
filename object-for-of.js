const tab =["a", "b", "c"];

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 34,
};

// la boucle for...of permet de boucler sur un tableau sans avoir à "paramétrer" de variable i :
// for (let i = 0; i < tab.length; i++) {
//     console.log(tab[i]);
    
// }
// for (const element of tab) {
//     console.log(element); // a puis b puis c    
// }

for (const element of Object.keys(user)) {
    console.log(element); // firstname, lastName, age    
}

// for (const key of Object.keys(user)) {
//     console.log(user[key]); // John, Doe, 34    
// }