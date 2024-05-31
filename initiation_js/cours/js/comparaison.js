/* -------------------------------
            EXERCICE :
// 1- Créer un fichier comparaisons.html et comparaisons.js dans le projet initiation_js
// 2- Associer le fichier js au fichier html
// 3- Tester l'association entre les deux fichiers
// 4- Afficher votre prénom dans une boîte de dialogue          
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.

Je doit saisir mon prénom et mon age pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prenom et age).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille : 
	// 1 -- Demander son prénom à l'utilisateur avec un prompt
	// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)
    	// 1a. alert('test');
    	// 2a. Si tout est ok, je continue la vérification avec l'âge
    	// 3a. Demande a mon utilisateur son âge via un PROMPT
        // sinon (Si les AGEs ne correspondent pas)
        	1b. je lance une ALERT : "Erreur d'âge"
Sinon (Les prénoms ne correspondent pas)
       // 1c. je lance une ALERT : "Attention, prénom non reconnu" 

-------------------------------- */


var prenom = "gregory";
alert(prenom);

var age = 38;
alert(age);


var saisiPrenom = window.prompt("inserez votre prenom");




if (saisiPrenom == prenom) {
    document.write("bienvenue");
    var saisiAge = window.prompt("inserez votre age");
    if (saisiAge == age) {
        document.write("Bienvenue")
    }
} else {
    alert("Attention, prénom non reconnu");
    
}


// if (texte2 = age) {
//   document.write("bienvenue");
// } else {
//   alert("Attention, age non reconnu");
 
// }
