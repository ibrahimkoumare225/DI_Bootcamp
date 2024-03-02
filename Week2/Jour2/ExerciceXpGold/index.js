//Exercice 1 : Le Traducteur Du Monde

let langueParle = prompt("Quelle langue parlez-vous ?");
langueParle = langueParle.toLowerCase();
console.log(langueParle);

switch (langueParle) {
    case  "français":
    alert('Bonjour');
    break;
    case "anglais":
        alert('Hello');
        break;
    case "hebreu":
        alert('Shalom');
        break;
    default:
    alert('01110011 01101111 01110010 01110010 01111001');
}

//Exercice 2 : L’assignateur De Notes

let noteUtilisateur = prompt("Veuilez-saisir votre notre !")
noteUtilisateur=Number(noteUtilisateur);
if (noteUtilisateur>90){
    console.log("A") ;
}
if (noteUtilisateur>=80 && noteUtilisateur<=90){
    console.log("B") ;
}
if (noteUtilisateur>=70 && noteUtilisateur<=80){
    console.log("C") ;
}
if (noteUtilisateur<70){
    console.log("D") ;
}