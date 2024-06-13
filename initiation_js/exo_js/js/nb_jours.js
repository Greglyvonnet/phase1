var mois = parseInt(window.prompt("Saisissez un nombre entre 1 et 12: "));

while (isNaN(mois) || mois < 1 || mois > 12) {
    mois = parseInt(
        window.prompt("inserez une valeur numérique entre 1 et 12...!!!")
    );
    }

if (
    mois == 1 ||
    mois == 3 ||
    mois == 5 ||
    mois == 7 ||
    mois == 8 ||
    mois == 10 ||
    mois == 12 ||
) {
    document.write("Le mois numéro" + mois + "fait 31 jours");
} else if (mois == 2) {
    document.write("Le mois numéro" + mois + "fais 28 jours");
} else {
    document.write("Le mois numéro" + mois + "fais 30 jours");
}


// if (mois % 2 == 0 && mois != 2 && mois != 8) {
//   alert("Ce mois contient 30 jours");
// } else if (mois % 2 == 1 || mois == 8) {
//   alert("Ce mois contient 31 jours");
// } else {
//   alert("Ce mois contient 28 jours");
// }
// c'est la pause...











