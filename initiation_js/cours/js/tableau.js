// 1- Déclarer une variable : "fruits"
// 2- Affecter à cette variable un élément de type "array" : ['Apple', 'Banana'];
// 3- Déclarer une variable 'taille' en lui affectant la taille du tableau(array) à l'aide de la syntaxe suivante : fruits.length
// 4- A partir du terminal de votre navigateur, affichez :
// a) la taille du tableau
// b) le contenu du premier élément à l'aide de la syntaxe suivante : fruits[0]
// 5- Afficher le contenu du dernier élément du tableau
// 5- Afficher le contenu du dernier élément du tableau
// grâce à la taille du tableau :
// taille : 3, je cherche indice 2 à partir de la taille :
// fruits[2]

// correction:

// var fruits;
// fruits = ["Apple", "Banana","orange"];
// var tailleTab = fruits.length;
// console.log(tailleTab);
// console.log(fruits[0]);

// console.log(fruits[tailleTab - 1]);



// suite:

// 6- Déclarer une variable "couleurs" en lui affectant un tableau contenant 3 éléments (choisir 3 différentes couleurs)
// 7- Afficher le contenu du dernier élément du tableau
// grâce à la taille de ce tableau à partir de la console
// 8- Afficher le contenu des élément du tableau en utilisant la boucle "for"



// var couleurs;
// couleurs = ["rouge", "violet", "bleu, orange"];
// var tailleTab = couleurs.length;
// console.log(couleurs[2]);
// console.log(couleurs[tailleTab - 1]);



// console.log(couleur.length)
// for (var i = couleur.length; i < 0; i--){
//     console.log("ok")
//     console.log(couleur[i]);
// }


// for (var i = 4; i >= 0; --i) {
//     console.log(couleurs[i]);
// }

// for (var i = 10; i <= 0; --i){
//     document.write(chiffres[i] + "<br>")
// }

// test

fruits = ["Apple", "Banana"];

var newLength = fruits.pop();

console.log(fruits);
console.log(newLength);

fruits = ["Apple", "Banana"];
//Ajouter à la fin du tableau
var newLength = fruits.push("Orange");

console.log(fruits);
console.log(newLength);


/*********4 fonctions pour manipuler un tableau indexé *********/
fruits = ["Apple", "Banana"];
//Ajouter à la fin du tableau

//Ajouter à la fin du tableau
// la fonction push exécute deux actions :
// 1- Ajouter un élément à la fin d'un tableau
// 2- Retourner la taille mise à jour du tableau. Dans cette exemple la valeur de "newLength" est égale à 3
var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]
console.log(fruits);
console.log(newLength);

//Supprimer le dernier élément du tableau
// la fonction pop exécute deux actions :
// 1- Supprimer un élément à la fin d'un tableau
// 2- Retourner la valeur supprimée dans le tableau. Dans cette exemple la valeur de la variable "last" est égale à "orange"
var last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];
console.log(fruits);
console.log(last);

//Supprimer le premier élément du tableau
// La fonction "shift" exécute deux actions :
// 1- Supprimer le premier élément du tableau
// 2- Retourner la valeur de l'élément supprimé
var first = fruits.shift(); // supprime Apple (au début)


console.log(fruits);
// ["Banana"];
console.log(first);
// ["Apple"];

//Ajouter au début du tableau
// La fonction "unshift" exécute deux actions :

// 1- Ajouter un élément au début du tableau
// 2- Retourner la valeur de la taille du tableau
var newLength = fruits.unshift("Strawberry"); // ajoute au début


console.log(fruits);
// ["Strawberry", "Banana"];
console.log(newLength);
//2

















