//"https://ajaxclass-1ca34.firebaseio.com/11g/hugo/pets.json"
//----------- CRUD PETS -----------------------
const getPetCollection = () => {
    let petCollection;
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/hugo/pets.json",
        success: (response) => {
            petCollection = response;
            console.log()
        },
        error: (error) => {
            console.log(error);
        },
        async: false,
    });
    return petCollection;
};

const savePet = (newPet) => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/hugo/pets.json",
        data: JSON.stringify(newPet),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};

const deletePet = (key) => {
    $.ajax({
        method: "DELETE",
        url:  `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/pets/${key}.json`,
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};
//----------- CRUD OWNERS -----------------------
const getOwnersCollection = () => {
    let OwnerCollection;
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/hugo/owners.json",
        success: (response) => {
            OwnerCollection = response;
        },
        error: (error) => {
            console.log(error);
        },
        async: false,
    });
    return OwnerCollection;
};

const saveOwner = (newOwner) => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/hugo/owners.json",
        data: JSON.stringify(newOwner),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};

const deleteOwner = (key) => {
    $.ajax({
        method: "DELETE",
        url:  `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/owners/${key}.json`,
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};
// ----------------- INFO FROM INPUTS ---------------
const setPetData = () => {
    let inputGroup = $('#new-pet .form-control')
    let petId = Date.now();
    let newPet = {};
    $.each(inputGroup, (idx, currentInput) => {
        newPet[currentInput.name] = currentInput.value
    })
    newPet = {
        ...newPet,
        petId
    };
    try{filteredOwnerByName(newPet.owner)}
    catch(e) {alert("No se ha registrado a ese dueño")}
    
    ownerId = filteredOwnerByName(newPet.owner).ownerId
    newPet = {
        ...newPet,
        ownerId
    };
    console.log(newPet);
    savePet(newPet);
}

$('#save-pet').click(setPetData)

const setOwnerData = () => {
    let inputGroup = $('#new-owner .form-control')
    console.log(inputGroup)
    let ownerId = Date.now();
    let newOwner = {};
    $.each(inputGroup, (idx, currentInput) => {
        newOwner[currentInput.name] = currentInput.value
    })
    newOwner = {
        ...newOwner,
        ownerId
    };
    console.log(newOwner);
    saveOwner(newOwner);
}
$('#save-owner').click(setOwnerData)



const filteredPetById = (ownerId) =>{
    let selectedPet = Object.values(getPetCollection()).reduce((accum, current) =>{
        current.ownerId == ownerId ? accum += 1 : null
        return accum
    },0)
    console.log(selectedPet)
    return selectedPet
}




// -------------- PRINT CARDS ------------------
let petWrapper = $('#pet-wrapper-transitive')

const printPetCard = (petCollec) => {
    let ownCollec = getOwnersCollection()
    console.log(ownCollec)
    
    for (key in petCollec) {
        a = Object.values(petCollec[key])
        console.log(a)
     let petCard = 
    `<div class="col-3 m-3">
        <div class="card">
            <img src=${a[5]}
                class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title" data-petId = ${a[4]}>${a[3]}</h2>
                <h5 class="card-title text-muted" data-owner-id=${a[2]}>${a[1]}</h5>
                <p class="card-text">${a[0]}</p>
                <button href="#" class="btn btn-primary adopt" data-owner-id=${a[2]}>ADOPT</button>
            </div>
        </div>
    </div>`
    petWrapper.prepend(petCard)
    }
}

printPetCard(getPetCollection())

let ownersWrapper = $('#owners-wrapper')
const printOwnersTable = data =>{
    let counter = 1
    for (key in data) {
        a = Object.values(data[key])
    let ownerRow = 
    `<tr>
        <th scope="row">${counter}</th>
        <td data-owner-id = ${a[1]}>${a[0]}</td>
        <td>${filteredPetById(a[1])}</td>
    </tr>`
    ownersWrapper.append(ownerRow)
    counter ++
    }
}

printOwnersTable(getOwnersCollection())


const filteredOwnerByName = (ownerName) => {
    let selectedOwner = Object.values(getOwnersCollection()).find(owner => owner.owner == ownerName);
    return selectedOwner;
}

const disableButton = () =>{
    let adoptBtns = $('.adopt')
    $.each(adoptBtns, (idx, currentBtn) =>{
        currentBtn.dataset.ownerId === '1618906589891' ? null : currentBtn.disabled = true
    })
}
disableButton()

