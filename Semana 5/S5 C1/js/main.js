
// //Ejercicio 1
// var sideOne = parseInt(prompt("Ingresa el valor del primer lado"));
// var sideTwo = parseInt(prompt("Ingresa el valor del segundo lado"));
// var sideThree = parseInt(prompt("Ingresa el valor del tercer lado"));

// if(sideOne === sideTwo && sideOne === sideThree){
//     alert("El triángulo es equilátero");
// }
// else if(sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree){
//     alert("El triángulo es isóceles");
// }
// else{
//     alert("El triángulo es un triángulo escaleno");
// }



// //Ejercicio 2
// var sOne = parseInt(prompt("Ingresa el valor del primer lado"));
// var sTwo = parseInt(prompt("Ingresa el valor del segundo lado"));
// var areaC = sOne * sTwo;

// if(sOne === sTwo){
//     alert("La figura es un cuadrado y su área es " + areaC);
// }
// else{
//     alert("La figura es un rectángulo y su área es " + areaC);
// }

// //Ejercicio 3
// var base = parseInt(prompt("Ingresa el valor de la base del triángulo: "));
// var heigth = parseInt(prompt("Ingresa el valor de la altura del triángulo: "));
// var areaT = (base * heigth)/2;
// alert("El área de tu triángulo es de " + areaT);

//Ejericio 4

//condición ? true : false

//Ejercicio 4.1
var sideOne = parseInt(prompt("Ingresa el valor del primer lado"));
var sideTwo = parseInt(prompt("Ingresa el valor del segundo lado"));
var sideThree = parseInt(prompt("Ingresa el valor del tercer lado"));

sideOne === sideTwo && sideOne === sideThree ? alert("El triángulo es equilátero") : sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree ? alert("El triángulo es isóceles") : alert("El triángulo es escaleno");

//Ejercicio 4.2
var sOne = parseInt(prompt("Ingresa el valor del primer lado"));
var sTwo = parseInt(prompt("Ingresa el valor del segundo lado"));
var areaC = sOne * sTwo;

sOne === sideTwo ? alert(`La figura es un cuadrado y su área es de ${areaC}`) : alert("La figura es un rectángulo y su área es de :" + areaC);