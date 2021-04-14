//https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors.json

const getData = () => {
    $.ajax({
        method: "GET",
        url: 'https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors.json',
        success: response => {
            console.log(typeof (response))
            printCards(response)
        },
        error: error => {
            console.log(error)
        }
    })
    
}

const deleteData = key => {
    $.ajax({
        method: "DELETE",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors/${key}.json`,
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

const postData = object => {
    $.ajax({
        method: "POST",
        data: JSON.stringify(object),
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors.json`,
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

const patchData = key => {
    $.ajax({
        method: "PATCH",
        data: JSON.stringify({
            age: "55"
        }),
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors/${key}.json`,
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

const printCards = mentorCollection => {
    mentorsKey = Object.keys(mentorCollection)
    Object.values(mentorCollection).forEach((element, index) => {
        let cardHtml = 
        `<div class="card bg-primary text-center border rounded col-3 m-3">
            <div class="card-body">
                <div class="card-title font-weight-bold mt-3">Nombre</div>
                <div class="card-text">${element.name}</div>
                <div class="card-title font-weight-bold mt-3">Edad</div>
                <div class="card-text">${element.age}</div>
                <div class="card-title font-weight-bold mt-3">Teléfono</div>
                <div class="card-text">${element.phone}</div>
            </div>
            <div class="d-flex justify-content-around mb-3 btn.container">
                <div class="btn btn-warning edit-mentor" data-mentor-key = ${mentorsKey[index]}>Editar</div>
                <div class="btn btn-danger delete-mentor" data-mentor-key = ${mentorsKey[index]}>Eliminar</div>
            </div>
        </div>
        `
        $(".content-wrapper").append(cardHtml)
    });
}

getData()


const addMentor = () =>{
    let newMentor = {}
    $("form input").each(function(index){
        let key = this.name
        let value = this.value
        newMentor[key] = value
    })
    postData(newMentor)
    $(".content-wrapper").empty()
    getData()
}

$(".save-mentor").click(addMentor)

const editMentor = key =>{

}

const deleteMentor = key =>{

}