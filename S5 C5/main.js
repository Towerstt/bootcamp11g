let someArray = [0,1,2,3,4,5]
//Obtener resultado [0,1,2,3,4,5,4,3,2,1,0]

let mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:10
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

/*
{
  HTML:[
    {
      mentor:"Israel Salinas",
      score:10
    },
    {
      mentor:"David Cermeño Moranchel",
      score:8
    }
  ],
  CSS:[
    {
      
    }
  ]

Array1>Objeto1*4>Propiedad-Nombre+Propiedad-Calificaciones-Array2>Objeto2*4>Materia1+Calificación
Objeto-A>Array-Materia*4>Objeto-A*4>Propiedad-Nombre+Propiedad-Calificacion
}*/

//Jalar info
    //Jalar Nombres
let mentorNames = []
mentorsArray.forEach(element => mentorNames.push(element.name));
    //Jalar Calificaciones
let htmlScores = []
mentorsArray.forEach(element => htmlScores.push(element.scores[0].score))
let cssScores = []
mentorsArray.forEach(element => cssScores.push(element.scores[1].score))
let jsScores = []
mentorsArray.forEach(element => jsScores.push(element.scores[2].score))
let reactjsScores = []
mentorsArray.forEach(element => reactjsScores.push(element.scores[3].score))

    //Jalar Materias
let courses = []
mentorsArray.forEach((element, index) => courses.push(element.scores[index].signature))

totalScores = [[courses[0], htmlScores],
               [courses[1], cssScores],
               [courses[2], jsScores],
               [courses[3], reactjsScores]]


//Crear el objeto
var mentorsArray2 = {}
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        Object.defineProperties(mentorsArray2, courses[i], {
            enumerable: false,
            configurable: false,
            writable: false,
            value: [{mentor: mentorNames[i], score: totalScores[i][j] }]
            })
        
    }         
}



console.log(mentorNames)
console.log(htmlScores)
console.log(courses)
console.log(totalScores)