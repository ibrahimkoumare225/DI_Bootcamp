//exerice1
let anneeActuel = 2024;
let dateNaissancePersonne1 = 1950;
let dateNaissancePersonne2 = 2001;

let ageActuelPersonne1 =  anneeActuel-dateNaissancePersonne1;
let ageActuelPersonne2 =  anneeActuel-dateNaissancePersonne2;
let ageMoitiePersonne2 = ((ageActuelPersonne1/2)-ageActuelPersonne2)+anneeActuel;
console.log("C'est en "+ ageMoitiePersonne2 + " que vous aurez la moitié de l'age de la personne1 ");

//exercice2

// Demander au client son code postal
let codePostal = prompt("Veuillez saisir votre code postal :");

// Vérifier les conditions
if (codePostal.length === 5 && !isNaN(codePostal) && !codePostal.includes(" ")) {
    console.log("Succès");
} else {
    console.log("Erreur");
}
//deuxi_me méthodes avec les expressions regulière
// Demander au client son code postal
let cdPostal = prompt("Veuillez saisir votre code postal :");

// Vérifier les conditions avec des expressions régulières
let regex = /^\d{5}$/; // Expression régulière pour 5 chiffres seulement

if (regex.test(cdPostal)) {
    console.log("Succès");
} else {
    console.log("Erreur");
}
