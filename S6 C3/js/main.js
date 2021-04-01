const getInitials = array1 => {
    let nameDivided = array1.split(" ")
    let initials = ''
    nameDivided.forEach(item => initials += item.charAt(0) +'.' )
    return initials
}
//nombre = prompt("Ingresa nombre: ")
//console.log(getInitials(nombre))

//Realizar una función que reciba n parametros de tipo string y validar por cada string cuantas vocales tiene y retornar el resultado en un objeto.

// function vowels (...string) {
//     const vocales = /a|e|i|o|u|á|é|í|ó|ú/gi
//     const objectContainer = {}
//     string.forEach(item => {
//         const vowelQuantity = item.match(vocales).length
//         objectContainer[string] = vowelQuantity
//     })
//     return objectContainer
// }  

// console.log(vowels("hola mundo", "Adios mundo", "bye world", "aurevoir monde"))

// //Realizar las funciones que permitan calcular el área y circuferencia de un circulo recibiendo sus parametros respectivos. Nota: Ambas funciones deben estar en sus 2 diferentes formas de declaración (arrow functions y function)
// const PI = 3.1416
// const circleProp = radio => console.log(`Su área es de ${PI * radio**2} y su circunferencia es de ${PI * radio * 2}`)
// r = prompt("Ingresa el radio del círculo: ")
// circleArea(r)

// //Realizar un programa que permita al usuario seleccionar de un menu: suma, resta, multiplicación o división, el área o circunferencia de un Circulo e imprimir el resultado en consola. Nota: El programa debera ejecutarse al invocar una función.
// const choice = () =>{
//     console.log("Ingresa el número de acuerdo con lo que deseas hacer: ")
//     console.log("(1) SUMA")
//     console.log("(2) RESTA")
//     console.log("(3) MULTIPLICACIÓN")
//     console.log("(4) DIVISIÓN")
//     console.log("(5) Área y Circunferencia de Círculo")
//     answer = prompt("Ingresa el número: ")
//     switch (answer) {
//         case 1:
//             n1 = parseInt(prompt("Ingresa el primer número: "))
//             n2 = parseInt(prompt("Ingresa el segundo número: "))
//             console.log(`El resultado de tu SUMA es ${n1 + n2}`)
//             break;
//         case 2:
//             n1 = parseInt(prompt("Ingresa el primer número: "))
//             n2 = parseInt(prompt("Ingresa el segundo número: "))
//             console.log(`El resultado de tu RESTA es ${n1 - n2}`)
//             break;
//         case 3:
//             n1 = parseInt(prompt("Ingresa el primer número: "))
//             n2 = parseInt(prompt("Ingresa el segundo número: "))
//             console.log(`El resultado de tu MULTIPLICACIÓN es ${n1 * n2}`)
//             break;
//         case 4:
//             n1 = parseInt(prompt("Ingresa el primer número: "))
//             n2 = 0;
//             n2 === 0 ? n2 = parseInt(prompt("Ingresa el segundo número: ")) : null
//             console.log(`El resultado de tu DIVISIÓN es ${n1 / n2}`)
//             break;
//         case 5:
//             rad = parseInt(prompt("Ingresa el radio número: "))
//             circleProp(rad)
//             break;
//         default:
//             console.log("Ingresa una opción válida")
//             break;
//     }

// }

// choice()


const arrayNames = [
    ["Ruben", "Flores"],
    ["Andre", "Vazquez"],
    ["Fernanda", "Palacios"],
    ["Goerge", "Camarillo"],
    ["Ale", "Paez"],
    ["Shari", "Andrade"],
    ["Erick", "Trujillo"],
    ["Arce", "Gutiérrez"],
    ["Juan", "Hernandez"]
]
//obtener de cada nombre la siguiente salida: Ruben Flores R.B.
const result1 = array => array.forEach((item, index) => console.log(item.join(' ') + " " + getInitials(item.join(' '))))
result1(arrayNames)

arrayKoders = [
	[
		["name", "Ruben"],
		["lastName", "Alvarez"],
		["generation", 1],
       	["bootcamp", "python"],
       	["score", 90]
	],
	[
		["name", "Andre"],
		["lastName", "Alvarez"],
		["generation", 1],
       	["bootcamp", "python"],
       	["score", 90]
	],
	[
		["name", "Ale"],
		["lastName", "Paez"],
		["generation", 1],
       	["bootcamp", "python"],
       	["score", 98]
	],
	[
		["name", "Juan Pi"],
		["lastName", "López"],
		["generation", 10],
       	["bootcamp", "JavaScript"],
       	["score", 95]
	],
	[
		["name", "Cintia"],
		["lastName", "Gomez"],
		["generation", 10],
       	["bootcamp", "JavaScript"],
       	["score", 85]
	],
	[
		["name", "Shari"],
		["lastName", "Andrade"],
		["generation", 10],
       	["bootcamp", "JavaScript"],
       	["score", 90]
	],
	[
		["name", "Arce"],
		["lastName", "Gutierrez"],
		["generation", 10],
       	["bootcamp", "JavaScript"],
       	["score", 90]
	],
	[
		["name", "JC"],
		["lastName", "Hernandez"],
		["generation", 10],
       	["bootcamp", "JavaScript"],
       	["score", 90]
	],
	[
		["name", "Erick"],
		["lastName", "Trujillo"],
		["generation", 10],
       	["bootcamp", "JavaScript"],
       	["score", 90]
	]
]

function Koder(name, lastName, generation, bootcamp, score){
    this.name = name
    this.lastName = lastName
    this.generation = generation
    this.bootcamp = bootcamp
    this.score = score
}

const arrayToObject = arrayKoders.map((arrayProperties) => {
    const objectKoder = arrayProperties.reduce((object, koderProperty) =>{
        const key = koderProperty[0]
        const value = koderProperty[1]
        object[key] = value
        return object
        },{})
    return new Koder(objectKoder.name, objectKoder.lastName, objectKoder.generation, objectKoder.bootcamp, objectKoder.score)
})
console.log(arrayToObject)

// Obtener los koders que se encuentren en el Bootcamp de Python
const pythonKoders = (object, subject) => object.filter(item => item.bootcamp === subject)
console.log(pythonKoders(arrayToObject, "python"))
// Obtener los koders que se encuentren en el bootcamp de JS
console.log(pythonKoders(arrayToObject, "JavaScript"))
// Obtener el promedio general de los todos los koders registrados
const koderAverage = object => object.reduce((avg, item) => {return avg += item.score},0)/object.length
console.log(koderAverage(arrayToObject).toFixed(2))
// DOM -> Pintar los koders en una tabla (utilizando los métodos para manipular el DOM)