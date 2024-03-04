


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
    let listeProposition = listeMots

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition( listeProposition[i])
    btnValiderMot.addEventListener("click",()=>{
        console.log(inputEcriture.value)
        if (inputEcriture.value === listeProposition[i]){
            score++
        }
        i++
        afficherResultat(score,i)
        inputEcriture.value = ""
        if (listeProposition[i]=== undefined){
            afficherProposition("le jeu est fini")
            btnValiderMot.disabled = true
        }else{
            afficherProposition( listeProposition[i])
        }

        })

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for (let index = 0;index<listeBtnRadio.length;index++){
        listeBtnRadio[index].addEventListener("change",(event)=>{
            console.log(event.target.value)
            if (event.target.value === "1") {
                listeProposition = listeMots
            }else{
                listeProposition = listePhrases
            }
            afficherProposition( listeProposition[i])
        })
    }
   afficherResultat(score,i)
}

