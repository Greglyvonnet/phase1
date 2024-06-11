// Baccalauréat
// Ecrivez un programme baccalaureat.js qui fait saisir la moyenne d'un candidat puis affiche si ce candidat est :

// recalé (moyenne inférieure à 10),
// reçu (moyenne entre 10 et inférieur à 12)
// ou reçu avec mention (moyenne supérieure ou égale à 12).



// Afficher la valeur de retour d'un utilisateur quand le type de cette valeur est "string" sinon le message suivant : "Le type de votre valeur n'est pas un 'string' !"


var noteNegative = 0;
var noteRecal = 10;
var noteRecu = 12;
var noteBien = 20;
var moyenne = window.prompt("Veuillez saisir votre moyenne ... ");
// moyenne = parseInt(moyenne);

// moyenne = parseFloat(moyenne);
moyenne = parseInt(moyenne);
console.log(moyenne);
// console.log(typeof moyenne);
// moyenne = Number(moyenne);
// console.log(moyenne);
// console.log(typeof moyenne);

// while (isNaN(moyenne) || moyenne > noteBien || moyenne < noteNegative) {
//   moyenne = window.prompt("Veuillez saisir une valeur correct entre 0 et 20 !");
// }

// if (moyenne < noteRecal) {
//   alert("vous êtes recalé");
// } else if (moyenne >= noteRecal && moyenne < noteRecu) {
//   document.write("Vous êtes reçu !");
// } else if (moyenne >= noteRecu && moyenne <= noteBien) {
//   document.write("vous êtes reçu avec mention");
// }

// var maValeur = window.prompt("Saisissez une valeur ...");
// var resBoolean = isNaN(maValeur);

// si la valeur de resBoolean est false afficher le message : le type de votre valeur est numérique

// if(!isNaN(maValeur)){}
// if (!resBoolean) {
//   document.write("Le type de votre saissi est 'number'");
// }

// if (resBoolean) {
//     document.write("Le type de votre saissi est 'string'");
// }else {
//   document.write("Le type de votre saissi est 'number'");
// }
// document.write();
// alert();
// console.log();
// parseInt();
// parseFloat();
// window.prompt();
