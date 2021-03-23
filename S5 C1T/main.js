/*
1. Crear un script para calcular el IMC (Indice de masa corporal) de cualquier persona, y determinar la composición corporal de dicha persona bajo los siguientes criterios:
Peso inferior al normal : IMC Menos de 18.5
Normal  : IMC 18.5 – 24.9
Peso superior al normal : IMC 25.0 – 29.9
Obesidad : IMC Más de 30.0
2. Usando como referencia los siguientes datos de estaturas promedio:
            General Varón   Mujer
México      169.9   170.0   160.8   cm's
Australia   172.6   179.2   165.9   cm's
Canadá      171.0   178.1   163.9   cm's
Brasil      167.3   173.6   160.9   cm's
Reino Unido 171.0   177.5   164.4   cm's
crear un script que me permita conocer si mi estatura es superior, inferior o igual al promedio dependiendo de mi país y género. Si mi país no se encuentra en la lista, indicar que no se cuenta con el dato de estatura para ese país.
3. Tomando como referencia los siguientes datos de densidades:
Sustancia       Densidad (kg/m3)
Acero           7850
Cobre           8940
Oro             19300
Plata           10490
Diamante        3515
crear un script que me permita conocer el peso de un cubo de cualquier material (pedir al usuario la dimensión del lado del cubo y el material a consultar). Si el material no se encuentra en la lista, informar que no se cuentan con datos sobre la densidad de dicho material.
*/



//Ejercicio 1.- 
var height = parseFloat(prompt("Ingresa tu altura en metros:"));
var weight = parseInt(prompt("Ingresa tu peso en kilogramos:"));
var gender = prompt("Indica si eres Hombre (H) o Mujer (M):");
var country = prompt("¿Cuál es tu país de origen? (MX para México, AU para Australia, CA para Canadá, BR para Brasil y RU para Reino Unido)");
var calcula_imc = weight / (height**2);

let pais = [['MX', 1.699, 1.70, 1.608], 
            ['AU', 1.726, 1.792, 1.659], 
            ['CA', 1.71, 1.781, 1.639], 
            ['BR', 1.673, 1.736, 1.609],
            ['RU', 1.71, 1.775, 1.644]];

