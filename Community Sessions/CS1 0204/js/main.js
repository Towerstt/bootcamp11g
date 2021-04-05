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
const hyphen = string => console.log(string.split("").join("-"))
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

//11.- Sabiendo que una cadena de texto contine parentesis. Crear un programa que devulva la cadena que se encuentra entre los parentesis.
const parenthesis = string =>{
    stringSplitted = string.split("")
    console.log(stringSplitted)
    p = stringSplitted.slice((stringSplitted.indexOf("(")+1), stringSplitted.indexOf(")")).join("")
    console.log(p)
}
parenthesis("Hola soy (bla bla bla bla bla)")

//12.- Crear una funcion que permita solicitar numeros al usuario por medio del prompt y no dejar de solicitarlos hasta que el usuario ya no dese ingresar más. Cáda numero debe ser ingresado a una colecion. spoiler: Puede que les sirva el metodo confim()
numerArray = []
numerArray.push(prompt("Ingresa un número"))
while (window.confirm("¿Quieres ingresar más números")) {
    numerArray.push(prompt("Ingresa un número"))
} alert("Muchas gracias. Tus  números fueron " + numerArray)

//13.- Realizar un programa que imprima una pritamide de 1 al 10 de la siguiente forma
//~Lo hice a 9 para que se vea bonito~
for (let i = 1; i < 10; i++) {
    console.log(`${(i.toString()).repeat(i)}`)
}

//14.- Realizar un program que imprima una piramida inversa.
for (let i = 9; i > 0; i--) {
    console.log(`${(i.toString()).repeat(i)}`)    
}

//15.- Teniendo un array de numeros. Determinar por cada elemnto si es multiplo de 4/3/5/2
numberArray = [3,4,5,23,20,25,10]
let m5 = numberArray.filter(item => item % 5 === 0)
let m4 = numberArray.filter(item => item % 4 === 0) 
let m3 = numberArray.filter(item => item % 3 === 0)
let m2 = numberArray.filter(item => item % 2 === 0) 
console.log("Los múltiplos de 5 son: " + m5)
console.log("Los múltiplos de 4 son: " + m4)
console.log("Los múltiplos de 3 son: " + m3)
console.log("Los múltiplos de 2 son: " + m2)

//16.- Solicitar al usuario un nombre por medio del prompt e ingresarlo a una colección, validando que nose repita ningún nombre.
const exists = () => {
    nameArray = []
    string = prompt("Ingresa un nombre")
    nameArray.push(string)
    answer = window.confirm("¿Quieres ingresar otro nombre?")
    while (answer === true) {
        string2 = prompt("Ingresa otro nombre: ")
        if (nameArray.indexOf(string2) !== -1) {
            alert("El nombre ya existe. Intenta con uno nuevo")
        }
        else{
            nameArray.push(string2)
        }
        answer = window.confirm("¿Quieres ingresar otro nombre?")
    }
    
    console.log("Los nombres que ingresaste fueron " + nameArray)
}
exists()

//17.- Solicitar al usuario por medio del prompt una serie de numeros saparados por algun caracter y que cada numero se agregue a una colección
numberArray = []
numbers = prompt("Ingresa los números separados por un espacio o carácter: ")
numbersSplitted = numbers.split(/[^\d]/)
console.log(numbersSplitted)

//18.- Solicitar al usuario por medio del prompt nombres de frutas y guardarlas en una colección. Además solicitar al usuario un nombre usuario para poder eliminarlo del array.
fruitsArray = []
const deleteFruit = (array,string) => {
    noDeleted = array.filter(item => item !== string)
    console.log(noDeleted)
    return noDeleted
}
fruit = prompt("¿Qué fruta quieres agregar?")
fruitsArray.push(fruit)
answer2 = window.confirm("¿Quieres ingresar otra fruta?")
while (answer2 === true) {
    fruit2 = prompt("Ingresa otra fruta: ")
    fruitsArray.push(fruit2)
    answer2 = window.confirm("¿Quieres ingresar otra fruta?")
}
console.log("Los frutas que ingresaste fueron " + fruitsArray)
let newFruitArray = []
answer3 = window.confirm("¿Quieres eliminar alguna fruta?")
while (answer3 === true){
    fruitToDelete = prompt("Ingresa la fruta a eliminar: ")
    newFruitArray = deleteFruit(fruitsArray, fruitToDelete)
    newFruitArray !== [] ? newFruitArray = deleteFruit(newFruitArray, fruitToDelete) : null
    answer3 = window.confirm("¿Quieres eliminar alguna fruta?")
}
console.log("Las frutas que quedan en la lista son: " + newFruitArray)