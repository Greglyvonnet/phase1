// var prenom = "gregory";
// alert(prenom);

// var texte = window.prompt("inserez un texte");
// document.write("<h1>" + texte + "</h1>");
// //document.write(....) est une fonction car parenthese

// type de variable boolean : true ou false

// var unBooleanTrue = true;
// var unBooleanFalse = false;
// var num1 = 50;
// var num2 = 5;
// var num3 = 10;
// var num4 = 12.5;
// var num5 = num1 / num3;


// if (unBooleanTrue) {
//     document.write(prenom)
// }

// if (unBooleanfalse) {
//     document.write('ceci est un faux!')}


// ! = different de egale /oposer a egale

// if ((num1 / num3) != num4) {
//     document.write("le resultat de la division" + num1 + "par" + num3 + "est" + num2);
// } else {
//     document.write(
//         "la valeur de la variable num 4 est égale à" + num4);
    
// }

/*
EXERCICE
On utilise le IF pour vérifier l'âge de l'internaute.(une boîte de dialogue ...)
=> s'il est majeur je lui souhaite la bienvenue
=> s'il est mineur je [1]lui signale et [2]le renvoie vers un autre site.
La syntaxe pour rediriger un utilisateur vers un autre site : (document.location.href = "http://www.darty.com/")

Il existe une fonction de JS qui convertie les chaines de caractères(string) en type numériques(number) : parseInt() : 
var unChiffre = "12";
unChiffre = parseInt(unChiffre);
*/

var age = 18;
alert(age);


var texte = window.prompt("inserez votre age");
console.log(texte);
console.log(typeof texte);

texte = parseInt(texte);

console.log(texte);
console.log(typeof texte);
// document.write(texte);

if (texte >= age) {
    document.write("bienvenue");
} else {
    alert("vous êtes redirigé vers un site marchand");
    document.location.href = "http://www.darty.com"
}


    