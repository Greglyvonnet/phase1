// num0 = parseInt(num0);
// // Le type de la variable "num1" est "string"
// var num1 = window.prompt("Insérez la première valeur numérique !");
// console.log(
//   "Le type de la valeur de retour de la fonction 'prompt' : " + typeof num1
// );
// Pour appliquer les opérations arythmétique à une variable, il faut absolument convertir le type de cette variable à un valeur numérique, grâce à la fonction parseInt ou bien la fonction "parseFloat"
// num1 = parseInt(num1);
// console.log(
//   "Le type de la valeur de retour de la fonction 'parseInt' : " + typeof num1
// );
// var
var num1 = 10
var num2 = 5 
var num2 = window.prompt("Insérez la deuxième valeur numérique !");
num2 = parseInt(num2);

if (num1 < num2) {
    document.write("la valeur du premier nombre" + num1 + "est inferieur de la valeur du deuxieme chiffre: " + num2);
}else if (num1 > num2) {
    document.write(
      "La valeur du premier chiffre : " +
        num1 +
        " est supérieur de la valeur du deuxième chiffre : " +
        num2
    );
} else if (num1 == num2) {
    document.write(
      "La valeur du premier chiffre : " +
        num1 +
        " est égale de la valeur du deuxième chiffre : " +
        num2
    );
}


// la fonction "isNaN" prend un parametre (ici c'est nul) et verifie si le type de la variable est "number" ou "string". Apres la verification, elle retourne un boolean: true ou false.
// si le type de parametre est "string" la fonction retourne true sinon c'est false

console.log(isNaN(num1)); 

console.log(
    "le type de la valeur de la fonction 'paseInt' : " + typeof num1)

