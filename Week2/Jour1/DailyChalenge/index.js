//const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
//console.log(moreFruits[1][1][0]);
//exercice2
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
//Retirez Banana de la matrice.
fruits.shift();
console.log(fruits);
//Triez le tableau par ordre alphabétique.
fruits.sort();
console.log(fruits);
//Ajoutez « Kiwi » à la fin du tableau.
fruits.push("Kiwi");
console.log(fruits);
// Supprimez « Apples » du tableau. N’utilisez pas la même méthode que dans la partie 1.
fruits.pop(0);
console.log(fruits);
//Triez le tableau dans l’ordre inverse. (Pas alphabétique, mais inverse le tableau actuel, c’est-à-dire que ['a', 'c', 'b'] devient ['b', 'c', 'a'])
//À la fin, vous devriez voir ce résultat :
fruits.reverse();
console.log(fruits);