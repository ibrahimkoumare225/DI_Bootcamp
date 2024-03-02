//Exercice 1 : prediction + explication
5 >= 1 // Vrai. (5 est supérieur ou égal à 1)
0 === 1 // faux car 0 est inférieur a 1
4 <= 1// faux car 4 est inférieur 1
1 != 1// faux car 1 est égale a 1
"A" > "B"//faux le binaire de A est inférieur a celui de B
"B" < "C"// vrai le binaire de B est inférieur a celui de C
"a" > "A"//vrai le binaire de a est inférieur a celui de A
"b" < "A"//faux le binaire de b est supérieur a celui de A
true === false//faux true est différent de false
true != true//faux true est egale true

//exercice2

// Demander à l'utilisateur une chaîne de chiffres séparés par des virgules
let input = prompt("Veuillez entrer une chaîne de chiffres séparés par des virgules :");

// Diviser la chaîne en un tableau de nombres
let numbers = input.split(",");

// Initialiser une variable pour stocker la somme
let sum = 0;

// Parcourir le tableau de nombres et additionner chaque nombre à la somme
for (let i = 0; i < numbers.length; i++) {
    // Convertir chaque élément en nombre en utilisant parseFloat()
    sum += parseFloat(numbers[i]);
}

// Afficher la somme
console.log("La somme des nombres est :", sum);
