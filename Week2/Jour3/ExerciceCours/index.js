//Exercice1
for  (let nbre=0;nbre<=15;nbre++){
    if (nbre % 2==0){
        alert(nbre+ " est un nombre pair")
    }
    else{
        alert(nbre+ " est un nombre impair")
    }

}

//Exercice 2

// Liste des noms de variables
let variables = ["chien", "Chat", 123, "oiseau", "Lion"];

// Boucle for parcourant les noms des variables
for (let i = 0; i < variables.length; i++) {
    let variable = variables[i];

    // Vérifier si l'élément n'est pas une chaîne de caractères
    if (typeof variable !== "string") {
        continue; // Passe à l'itération suivante si ce n'est pas une chaîne
    }

    // Vérifier si la première lettre n'est pas en majuscules
    if (variable[0] !== variable[0].toUpperCase()) {
        // Remplacer la première lettre par sa version en majuscules
        variable = variable.charAt(0).toUpperCase() + variable.slice(1);
    }

    // Afficher le nom
    console.log(variable);
}

