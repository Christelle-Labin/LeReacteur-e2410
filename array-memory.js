const tab =[1, 2, 4, 8];

const tab2 = tab;

tab.push(16);

// ATTENTION // Même résultat mais définition différente
console.log(tab); //  [ 1, 2, 4, 8, 16 ] // modification de l'espace mémoire ET de la variable
// VV   DIFFERENT   VV
console.log(tab2); // [ 1, 2, 4, 8, 16 ] // tab2 pointe vers l'espace mémoire et non la variable

 