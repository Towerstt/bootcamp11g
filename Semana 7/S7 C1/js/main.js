// let nameArray = ["Name 1", "Name 2", "Name 3"]
// nameArray.forEach(item =>{
//     let li_item = document.createElement("li")
//     let txt = document.createTextNode(item)
//     document.body.appendChild(li_item)
//     li_item.appendChild(txt)
// })

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

/*
Crear table
Crear tr - Table row
Crear td - Table columnas
*/



// const printTable = array =>{
//     let table = document.createElement("table")
//     array.forEach((item, index) =>{
//         let tableHead = document.createElement("thead")
//         let tableRow = document.createElement("tr")
//         let tableColumn = document.createElement("td")
//         let tableColumn1 = document.createElement("td")
//         let tableColumn2 = document.createElement("td")
//         let tableColumn3 = document.createElement("td")
//         let tableColumn4 = document.createElement("td")

//         let names = document.createTextNode(item.name)
//         let htmlScores = document.createTextNode(item.scores[0].score)
//         let cssScores = document.createTextNode(item.scores[1].score)
//         let jsScores = document.createTextNode(item.scores[2].score)
//         let reactScores = document.createTextNode(item.scores[3].score)

//         tableColumn.appendChild(names)
//         tableColumn1.appendChild(htmlScores)
//         tableColumn2.appendChild(cssScores)
//         tableColumn3.appendChild(jsScores)
//         tableColumn4.appendChild(reactScores)

//         tableRow.appendChild(tableColumn)
//         tableRow.appendChild(tableColumn1)
//         tableRow.appendChild(tableColumn2)
//         tableRow.appendChild(tableColumn3)
//         tableRow.appendChild(tableColumn4)
        
//         table.appendChild(tableRow)
//     })
//     document.body.appendChild(table)
// }
// printTable(mentorsArray)

const getMentorAverage = (mentorName) => {
    let mentorScores = mentorsArray.find( (mentor) => {
        return mentor.name === mentorName
    }).scores
    let mentorAverage = mentorScores.reduce( ( accum, current ) => {
        return accum + current.score
    },0 ) / mentorScores.length
    return mentorAverage
}

// const averageMentorsScore = array =>{
//     array.reduce((accum, item) =>{
//         accum = item.scores.reduce((accum1, item1) => {
//             accum1 += item1.score
//             console.log(accum1)
//             return accum1
//         },0)
//         console.log(accum/4)
//         return accum/4
//     },0)
// }
// console.log(averageMentorsScore(mentorsArray))

let container = document.createElement("div")
document.body.appendChild(container)


const printTableOK = () =>{
    let dataTable = document.createElement("table")
    let tableHeader = document.createElement("thead")
    let headerRow = document.createElement("tr")
    let headArray = ["Nombre", "HTML", "CSS", "JS", "ReactJS", "Promedio"]
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
    

    mentorsArray.forEach(item => {
        
        let itemRow = document.createElement("tr")
        let nameTd = document.createElement("td")
        let htmlTd = document.createElement("td")
        let cssTd = document.createElement("td")
        let jsTd = document.createElement("td")
        let reactTd = document.createElement("td")
        let avgTd = document.createElement("td")

        let nameText = document.createTextNode(item.name)
        let htmlText = document.createTextNode(item.scores[0].score)
        let cssText = document.createTextNode(item.scores[1].score)
        let jsText = document.createTextNode(item.scores[2].score)
        let reactText = document.createTextNode(item.scores[3].score)
        let avgText = document.createTextNode(getMentorAverage(item.name))
   
    
        nameTd.appendChild(nameText)
        htmlTd.appendChild(htmlText)
        cssTd.appendChild(cssText)
        jsTd.appendChild(jsText)
        reactTd.appendChild(reactText)
        avgTd.appendChild(avgText)
        
        itemRow.append(nameTd)
        itemRow.appendChild(htmlTd)
        itemRow.appendChild(cssTd)
        itemRow.appendChild(jsTd)
        itemRow.appendChild(reactTd)
        itemRow.appendChild(avgTd)

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
let totalAvgText = document.createTextNode("Promedio General:\t" + mentorsAverage(mentorsArray))
totalAvgElement.appendChild(totalAvgText)
container.appendChild(totalAvgElement)














// const printTable_2 () =>{
//     let dataTable = document.createElement("table")
//     let dataHeader = document.createElement("thead")
//     let headerRow = document.createElement("tr")
//     headersArray.forEach(header=>{
//         let head = document.createElement("tr")
//         let headText = document.createTextNode("th")
//         head.appendChild(headText)
//         headerRow.appendChild(head)
//     })
//     dataHeader.appendChild(headerRow)
//     dataTable.appendChild(dataHeader)
//     document.body.appendChild(dataTable)

//     let dataTableBody = document.createElement("tbody")
//     mentorsArray.forEach(item => {
//         let itemRow = document.createElement("tr")
//         let htmlTd = document.createElement("td")
//         let cssTd = document.createElement("td")
//         let jsTd = document.createElement("td")
//         let reactTd = document.createElement("td")

//         let htmlText = document.createTextNode(item.scores[0].score)
//         let cssText = document.createTextNode(item.scores[1].score)
//         let jsText = document.createTextNode(item.scores[2].score)
//         let reactText = document.createTextNode(item.scores[3].score)

//         htmlTd.appendChild(htmlText)
//         cssTd.appendChild(cssText)
//         jsTd.appendChild(jsText)
//         reactTd.appendChild(reactText)
//     })
// } 