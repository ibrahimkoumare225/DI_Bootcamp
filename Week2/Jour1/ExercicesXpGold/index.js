//exerice1

let sentence = ["my","favorite","color","is","blue"];
let addittionalSentence = sentence[0] + sentence[1] + sentence[2] + sentence[3]+sentence[4];
console.log(addittionalSentence);

// Exercice 2 : Mixup
// Étape 1 : Créer deux variables avec des chaînes de caractères
let str1 = "mix";
let str2 = "pod";

// Étape 2 : Découper et échanger les 2 premiers caractères des deux chaînes
let newStr1 = str2.slice(0, 2) + str1.slice(2);
let newStr2 = str1.slice(0, 2) + str2.slice(2);

// Étape 3 : Créer une troisième variable avec la concaténation des deux chaînes séparées par un espace
let concatenatedStr = newStr1 + " " + newStr2;

// Étape 4 : Afficher la nouvelle chaîne concaténée
console.log(concatenatedStr);
