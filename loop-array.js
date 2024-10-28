//Parcourir un tableau

const tab = ["Xavier", "Farid", "Bastien"];

// for (let i = 0; i < tab.length; i++) {
// //console.log(i); // Premier tour de la boucle : [i] vaut 0, puis au second tour [i] vaut 1, puis au 3eme [i] vaut 2
//     console.log(tab[i]); // Premier tour de la boucle : [i] vaut Xavier, puis au second tour [i] vaut Farid, puis au 3eme [i] vaut Bastien
    
// }


// Une boucle dans une autre boucle
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i]); // Xavier, puis Farid, puis Bastien
            for (let j = 0; j < tab[i].length; j++) {
                console.log(tab[i][j]); // affiche chacune des lettres 
        }
    }