/*
    var phrase = "La mejor forma de predecir el futuro es creándolo"
    1- saber la cantidad de palabras
    2- saber la cantidad de "a"
    3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones
        "amjrf"
    4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares
*/

var phrase = "La mejor forma de predecir el futuro es creándolo";

//1

console.log(`La frase tiene ${phrase.length} caracteres.`);

//2
var numOfA = 0;
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === 'a' || phrase[i] === 'á') {
        numOfA += 1;       
    }
}
console.log(`La frase tiene ${numOfA} letras a`);

//3
var odd = [];
var even = [];
for (let i = 0; i < phrase.length; i++) {
    i%2 == 0 ? odd.push(phrase[i]): even.push(phrase[i]);
}
console.log(odd.join())
console.log(even.join())