switch (true){
    case Number(calcula_imc)<=18.5:
        alert("Tu IMC es inferior al normal, por favor consulta a tu medico familiar");
        break;
    case Number(calcula_imc)>18.5 && Number(calcula_imc)<25:
        alert("Tu IMC es normal");
        break;
    case Number(calcula_imc)>25 && Number(calcula_imc)<30:
        alert("Tu IMC es superior al normal, se recomienda hacer ejercicio");
        break;
    case Number(calcula_imc)>30:
        alert("Tienes obecidad, por favor consuta a tu medico familiar");
        break;
    default:
        alert("Por favor ingresa un dato valido");
        break;
}
//Ejercicio 2
switch (gender) {
    case 'H':
        switch (country) {
            case pais[0][0]:
                switch (true) {
                    case Number(height) < pais[0][2]:
                        alert("Tu estatura es inferior al promedio de hombres mexicanos");
                        break;
                    case Number(height) > pais[0][2]:
                        alert("Tu estatura es superior al promedio de hombres mexicanos");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de hombres mexicanos");
                        break;
                }
            break;
            case pais[1][0]:
                switch (true) {
                    case Number(height) < pais[1][2]:
                        alert("Tu estatura es inferior al promedio de hombres australianos");
                        break;
                    case Number(height) > pais[1][2]:
                        alert("Tu estatura es superior al promedio de hombres australianos");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de hombres australianos");
                        break;
                }
            break;
            case pais[2][0]:
                switch (true) {
                    case Number(height) < pais[2][2]:
                        alert("Tu estatura es inferior al promedio de hombres canadienses");
                        break;
                    case Number(height) > pais[2][2]:
                        alert("Tu estatura es superior al promedio de hombres canadienses");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de hombres canadienses");
                        break;
                }
            break;
            case pais[3][0]:
                switch (true) {
                    case Number(height) < pais[3][2]:
                        alert("Tu estatura es inferior al promedio de hombres brasileños");
                        break;
                    case Number(height) > pais[3][2]:
                        alert("Tu estatura es superior al promedio de hombres brasileños");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de hombres brasileños");
                        break;
                }
            break;
            case pais[4][0]:
                switch (true) {
                    case Number(height) < pais[4][2]:
                        alert("Tu estatura es inferior al promedio de hombres ingleses");
                        break;
                    case Number(height) > pais[4][2]:
                        alert("Tu estatura es superior al promedio de hombres ingleses");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de hombres ingleses");
                        break;
                }
            break;
            default:
                alert("No existen datos sobre tu país");
            break;
        }
    //break; No aplica para que también haga el default que es la estatura general
    case 'M':
        switch (country) {
            case pais[0][0]:
                switch (true) {
                    case Number(height) < pais[0][3]:
                        alert("Tu estatura es inferior al promedio de mujeres mexicanas");
                        break;
                    case Number(height) > pais[0][3]:
                        alert("Tu estatura es superior al promedio de mujeres mexicanas");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de mujeres mexicanas");
                        break;
                }
            break;
            case pais[1][0]:
                switch (true) {
                    case Number(height) < pais[1][3]:
                        alert("Tu estatura es inferior al promedio de mujeres australianas");
                        break;
                    case Number(height) > pais[1][3]:
                        alert("Tu estatura es superior al promedio de mujeres australianas");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de mujeres australianas");
                        break;
                }
            break;
            case pais[2][0]:
                switch (true) {
                    case Number(height) < pais[2][3]:
                        alert("Tu estatura es inferior al promedio de mujeres canadienses");
                        break;
                    case Number(height) > pais[2][3]:
                        alert("Tu estatura es superior al promedio de mujeres canadienses");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de mujeres canadienses");
                        break;
                }
            break;
            case pais[3][0]:
                switch (true) {
                    case Number(height) < pais[3][3]:
                        alert("Tu estatura es inferior al promedio de mujeres brasileñas");
                        break;
                    case Number(height) > pais[3][3]:
                        alert("Tu estatura es superior al promedio de mujeres brasileñas");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de mujeres brasileñas");
                        break;
                }
            break;
            case pais[4][0]:
                switch (true) {
                    case Number(height) < pais[4][3]:
                        alert("Tu estatura es inferior al promedio de mujeres inglesas");
                        break;
                    case Number(height) > pais[4][3]:
                        alert("Tu estatura es superior al promedio de mujeres inglesas");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de mujeres inglesas");
                        break;
                }
            break;
            default:
                alert("No existen datos sobre tu país");
            break;
        }
    //break; No aplica para que también haga el default que es la estutra general
    default:
        switch (country) {
            case pais[0][0]:
                switch (true) {
                    case Number(height) < pais[0][1]:
                        alert("Tu estatura es inferior al promedio de mexicanos");
                        break;
                    case Number(height) > pais[0][1]:
                        alert("Tu estatura es superior al promedio de mexicanos");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de mexicanos");
                        break;
                }
            break;
            case pais[1][0]:
                switch (true) {
                    case Number(height) < pais[1][1]:
                        alert("Tu estatura es inferior al promedio de australianos");
                        break;
                    case Number(height) > pais[1][1]:
                        alert("Tu estatura es superior al promedio de australianos");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de australianos");
                        break;
                }
            break;
            case pais[2][0]:
                switch (true) {
                    case Number(height) < pais[2][1]:
                        alert("Tu estatura es inferior al promedio de canadienses");
                        break;
                    case Number(height) > pais[2][1]:
                        alert("Tu estatura es superior al promedio de canadienses");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de canadienses");
                        break;
                }
            break;
            case pais[3][0]:
                switch (true) {
                    case Number(height) < pais[3][1]:
                        alert("Tu estatura es inferior al promedio de brasileños");
                        break;
                    case Number(height) > pais[3][1]:
                        alert("Tu estatura es superior al promedio de brasileños");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de brasileños");
                        break;
                }
            break;
            case pais[4][0]:
                switch (true) {
                    case Number(height) < pais[4][1]:
                        alert("Tu estatura es inferior al promedio de ingleses");
                        break;
                    case Number(height) > pais[4][1]:
                        alert("Tu estatura es superior al promedio de ingleses");
                        break;
                    default:
                        alert("Tu estatura es igual al promedio de ingleses");
                        break;
                }
            break;
            default:
                alert("No existen datos sobre tu país");
            break;
        }
        break;
}

//Ejercicio 3
var material = prompt("Ingresa el material a consultar:");
let densidad = [['Acero', 7850], 
                ['Cobre', 8940],
                ['Oro', 19300],
                ['Plata', 10490],
                ['Diamante', 3515]];
var side = parseFloat(prompt("Ingresa el lado del cubo que quieres consultar (en Metros):"));
var vol = side ** 3;

switch (material) {
    case densidad[0][0]:
        var cubeWeight = vol * densidad[0][1];
        alert(`El peso del cubo de ${densidad[0][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[1][0]:
        var cubeWeight = vol * densidad[1][1];
        alert(`El peso del cubo de ${densidad[1][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[2][0]:
        var cubeWeight = vol * densidad[2][1];
        alert(`El peso del cubo de ${densidad[2][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[3][0]:
        var cubeWeight = vol * densidad[3][1];
        alert(`El peso del cubo de ${densidad[3][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[4][0]:
        var cubeWeight = vol * densidad[4][1];
        alert(`El peso del cubo de ${densidad[4][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[5][0]:
        var cubeWeight = vol * densidad[5][1];
        alert(`El peso del cubo de ${densidad[5][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    default:
        alert("El material a consultar no se encuentra en la Base de Datos. Favor de hacer el cálculo manual!")
        break;
}


