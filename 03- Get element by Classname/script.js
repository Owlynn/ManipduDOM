let bleu = document.getElementsByClassName('bleu');
let red = document.getElementById("p1");
// console.log(bleu);
// console.log(red);

for (valeur of bleu) {
    console.log(valeur);
    valeur.style.color = "blue";
    console.log(valeur);
}


// //Sélectionne les éléments avec une class = 'bleu'
// let bleu = document.getElementsByClassName('bleu');

// //"bleu" est un objet de HTMLCollection qu'on va manipuler comme un tableau
// for (valeur of bleu) {
//     valeur.style.color = 'blue';
// }