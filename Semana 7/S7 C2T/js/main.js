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


const deleteMentor = event => {
    //console.log( event.target )
    let mentorIndex = event.target.dataset.mentorIndex 
    mentorsArray.splice(mentorIndex,1)
    console.log( mentorsArray )

    printTable()
}

const printTable = () => {

    const getMentorAverage = (mentorName) => {
        let mentorScores = mentorsArray.find( (mentor) => {
            return mentor.name === mentorName
        }).scores
        let mentorAverage = mentorScores.reduce( ( accum, current ) => {
            return accum + current.score
        },0 ) / mentorScores.length
        return mentorAverage
    }

    const mentorsAverage = array =>{
        let total = array.reduce ((accum, item) =>{
            accum += getMentorAverage(item.name)
            return accum
        },0)
        return (total/array.length).toFixed(2)
    }

    let tbody = document.getElementById("tableBodyOk")
    while (tbody.lastElementChild) {
        tbody.removeChild( tbody.lastElementChild );
    }

    let avgUpdate = document.getElementById("promedio")
    while (avgUpdate.lastElementChild) {
        avgUpdate.removeChild( avgUpdate.lastElementChild );
    }

    mentorsArray.forEach((item, index) => {
        
        let itemRow = document.createElement("tr")
        let indexTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let htmlTd = document.createElement("td")
        let cssTd = document.createElement("td")
        let jsTd = document.createElement("td")
        let reactTd = document.createElement("td")
        let avgTd = document.createElement("td")
        let removeTd = document.createElement("td")

        let mentorIndex = document.createTextNode(index + 1)
        let nameText = document.createTextNode(item.name)
        let htmlText = document.createTextNode(item.scores[0].score)
        let cssText = document.createTextNode(item.scores[1].score)
        let jsText = document.createTextNode(item.scores[2].score)
        let reactText = document.createTextNode(item.scores[3].score)

        let avgText = document.createTextNode(getMentorAverage(item.name))


        let removeBtn = document.createElement("button")
        removeBtn.innerHTML = "Eliminar"; 
        var btn = document.createAttribute("class");
        btn.value = "btn btn-danger btn-delete";
        removeBtn.setAttributeNode(btn);

        removeBtn.dataset.mentorIndex = index
   
        indexTd.appendChild( mentorIndex )
        nameTd.appendChild(nameText)
        htmlTd.appendChild(htmlText)
        cssTd.appendChild(cssText)
        jsTd.appendChild(jsText)
        reactTd.appendChild(reactText)
        avgTd.appendChild(avgText)
        removeTd.appendChild(removeBtn)
        
        itemRow.appendChild( indexTd )
        itemRow.append(nameTd)
        itemRow.appendChild(htmlTd)
        itemRow.appendChild(cssTd)
        itemRow.appendChild(jsTd)
        itemRow.appendChild(reactTd)
        itemRow.appendChild(avgTd)
        itemRow.appendChild(removeTd)

        document.getElementById("tableBodyOk").appendChild(itemRow)

        let buttons = document.querySelectorAll(".btn-delete")

        buttons.forEach( button => {
            button.addEventListener( "click", deleteMentor ) 
        })
    })
    
    let totalAvgElement = document.createElement("h3")
    
    let totalAvgText = document.createTextNode("Promedio General:\t" + mentorsAverage(mentorsArray))
    
    totalAvgElement.appendChild(totalAvgText)
    
    document.getElementById("promedio").appendChild(totalAvgElement)
}
printTable()





const getNewMentor = () =>{
    let newMentorName = document.getElementById("koder-name").value
    let newHtmlScore = document.getElementById("score-html").value
    let newCssScore = document.getElementById("score-css").value
    let newJsScore = document.getElementById("score-js").value
    let newReactScore = document.getElementById("score-react").value

    let newMentor = {name: newMentorName, scores: [{signature: "HTML", score: parseInt(newHtmlScore)}, {signature: "CSS", score: parseInt(newCssScore)},
    {signature: "JS", score: parseInt(newJsScore)},
    {signature: "ReactJS", score: parseInt(newReactScore)}]}
    mentorsArray.push(newMentor)
    printTable()
    document.getElementById("koder-name").value = ""
    document.getElementById("score-html").value = ""
    document.getElementById("score-css").value = ""
    document.getElementById("score-js").value = ""
    document.getElementById("score-react").value = ""
    
}

document.getElementById("save-koder").addEventListener("click", getNewMentor)