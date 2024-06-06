// for=syntaxe pour boucle:
// 1) declarer une variable // 2) puis une condition (ex:i <= 10)

// 3)execution execute action(ex:<p>) // 4) incrementation(ex += 2)

//declaration>condition/incrementation
// ====>1>====> 2 ====<==4==<=========
// for (var i = 1; i <= 10; i += 2) {
//   document.write("<p> instruction executée:" + i + "</p>");
// }
//     2============ 3 ===========>
//              execution



// exercices

// Vous avez économisé 1000 €

// 2- L'objectif est de savoir au bout de combiens de mois vous aurez 2000 €, en sashant que tous les mois vous ajouter 50€ sur votre compte épargne

// 3- Indice : avant de commencer la boucle "for", déclarer et affecter à 0 une variable supplémentaire "tps"

// 4- Dans la boucle il y aura deux actions à exécuter
// 	1- Affichage de l'état mensuel du compte :
//     	"Le mois suivant j'ai : mesSous"
//     2- Incrémentation de la variable "tps"
    
// 5- A la sortie de la boucle :
// 	Affichage de la valeur de "tps" avec une phrase appropriée





// // for (var j = 1; j <= 10; j++) {
// //   document.write("<p> instruction executée:" + j + "</p>");
// // }

// // MA REPONSE
// var tps = 0;



// for (var mesSous = 1000; mesSous <= 2000; mesSous += 50) {
//   document.write("<p> Le mois suivant j'ai :" + mesSous + "<p>");
// }


//CORRECTION

// var monCompte = 1000
// var temps = 0
// while (mon compte == 1000)
    // attente fichier 



// EXERCICE
// 1- Je déclare la majorité légale "majoriteFR" avec la valeur 18
// 2- Je demande l'age de l'utilisateur
// 3- Je déclare une variable "age" et j'affecte le la réponse de l'utilisateur à cette variable
// 4- Je convertie la réponse de l'utilisateur, qui est en chaîne de caractère en type "number", en utilisant la fonction "parseInt" par défaut de JS, car la boîte de dialogue du formulaire nous retourne toujours un type de chaîne de caractère, même si la valeur saisie est un chiffre : 
// var age = parseInt(prompt('message'));

// version 2 : 

// var age = prompt('message');

// age = parseInt(age);


// 6- J'utilise la boucle "while" et j'affecte une condition afin de vérifier si la valeur de la réponse et (inférieur ou égale à 3) ou bien (suppérieur ou égale à 120). Tant que l'utilisateur ne saisie pas une valeur entre 4 et 119, la boîte de dialogue s'affichera
// 7- Dans le cas contraire et en dehors de la boucle, je vérifie si l'age est suppérieur ou égale à 18 et inférieur à 120 : dans ce cas j'aurai le message :  "Bienvenue, vous êtes majeur" sinon : j'affiche une boîte de dialogue "Allez voir un autre super site..." et la redirection vers mon site préféré : "https://fr.boohoo.com/"

var majoriterFR = 18;
var age = window.prompt("Ecrivez votre age :");
age = parseInt(age);

// ou bien: var age = parsInt (window.prompt ("inserez votre age")

while (age <= 3 || age >= 120) {

}







