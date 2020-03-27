/*Sélectionne le premier paragraphe du document et change son texte avec la
 *propriété textContent que nous étudierons plus tard dans cette partie*/
document.querySelector('p').textContent = 'le premier paragraphe du document dont le texte a été changé avecla propriété textContent';

let documentDiv = document.querySelector('div'); //1er div du document
//Sélectionne le premier paragraphe du premier div du document et modifie son texte
documentDiv.querySelector('p').textContent = '1er div du cocument dont le texte a été changé avec la propriété textContent';

/*Sélectionne le premier paragraphe du document avec un attribut class='bleu'
 *et change sa couleur en bleu avec la propriété style que nous étudierons
 *plus tard dans cette partie*/
document.querySelector('p.rouge').style.color = 'red';

//Sélectionne tous les paragraphes du document
let documentParas = document.querySelectorAll('p');

//Sélectionne tous les paragraphes du premier div
let divParas = documentDiv.querySelectorAll('p');

/*On utilise forEach() sur notre objet NodeList documentParas pour rajouter du
 *texte dans chaque paragraphe de notre document*/
documentParas.forEach(function(element, index) {
    element.textContent += ' (paragraphe n°:' + index + ')';
});


// const array1 = ['a', 'b', 'c'];
// array1.forEach(function(element, index) {
//     console.log(element, index);  
// });

// expected output: "a 0"
// expected output: "b 1"
// expected output: "c 2"


// function afficherMessage(message, message2) {
//     console.log(message);
//     console.log(message2);
// }

// afficherMessage("coucou");