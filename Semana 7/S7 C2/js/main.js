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

const createMentorTable = array =>{
    const getMentorAverage = (mentorName) => {
        let mentorScores = array.find( (mentor) => {
            return mentor.name === mentorName
        }).scores
        let mentorAverage = mentorScores.reduce( ( accum, current ) => {
            return accum + current.score
        },0 ) / mentorScores.length
        return mentorAverage
    }
    
    let container = document.createElement("div")
    document.body.appendChild(container)
    
    
    const printTableOK = () =>{
        let dataTable = document.createElement("table")
        let tableHeader = document.createElement("thead")
        let headerRow = document.createElement("tr")
        let headArray = ["Nombre", "HTML", "CSS", "JS", "ReactJS", "Promedio", "Eliminar"]
        headArray.forEach(item =>{
            let hd = document.createElement("td")
            let ht = document.createTextNode(item)
            hd.appendChild(ht)
            headerRow.appendChild(hd)
        })
        document.body.appendChild(dataTable)
        dataTable.appendChild(tableHeader)
        tableHeader.appendChild(headerRow)
    
        let tableBody = document.createElement("tbody")
        document.body.appendChild(tableBody)
    
    
        
    
        array.forEach(item => {
            
            let itemRow = document.createElement("tr")
            let nameTd = document.createElement("td")
            nameTd.classList.add("name")
            let htmlTd = document.createElement("td")
            let cssTd = document.createElement("td")
            let jsTd = document.createElement("td")
            let reactTd = document.createElement("td")
            let avgTd = document.createElement("td")
            let bttnTd = document.createElement("td")
            let bttn = document.createElement("button")
            bttnTd.appendChild(bttn)
    
            let nameText = document.createTextNode(item.name)
            let htmlText = document.createTextNode(item.scores[0].score)
            let cssText = document.createTextNode(item.scores[1].score)
            let jsText = document.createTextNode(item.scores[2].score)
            let reactText = document.createTextNode(item.scores[3].score)
            let avgText = document.createTextNode(getMentorAverage(item.name))
            let bttnText = document.createTextNode("Eliminar")
            
    
            nameTd.appendChild(nameText)
            htmlTd.appendChild(htmlText)
            cssTd.appendChild(cssText)
            jsTd.appendChild(jsText)
            reactTd.appendChild(reactText)
            avgTd.appendChild(avgText)
            bttn.appendChild(bttnText)
          
            
    
    
    
    
            
            itemRow.append(nameTd)
            itemRow.appendChild(htmlTd)
            itemRow.appendChild(cssTd)
            itemRow.appendChild(jsTd)
            itemRow.appendChild(reactTd)
            itemRow.appendChild(avgTd)
            itemRow.appendChild(bttnTd)
    
            tableBody.appendChild(itemRow)
    
        })
        dataTable.appendChild(tableBody)
        container.appendChild(dataTable)
        
    }
    const mentorsAverage = array =>{
        let total = array.reduce ((accum, item) =>{
            accum += getMentorAverage(item.name)
            return accum
        },0)
        return (total/array.length).toFixed(2)
    }
    
    printTableOK()
    
    
    
    let totalAvgElement = document.createElement("h3")
    let totalAvgText = document.createTextNode("Promedio General:\t" + mentorsAverage(array))
    totalAvgElement.appendChild(totalAvgText)
    container.appendChild(totalAvgElement)
}
createMentorTable(mentorsArray)



//--------------------------- TAREA ---------------------------------------
const deleteMentor = (arrayMentors, arrayNames) =>{
    let newArray = arrayMentors.filter(item =>
        item.name !== arrayNames
    )
    createMentorTable(newArray)
}

let mentorsArray2 = mentorsArray
let tableRows = document.querySelectorAll("tbody tr")
console.log(tableRows)
mentorNames = []
tableRows.forEach(item => mentorNames.push(item.firstChild.innerText))
mentorButtons = []
tableRows.forEach(item => mentorButtons.push(item.lastChild.lastChild))
console.log(mentorButtons)
// mentorButtons.forEach((item, index) => {
//     item.addEventListener("click", deleteMentor(mentorsArray2, mentorNames[index]))
// })


//---------------------------FORMULARIO--------------------------------
let newMentorNames = document.getElementById("newMentorName").target.value
console.log(newMentorNames)


