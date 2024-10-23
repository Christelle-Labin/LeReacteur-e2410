let password = "azerty";

// si la valeur est falsy :
// si l'une des 6 conditions est validée à true, le code se déclenche (||)
if (password === false || password === "" || password === undefined || password === null || password === NaN || password === 0 ) {
    
}

// Toutefois, il existe une abbréviation grâce au point d'exclamation devant une variable dans un if,
// cela  signifie que l'on demande si cette variable est falsy :
if (!password) {
    console.log("password est falsy");
    
}

//ou 

// si la valeur est truthy :
// les 6 conditions doivent être réunies (&&) afin que password soit validé
if (password !== false && password !== "" && password !== undefined && password !== null && password !== NaN && password !== 0) {
    
}

// la condition ci-dessus à une abbréviation :
if (password) { // est-ce password existe ?
    console.log("password est thruthy");
    
}