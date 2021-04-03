//1.- Dado un string de dos palabras realizar una función que devuelva la palabra más larga
const largerWord = string => {
    stringSplitted = string.split(" ")
    return stringSplitted[0].length > stringSplitted[1].length ? stringSplitted[0] : stringSplitted[1]
}
console.log(largerWord("Programación Javascript"))

//2.- Crear un programa que permita detectar si una frase finaliza con punto. Dicho programa debe estar encapsulada en una función y recibir el o los parametros necesarios.
const endByWord = string => string.charAt(string.length-1) === "." ? console.log("Finalizó en punto") : console.log("No finalizó en punto")
endByWord("bla bla .bla bla.")

//3.- Crear un programa que permita al usuario retornar el numero de coincidencias de una palabra en una frase que el mismo usuario ingrese.
const lookForWord = (word, string) =>{
    stringSplitted = string.split(" ")
    let times = stringSplitted.reduce((accum, word1) =>{
        if (word1 === word) {
            accum += 1
        }
        return accum
    },0)
    return `La palabra ${word} se repite ${times} veces`
}
word = 'Hola'
string = 'Hola me llamo Fernanda Palacios. Hola Otra vez. Hola'
console.log(lookForWord (word, string))

//4.- Crear un programa que permita al usuario extraer una subacadena de una frase dada.
const subString = (subString1, string) =>{
    stringSplitted = string.split(" ")
    existing = stringSplitted.reduce((accum, item) =>{
        subString1 === item ? accum += subString1 : null
        return accum
    },"")
    return existing !== "" ? console.log(existing) : console.log("No está")
}
subString("desarrollador", 'Soy un desarrollador FullStack')

//5.- crear un programa que permita comparar dos palabaras das por el usuario y determinar si son iguales.
const sameWord = (word1, word2) => word1.toLowerCase() === word2.toLowerCase() ? console.log("Son iguales") : console.log("No son iguales")
sameWord("hola", "Hola")

//7.- Realizar un programa que permita a una cadena de texto convertirlo a Mayusculas.
const toUpper = string => console.log(string.toUpperCase())

//8.- Crear un programa que permita a una cadena de texto mostrar el signo '-' entre cada caracter
const hyphen = string => console.log(string.split(" ").join("-"))
hyphen("lkasnfdkjl kdsfnadsklf dslkfn dsfsad fds f sdf sdfs dfsd f")

//9.- Crear un programa que devuelva la cantidad de vocales que tenga una frase dada por el usuario.
const vowels = string => {
    stringSplitted = string.split(" ")
    const vowels = /a|e|i|o|u|á|é|í|ó|ú/gi
    vowelsQ = stringSplitted.reduce((accum, item) =>{
        accum += item.match(vowels).length
        return accum
    },0);
    return vowelsQ
}
console.log(vowels("badssad pweoif awepfk sjdfgqwuiefsdafmsñdlgpd"))

//10.- Crear un programa que permita devolver una cadena de texto de forma inversa a la que el usuario lo ingresa.
const reversed = string => string.split("").reverse().join("")
console.log(reversed("Hola"))