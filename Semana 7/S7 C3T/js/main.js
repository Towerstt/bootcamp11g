//https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors.json
//Postear un mentor primero para generar el endpoint
mentorObject = [{
    name:"Primer Mentor",
    phone:"1111111111",
    age:"11"
    }
]

//1.- Crear un formulario
//2.- Guardar la información y subirla al endpoint
//3.- Pintarlos en una tabla
//4.- CRUD

const saveMentor = (element) => {
    let xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors.json", true);
    xhttp.send( JSON.stringify(element) );
}

const getMentorsFromEndPoint = () => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mentorObject = JSON.parse(xhttp.responseText)
        }
    }
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors.json", true);
    xhttp.send();
    printTable()
}

const deleteMentorFromEndPoint = mentorKey => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }
    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors/${mentorKey}.json`, true);
    xhttp.send( );
}


const deleteMentor = event => {
    let mentorIndex = event.target.dataset.mentorIndex 
    mentorObject.splice(mentorIndex,1)
    console.log( mentorObject )

    printTable()
}
const refresh = () =>{
    document.getElementById("mentor-name").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("age").value = ""
}



const printTable =  () =>{
    
    let tbody = document.getElementById("tableBodyOk")
    while (tbody.lastElementChild) {
        tbody.removeChild( tbody.lastElementChild );
    }

    mentorObject.forEach((item,index) =>{
        let itemRow = document.createElement("tr")
        let indexTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let phoneTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let removeTd = document.createElement("td")

        let removeBtn = document.createElement("button")
        removeBtn.innerHTML = "Eliminar"; 
        var btn = document.createAttribute("class");
        btn.value = "btn btn-danger btn-delete";
        removeBtn.setAttributeNode(btn);

        removeBtn.dataset.mentorIndex = index

        let indexTx = document.createTextNode(index+1)
        let nameTx = document.createTextNode(item.name)
        let phoneTx = document.createTextNode(item.phone)
        let ageTx = document.createTextNode(item.age)
        

        indexTd.appendChild(indexTx)
        nameTd.appendChild(nameTx)
        phoneTd.appendChild(phoneTx)
        ageTd.appendChild(ageTx)
        removeTd.appendChild(removeBtn)

        itemRow.appendChild(indexTd)
        itemRow.appendChild(nameTd)
        itemRow.appendChild(phoneTd)
        itemRow.appendChild(ageTd)
        itemRow.appendChild(removeTd)

        document.getElementById("tableBodyOk").appendChild(itemRow)
        let buttons = document.querySelectorAll(".btn-delete")

        buttons.forEach( button => {
            button.addEventListener( "click", deleteMentor ) 
        })
    })
}


const getMentor = () =>{
    
    let mentorName = document.getElementById("mentor-name").value
    let mentorPhone = document.getElementById("phone").value
    let mentorAge = document.getElementById("age").value

    let newMentor = {name: mentorName, phone: mentorPhone, age: mentorAge}
    mentorObject.push(newMentor)
    saveMentor(newMentor)
    printTable()
    refresh()
}
printTable()
addMentorBtn = document.getElementById("save-mentor")
addMentorBtn.addEventListener("click", getMentor)
showTableBtn = document.getElementById("show-table")
showTableBtn.addEventListener("click", getMentorsFromEndPoint)