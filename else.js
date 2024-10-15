let num1 = "Paris";
let num2 = 7;


// ELSE : si toutes mes conditions précédentes, 
// cad tous mes if et else if ne sont pas validées, 
// alors c'est le else qui se déclenche automatiquement.
if (num1 < num2){
    console.log("num1 est inférieur à num2");
} else if (num1 > num2) {
    console.log("num1 est supérieur à num2");
} else if (num1 === num2) {
    console.log("num1 est égal à num2"); 
} else {
    console.log("Les valeurs ne sont pas comparables");
}