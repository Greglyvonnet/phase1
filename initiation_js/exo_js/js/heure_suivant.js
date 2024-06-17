var heures = parseInt(window.prompt("Veuillez entrer l'heure: "));
while (isNaN(heures) || heures < 0 || heures > 23) {
  heures = window.prompt("inserez une valeur entre 0 et 23:");
}

var minutes = parseInt(window.prompt("Veuillez entrer les minutes: "));
while (isNaN(minutes) || minutes < 0 || minutes > 59) {
  minutes = window.prompt("inserez une valeur minutes entre 0 et 59:");
}

var secondes = parseInt(window.prompt("Veuillez entrer les secondes: "));
while (isNaN(secondes) || secondes < 0 || secondes > 59) {
    secondes = window.prompt("inserez une valeur secondes entre 0 et 59:");
}

secondes++;
if (secondes == 60) {
    secondes = 0;
    minutes++;
    if (minutes == 60) {
        minutes = 0;
        heureq++;
        if (heures == 24) {
            heures = 0;
        }

    }
}




// var heure2 = heures + minutes + secondes;
// document.write("heures = heures + minutes + secondes"++);



