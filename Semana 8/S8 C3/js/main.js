//https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors.json

const getData = (key = '') => {
    $.ajax({
        method: "GET",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors/${key}.json`,
        success: response => {
            printCards(response)
        },
        error: error => {
            console.log(error)
        },
        async: false
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
        },
        async: false
    })
}

const patchData = (key, object) => {
    $.ajax({
        method: "PATCH",
        data: JSON.stringify(object),
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors/${key}.json`,
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        },
        async: false
    })
}

const deleteMentor = event =>{
    key = event.target.dataset.mentorKey
    window.confirm(`¿Estás seguro que quieres eliminar este registro?`) ? deleteData(key) : null
    $(".content-wrapper").empty()
    getData()
}

const editMentor = event =>{
    key = event.target.dataset.mentorKey
    $('#editting-modal').modal('show')
    getData(key)
    $.getJSON(`https://ajaxclass-1ca34.firebaseio.com/11g/hugo/mentors/${key}.json`, function(response){
        $(".modal-body form div input[name=name]").attr("value", response.name)
        $(".modal-body form div input[name=age]").attr("value", response.age)
        $(".modal-body form div input[name=phone]").attr("value", response.phone)
        $(".save-changes").click(() => getNewData(key))
    })  
}

const printCards = mentorCollection => {
    mentorsKey = Object.keys(mentorCollection)
    Object.values(mentorCollection).forEach((element, index) => {
        let cardHtml = 
        `<div class="card text-center border-primary rounded col-3 m-3">
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
    $(".delete-mentor").click(deleteMentor)
    $(".edit-mentor").click(editMentor)
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

const getNewData = keyToEdit => {
    let mentorEditted = {}
    $(".modal-body form div input").each(function(index){
        let key = this.name
        let value = this.value
        mentorEditted[key] = value
    })
    window.confirm("¿Estás seguro de aplicar los cambios") ? patchData(keyToEdit, mentorEditted) : null
    $(".content-wrapper").empty()
    getData()
}