// syntaxe de base (commentaire sur une ligne)

/*
commentaire pour plusieurs lignes
*/

// Déclenche une variable:
var prenom;
var prenomPourMonProjet; //permer d'ecrire une variable longue "camel case" avec les maj. pour chaque mots

// -- 2: affecter un valeur a une variable
prenom = "greg"; /*"greg" est une chaine de caractere */

var prenom2 = "sirine";
alert(prenom);

// -- 3: une instruction se termine toujours par un point-virgule, aussi il est possible d'ecire plusieur instruction sur une seule ligne
// inst_1;
// inst_2; inst_3

// -- 5: Afficher dans la console(ici, la valeur de ma variable prenom)
console.log(prenom);

// document.write(prenom);
// document.write(" a la pause nous irons sous la pluie!");
/*document.write()= PERMET L AFFICHAGE SUR NAVIGATEUR*/

//-- 6 : afficher dans la page web
// document.write(monNom + "<br>");
// document.write(prenom + "<br>");
// document.write("a la pause nous irons sous la pluie!");

var jourSemaine = window.prompt(
  "Question: quel jours sommes nous ?",
  "jour de la semaine"
);

document.write(jourSemaine);
console.log("jour de la semaine");
console.log("Mercredi");
console.log(jourSemaine);
// -- 9: Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractere alphanumerique et ne peux pas etre un mot réservé (var, for... des elements natifs du language JS)

var variable = "ma variable";

//consigne: dialogue et 3 autres console //

var chaineDeCaractere = "ma variable";
var unChiffre = 2;
var cetteAnnee = 2024;
var stringAddition = "2+5";
var addition2Number = 2 + 6;

document.write("ma variable");
console.log(unChiffre);
console.log(cetteAnnee);
console.log(stringAddition);
console.log(addition2Number);

// type variables:
//1- string
//2- integer : 14, 5, ...
//3- boolean true /false
//4- float 12.56

console.log(typeof stringAddition);
var convertNumberToString = addition2Number.toString();
console.log("voici addition2Number : " + typeof addition2Number);
console.log(typeof convertNumberToString);
