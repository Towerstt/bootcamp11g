var phrase = "La mejor forma de predecir el futuro es creándolo";
//1.- Saber la cantidad de palabras
console.log(`La frase tiene ${phrase.length} caracteres.`);
//2.- Saber la cantidad de "a"
console.log(`La frase tiene ${phrase.match(/[aá]/gi).length} letras a`);
//3.- Crear una nueva frase usando sólo los caracteres que esten en posiciones nones
//4.- Crear una nueva frase usando sólo los caracteres que esten en posiciones pares
var odd = '';
var even = '';
for (let i = 0; i < phrase.length; i++) {
    i%2 == 0 ? odd += phrase.charAt(i) : even += phrase.charAt(i);
}
console.log(odd);
console.log(even);
//-------------------------------------TAREA-------------------------------------
//1.- Mostrar la misma frase en snake_case
var snakeCase = '';
for (let i = 0; i < phrase.length; i++) {
    snakeCase = phrase.replace(/ /g, '_');    
}
console.log(snakeCase);
//2.- Mostrar la misma frase en kebab-case
var kebabCase = '';
for (let i = 0; i < phrase.length; i++) {
    kebabCase = phrase.replace(/ /g, '-');    
}
console.log(kebabCase);
//3.- Mostrar la misma frase con todas las vocales en mayúscula
var upperCase = '';
for (let i = 0; i < phrase.length; i++) {
    upperCase = phrase.replace(/a|e|i|o|u|á|é|í|ó|ú/gi, function(x){return x.toUpperCase()})
}
console.log(upperCase);
//4.- Mostrar los primeros 10 caracteres de la frase
var tenPhrase = phrase.slice(0,10);
console.log(tenPhrase);
//5.- Mostrar los últimos 10 caracteres de la frase
var phraseTen = phrase.slice(-10);
console.log(phraseTen);