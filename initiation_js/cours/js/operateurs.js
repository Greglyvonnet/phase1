//declare une variable N1 et n1: 10 et n2:5
//utiliser les 4 opérateurs arithmetiques et verifier les resultats a partir de la console
//afficher le type de chaque resultat sur la console(terminal)

var n1 = 10;
var n2 = 5;

var add = n1 + n2;
var sous = n1 - n2;
var mul = n1 * n2;
var div = n1 / n2;

console.log(typeof add);
console.log(add);

console.log(typeof sous);
console.log(sous);

console.log(typeof mul);
console.log(mul);

console.log(typeof div);
console.log(div);

//--5. modulo
//--5. modulo retrouve le reste d'une division
//--5. modulo de nb1% avec l'operateur "%"

resultat = n1 % n2;
console.log(resultat);

var n3 = 100;
var n4 = 17;
var resModulo = n3 % n4;
console.log(resModulo);

document.write(
  "le reste de la division de 100 par 17 est egal à" + "<br>" + resModulo
);

///afficher le texte suivant sur la page du navigateur en utilisant les variables:
// "le reste de la division de 100 par 17 est egal à: ? "
