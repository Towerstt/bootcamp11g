/*var kodersList = [
    [
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo Poissot"
    ]
]

//-crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
kodersList2 = [];
kodersList.forEach(item => kodersList2.push(item[0] +" "+ item[1]));
alert(kodersList2);
nameSelected = prompt("Elige el nombre a buscar: ");
const checkname = (name_given) => {
    for(let i =0; i<kodersList2.length;i++){
        let firstName = kodersList2[i].split(" ")[0];
            firstName === name_given ? alert(`El nombre ${name_given} sí está en la lista`): alert(`El nombre ${name_given} no está en la lista`)
    }  
}
checkname(nameSelected);*/


//Ejercicio 2.- 
var productsList = [{name:"producto 1",
                     price:12.45,
                     category:"Miscellaneous"},
                    {name:"producto 2",
                     price:25.13,
                     category:"Vegetables"},
                    {name:"producto 3",
                     price:45.00,
                     category:"Cloths"},
                    {name:"producto 4",
                     price:12500.00,
                    category:"Computers"},
                    {name:"producto 5",
                     price:15500.00,
                     category:"Computers"},
                    {name:"producto 6",
                     price:8729.00,
                     category:"Computers"},
                    {name:"producto 7",
                     price:150.00,
                     category:"Cloths"},
                    {name:"producto 8",
                     price:100.00,
                     category:"Miscellaneous"},
                    {name:"producto 9",
                     price:50.00,
                     category:"Vegetables"},
                    {name:"producto 10",
                     price:200.00,
                     category:"Cloths"}
]

/*
    -quiero conocer la cantidad de productos en el array
    -quiero conocer el costo total de todos los productos del array
    -quiero conocer la cantidad de productos de cada categoría
        (Vegetables, Cloths, Miscellaneous, Computers)
    - quiero conocer el costo por categoría
    -quiero un nuevo array para cada categoría
    -quiero un nuevo array de strings que tenga lo siguiente
        [
            "El { productName } tiene un costo de { price }"
        ]
*/

// //quiero conocer la cantidad de productos en el array
// alert(`La cantidad de productos en tu lista de compra es de ${productsList.length}`);
// //quiero conocer el costo total de todos los productos del array
// let totalCost = 0;
// for (let i = 0; i < productsList.length; i++) {
//     totalCost += productsList[i].price;
//     console.log(productsList[i].price);
// }
// alert(`El costo total de todos los productos de la lista es de $${totalCost}`);
// //quiero conocer la cantidad de productos de cada categoría (Vegetables, Cloths, Miscellaneous, Computers)
// //quiero conocer el costo por categoría
// let numVegetables = 0, 
//     costVegetables = 0,
//     numCloths = 0,
//     costCloths = 0, 
//     numMiscellaneous = 0,
//     costMiscellaneous = 0, 
//     numComputers = 0,
//     costComputers = 0,
//     arrayVeg = [],
//     arrayClot = [],
//     arrayMisc = [],
//     arrayComp = [];
// for (let i = 0; i < productsList.length; i++) {
//     switch (productsList[i].category) {
//         case "Vegetables":
//             numVegetables += 1;
//             costVegetables += productsList[i].price;
//             arrayVeg.push(Object.values(productsList[i]));
//             break;
//         case 'Cloths':
//             numCloths += 1;
//             costCloths += productsList[i].price;
//             arrayClot.push(Object.values(productsList[i]));
//             break;
//         case 'Miscellaneous':
//             numMiscellaneous += 1;
//             costMiscellaneous += productsList[i].price;
//             arrayMisc.push(Object.values(productsList[i]));
//             break;
//         case 'Computers':
//             numComputers += 1;
//             costComputers += productsList[i].price;
//             arrayComp.push(Object.values(productsList[i]));
//             break;
//         default:
//             alert("Revisa la información")
//             break;
//     }        
// }
// alert(`Vegetables: ${numVegetables} con un costo de $${costVegetables}, 
//        Cloths: ${numCloths} con un costo de $${costCloths},
//        Miscellaneous: ${numMiscellaneous} con un costo de $${costMiscellaneous},
//        Computers: ${numComputers} con un costo de $${costComputers}`);

// //quiero un nuevo array para cada categoría
// console.log(arrayVeg)
// console.log(arrayClot)
// console.log(arrayMisc)
// console.log(arrayComp )

// //quiero un nuevo array de strings que tenga lo siguiente
// function objToString(array){
//     for (let i = 0; i < array.length; i++) {
//         alert(`El ${array[i].name} tiene un costo de $${array[i].price}`) 
//     }
// }
// objToString(productsList)


//Ejercicio 2.- ------------------------------ TAREA ------------------------------
//forEach, map, reduce, filter

//1.- quiero conocer la cantidad de productos en el array
const numOfPdts = array1 => array1.length
let nOfP = numOfPdts(productsList)
console.log(`La lista tiene ${nOfP} elementos`);
//2.- quiero conocer el costo total de todos los productos del array
const costcalc = array1 => {
    let totCost = 0;
    array1.map(element => totCost += element.price)[array1.length-1];
    return totCost;}
totalCost2= costcalc(productsList);
console.log(totalCost2);

const costcalc2 = array =>{array.reduce((accum, current) => accum + current.price, 0)}



//3.- quiero conocer la cantidad de productos de cada categoría (Vegetables, Cloths, Miscellaneous, Computers)
const categ = (array1, cat) => array1.filter(array1 => array1.category === cat)
let veg = categ(productsList, "Vegetables");
let clo = categ(productsList, "Cloths");
let mis = categ(productsList, "Miscellaneous");
let com = categ(productsList, "Computers");
console.log(veg.length);
console.log(clo.length);
console.log(mis.length);
console.log(com.length);

//4.- quiero conocer el costo por categoría
totCostVeg = costcalc(veg);
console.log(totCostVeg)
totCostClo = costcalc(clo);
console.log(totCostClo)
totCostMis = costcalc(mis);
console.log(totCostMis)
totCostCom = costcalc(com);
console.log(totCostCom)

//5.- quiero un nuevo array para cada categoría
console.log(veg);
console.log(clo);
console.log(mis);
console.log(com);

//6.- quiero un nuevo array de strings que tenga lo siguiente ["El { productName } tiene un costo de { price }"]
const toStr = (array1) => array1.forEach( element => console.log(`El ${ element.name } tiene un costo de ${ element.price }`))
toStr(productsList);