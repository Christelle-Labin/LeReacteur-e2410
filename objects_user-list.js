const users = [
  {
    firstName: "John",
    lastName: "Doe",
    "date of birth": "01/01/01",
    age: 34,
    address: { number: 2, street: "Picadilly Circus", city: "London" },
    admin: true,
    premium: false,
    phones: ["01 45 46 32 11", "06 34 77 12 98"]
  },
  {
    firstName: "Xavier",
    lastName: "Colombel",
    "date of birth": "07/07/97",
    age: 18,
    address: { number: 89, street: "République avenue", city: "Paris" },
    admin: true,
    premium: true,
    phones: ["01 22 46 99 01", "06 78 77 19 22"]
  },
];

for (let i = 0; i < users.length; i++) {
console.log(users[i]);
console.log(users[i].firstName);
console.log(users[i].address.street);
console.log(users[i].phones[0][0]);
}