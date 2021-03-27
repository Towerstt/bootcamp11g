
let mentorsArray = [
    {
        name:"Israel Salinas Martinez",
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

//mentorsArray = [{name:, scores: [{signatures:, score:}*4] }*4]
let mentorNames = []
mentorsArray.forEach(element => mentorNames.push(element.name));
    //Jalar Materias
let courses = []
mentorsArray.forEach((element, index) => courses.push(element.scores[index].signature))
    //Jalar Calificaciones
let htmlScores = []
mentorsArray.forEach(element => htmlScores.push(element.scores[0].score))
let cssScores = []
mentorsArray.forEach(element => cssScores.push(element.scores[1].score))
let jsScores = []
mentorsArray.forEach(element => jsScores.push(element.scores[2].score))
let reactjsScores = []
mentorsArray.forEach(element => reactjsScores.push(element.scores[3].score))

//1.- Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
const averageScore = array1 => array1.reduce((accum, current) => accum+current)
averageScores = []
averageScores.push(averageScore(htmlScores)/htmlScores.length)
averageScores.push(averageScore(cssScores)/cssScores.length)
averageScores.push(averageScore(jsScores)/jsScores.length)
averageScores.push(averageScore(reactjsScores)/reactjsScores.length)
const printAvergageScores = (array1, signatureAverage) => array1.map((element, index) => console.log(`El promedio en ${array1[index]} fue de ${signatureAverage[index]}`))
printAvergageScores(courses, averageScores)

//2.- Obtener el promedio individual de cada mentor
let ismScores = []
mentorsArray[0].scores.forEach(element => ismScores.push(element.score))
let dcmScores = []
mentorsArray[1].scores.forEach(element => dcmScores.push(element.score))
let csScores = []
mentorsArray[2].scores.forEach(element => csScores.push(element.score))
let mvsScores = []
mentorsArray[3].scores.forEach(element => mvsScores.push(element.score))

averageMentorsScore = []
averageMentorsScore.push(averageScore(ismScores)/ismScores.length)
averageMentorsScore.push(averageScore(dcmScores)/dcmScores.length)
averageMentorsScore.push(averageScore(csScores)/csScores.length)
averageMentorsScore.push(averageScore(mvsScores)/mvsScores.length)
printAvergageScores(mentorNames, averageMentorsScore)

//3.- -Obtener un array de strings con la siguiente forma: "Mi nombre es {nombre} y mi promedio es de {promedio}"
const printAvergageScores2 = (array1, mentorAverage) => array1.map((element, index) => (`Mi nombre es ${array1[index]} y mi promedio es de ${mentorAverage[index]}`))
let stringArray = printAvergageScores2(mentorNames, averageMentorsScore)
console.log(stringArray)

//4.- -Obtener la lista de mentores cuyo promedio sea mayor a 9.5
bestMent = []
const bestMentors = (array1, mentorAverage) => mentorAverage.filter((element, index) => element > 9 && bestMent.push(array1[index]))
bestMentors(mentorNames, averageMentorsScore)
console.log(bestMent)
console.log(`Los mejores mentores son ${bestMent}`)