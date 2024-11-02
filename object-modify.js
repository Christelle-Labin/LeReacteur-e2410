let user = {
    firstName: "John",
    lastName: "Doe",
    "date of birth": "01/01/01",
    age: 34,
    address: { number: 2, street: "Picadilly Circus", city: "London" },
    admin: true,
    premium: false,
    phones: ["01 45 46 32 11", "06 34 77 12 98"] // array
};
console.log(user);

// Méthode 1 : Modifier OU créer
user.firstName = "Farid";
user.skills = ["javaScript", "React", "Vue", "Angular"],
console.log(user);

// Méthode 2 : Modifier OU créer
// user["firstName"] = "Farid";
// user["skills"] = ["javaScript", "React", "Vue", "Angular"];
// console.log(user);

// Méthode 3 : Modifier OU créer
// const key = "firstName";
// const key2 = "skills";
// user[key] = "Farid";
// user[key2] = ["javaScript", "React", "Vue", "Angular"];
// console.log(user);
