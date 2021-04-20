// Crear un sistema en el que pueda registrar mascotas y dueños, ambos deben tener su propia colección dentro de la base de datos. Debo poder ver a todos los dueños, y poder ver las mascotas que tiene cada dueño. También debo de poder ver las mascotas que no tienen dueño aún, y de ser así, debo poder adoptar a dicha mascota.

//1.- Form para registrar mascotas - AJAX 1
//2.- Form para registrar dueños - AJAX 2

let petWrapperIndex = $('#pet-wrapper')
petWrapperIndex.load('views/registerPet.html #pet-wrapper-transitive')