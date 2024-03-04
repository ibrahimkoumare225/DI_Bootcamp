


//fonction afficher resultat
function afficherResultat(score, nbMotsProposes) {
    let message =  score + '/' + nbMotsProposes
    let html = `${message} `
    let aff = document.querySelector(".zoneScore span")
    aff.innerHTML=html
}
/**
 * Cette fonction affiche une proposition, que le joueur devra recopier,
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */
function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition
}
/**
 * Cette fonction construit et affiche l'email.
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score.
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}+?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}
function validerNom(nom) {
    if (nom.length){
        return true
    }return false
}

function validerEmail(email){
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (emailRegExp.test(email)){
        return true
    }
    return false
}
//fonction principale
function lancerJeu() {
    initAddEventListenerPopup()
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
    let form = document.querySelector("form")
    form.addEventListener("submit",(event)=> {
        event.preventDefault()

        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value

        if (validerNom(nom)&& validerEmail(email)){
            let scoreEmail = `${score}/${i}`
            afficherEmail(nom,email,scoreEmail)
        } else {
            console.log("Erreur")
        }
    })
   afficherResultat(score,i)
}

