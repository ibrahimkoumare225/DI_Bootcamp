


//fonction afficher resultat
function afficherResultat(score, nbMotsProposes) {
    let message = 'Votre score est de ' + score + ' sur ' + nbMotsProposes
    console.log(message);
}

//fonctions demander souhait

function choisirPhrasesOuMots() {
    let choix = prompt("Voulez-vous  jouer avec des phrases ou des mots. ");
    while (choix !=="mots" && choix!="phrases"){
        alert("Saisie inadéquat ! Veuillez ressayer")
         choix = prompt("Voulez-vous  jouer avec des phrases ou des mots. ");
    }
    return choix
}
//fonctions lancerBoucleDeJeu
function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i= 0; i < listePropositions.length;i++){
        let motUtilisateur = prompt('Entrez le mot : ' + listePropositions[i])
        if (motUtilisateur === listePropositions[i]){
            score++
        }
    }
    return score
}
//fonction principale
function lancerJeu() {
  let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0
   if (choix ==="mots"){
      score = lancerBoucleDeJeu(listeMots)
       nbMotsProposes = listeMots.length
   }else {
       score = lancerBoucleDeJeu(listePhrases)
       nbMotsProposes = listePhrases.length
   }
    afficherResultat(score,nbMotsProposes)
}

