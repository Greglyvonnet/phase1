
// 1- Dans le fichier fonction_avec_parametre_sans_retour.js
// 2- Déclarez une foction "additionParametreJs" dans ce fichier
// 3- L'objectif de la fonction est de prendre 2 paramètres 
// 5- Additionner les deux paramètres 
// 6- Afficher le résultat à partir de la page du navigateur

// l'étape de l'exécution :
// 7- pour exécuter cette fonction
// 	a) nous devons d'abord déclarer et affecter deux variables dans notre fichier
//     b) au moment de l'exécution nous devons passer ces variables en paramètres 





function additionParametreJs(param1, param2) {
    var resultat = param1 + param2; 
    document.write(resultat);    
}

var num1 = 2;
var num2 = 1;

 additionParametreJs(num1, num2);