//Exercice 1 : Instruction If/Else Simple

let x = 15;
let y =17;
    if(x>y){
        console.log("X est plus grand que Y");
    }
    else {
        console.log("Y est plus grand que X");
    }

 //EXERCICE 2
// Créez une variable appelée newDog avec la valeur "Chihuahua"
let newDog = "Chihuahua";

// Vérifiez et affichez le nombre de lettres dans newDog
console.log("Nombre de lettres dans newDog :", newDog.length);

// Affichez la variable en majuscules puis en minuscules
console.log("newDog en majuscules :", newDog.toUpperCase());
console.log("newDog en minuscules :", newDog.toLowerCase());

// Vérifiez si la variable est égale à "Chihuahua"
if (newDog === "Chihuahua") {
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée !");
} else {
    console.log("Je m'en fiche, je préfère les chats.");
}
//Exercice 3 : Pair Ou Impair

let nbreSaisir = prompt("Veuillez saisir un nombre !");
nbreSaisir = Number(nbreSaisir);
if (nbreSaisir % 2 ==0 ){
    console.log(nbreSaisir+" est un nombre pair");
}
else {
    console.log(nbreSaisir+" est un nombre impair");
}