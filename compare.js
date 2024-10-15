let num1 = 3;
let num2 = 7;

// if (num1 < num2) {
//     console.log("a");    
// } else if (num1 < num2) {
//     console.log("b"); 
// }

// La bonne pratique :
if (num1 < num2){
    console.log("num1 est inférieur à num2");
} else if (num1 > num2) {
    console.log("num1 est supérieur à num2");
} else if (num1 === num2) {
    console.log("num1 est égal à num2"); 
}