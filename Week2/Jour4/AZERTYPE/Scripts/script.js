


//fonction afficher resultat
function afficherResultat(score, nbMotsProposes) {
    let message =  score + '/' + nbMotsProposes
    let html = `${message} `
    let aff = document.querySelector(".zoneScore span")
    aff.innerHTML=html
}

function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition
}
//fonction principale
function lancerJeu() {
    let score = 0
    let i = 0

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition( listeMots[i])
    btnValiderMot.addEventListener("click",()=>{
        console.log(inputEcriture.value)
        if (inputEcriture.value === listeMots[i]){
            score++
        }
        i++
        afficherResultat(score,i)
        inputEcriture.value = ""
        if (listeMots[i]=== undefined){
            afficherProposition("le jeu est fini")
            btnValiderMot.disabled = true
        }else{
            afficherProposition( listeMots[i])
        }

        })
   afficherResultat(score,i)
}

