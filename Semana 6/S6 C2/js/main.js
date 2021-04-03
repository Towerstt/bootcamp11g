const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]

// declaración

function Koder(name, lastName, generation, birthDate, bootcamp, scores) {
    this.name = name;
    this.lastName = lastName;
    this.generation = generation;
    this.birthDate = birthDate;
    this.bootcamp = bootcamp;
    this.school = 'Kodemia';
    this.scores = scores;
    this.greet = function() {
        console.log(`Hola Mi nombre es ${name} y soy de la generación ${this.generation}º de ${this.bootcamp}`)
    }
    this.asking = function(question, mentor) {
        console.log(`${mentor} tengo duda sobre: ${question}`)
    }
    this.getAge = function() {
        let today = new Date();
        let birthDate = new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }
    this.getAvg = function () {
        const sumaScore = this.scores.reduce((accum, current) =>{
            return accum += current.score
        }, 0)
        const avg = sumaScore / this.scores.length
        return avg
    }
}

// instanciar

const koderDiana = new Koder('Diana', 'Ibañez', 11, '1996/06/24', 'Peru', 'JavaScript', 'KoderHause')
const koderTaquito = new Koder('Vero', 'Paredes', 11, '1992/06/03', 'Mexico', 'JavaScript')

const koders = kodersCollection.map((current)=> new Koder(current.name, current.lastName, current.generation, current.birthday, current.bootcamp, current.scores))

console.log('Koders')
console.log(koders)

const kodersJS = koders.filter((current)=> current.bootcamp === 'JavaScript')
const kodersPython = koders.filter((current)=> current.bootcamp === 'Python')