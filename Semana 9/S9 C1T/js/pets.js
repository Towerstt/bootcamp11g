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
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/pets/${key}.json`,
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

const changeOwnerData = (values,key) => {
    $.ajax({
        method: "PUT",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/pets/${key}.json`,
        data: JSON.stringify(values),
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
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/hugo/owners/${key}.json`,
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        },
    });
};
// ----------------- INFO FROM INPUTS ---------------
const filteredOwnerByName = (ownerName) => {
    let selectedOwner = Object.values(getOwnersCollection()).find(owner => owner.owner == ownerName);
    return selectedOwner;
}

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
    console.log(newPet.owner)
    try {
        filteredOwnerByName(newPet.owner).ownerId
    } catch (e) {
        alert("No se ha registrado a ese dueño")
    }
    
    ownerId = filteredOwnerByName(newPet.owner).ownerId
    newPet = {
        ...newPet,
        ownerId
    };
    savePet(newPet);
    printPetCard(getPetCollection())
}

$('#save-pet').click(setPetData)

const setOwnerData = () => {
    let inputGroup = $('#new-owner .form-control')
    let ownerId = Date.now();
    let newOwner = {};
    $.each(inputGroup, (idx, currentInput) => {
        newOwner[currentInput.name] = currentInput.value
    })
    newOwner = {
        ...newOwner,
        ownerId
    };
    saveOwner(newOwner);
    printOwnersTable(getOwnersCollection())
}
$('#save-owner').click(setOwnerData)

const filteredPetById = (ownerId) => {
    let selectedPet = Object.values(getPetCollection()).reduce((accum, current) => {
        current.ownerId == ownerId ? accum += 1 : null
        return accum
    }, 0)
    return selectedPet
}

// -------------- PRINT CARDS ------------------
let petWrapper = $('#pet-wrapper-transitive')

const printPetCard = (petCollec) => {
    petWrapper.empty()
    for (key in petCollec) {
        const {
            description,
            owner,
            ownerId,
            pet,
            petId,
            url
        } = petCollec[key]
        let petCard =
            `<div class="col-3 m-3">
        <div class="card" data-key=${key}>
            <img src=${url}
                class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title" data-petId = ${petId}>${pet}</h2>
                <h5 class="card-title text-muted" data-owner-id=${ownerId}>${owner}</h5>
                <p class="card-text">${description}</p>
                <button class="btn btn-primary adopt" data-key=${key} data-pet-id =${petId} data-owner-id=${ownerId}>ADOPT</button>
            </div>
        </div>
    </div>`
        petWrapper.prepend(petCard)
    }
}

printPetCard(getPetCollection())

let ownersWrapper = $('#owners-wrapper')
const printOwnersTable = data => {
    ownersWrapper.empty()
    let counter = 1
    for (key in data) {
        const {owner, ownerId} = data[key]
        let ownerRow =
        `<tr>
            <th scope="row">${counter}</th>
            <td data-owner-id = ${ownerId}>${owner}</td>
            <td>${filteredPetById(ownerId)}</td>
        </tr>`
        ownersWrapper.append(ownerRow)
        counter++
    }
}

printOwnersTable(getOwnersCollection())

const disableButton = () => {
    let adoptBtns = $('.adopt')
    $.each(adoptBtns, (idx, currentBtn) => {
        currentBtn.dataset.ownerId === '1618950313527' ? null : currentBtn.disabled = true
    })
}
disableButton()

let adoptBtn = $('.adopt').not(':disabled')
adoptBtn.click(event => {
    let petToAdoptKey = event.target.dataset.key
    let allPets = getPetCollection()
    let petToAdopt = {}
    for (key in allPets) {
        key === petToAdoptKey ? petToAdopt = {
            ...petToAdopt,
            [key]: allPets[key]
        } : null
    }
    a = Object.values(petToAdopt)
    $('#exampleModal').modal('show')
    $('#exampleModalLabel').text(`¿Quieres adoptar a ${a[0].pet}`)
    setNewOwnerData(petToAdopt)
})

const setNewOwnerData = (object) => {
    let inputGroup2 = $('.modal-form-input')
    inputGroup2.attr('value', Object.values(object)[0].owner)
    let newOwner = {}
    $('#save-new-owner').click(() => {
        z = inputGroup2.val()
        console.log(z)
        let y
        try {
            filteredOwnerByName(z).ownerId
            y = filteredOwnerByName(z)
        } catch (e) {
            alert("No se ha registrado a ese dueño")
        }
        newOwner = object
        for(key in newOwner){
            newOwner[key].owner = y.owner
            newOwner[key].ownerId = y.ownerId
        }
        petKey = Object.keys(newOwner)[0]
        petValues = Object.values(newOwner)[0]
        changeOwnerData(petValues,petKey)
    })
}

//---------Filtrar por Dueño----------
let option = $('select')
console.log(option)
$.each(getOwnersCollection(), (idx, el) =>{
    let newOption = `<option value="${el.ownerId}">${el.owner}</option>`
    option.append(newOption)
})
$('select').change(()=>{
    let filteredOwnerId = $('select option:selected').attr('value')
    filteredOwnerId === 'all' ? location.reload() : null
    console.log(filteredOwnerId)
    let allPetsToFilter = getPetCollection()
    let petsFilteredByOwner = {}
    for (key in allPetsToFilter){
        const {
            description,
            owner,
            ownerId,
            pet,
            petId,
            url
            } = allPetsToFilter[key]
    filteredOwnerId == ownerId ? petsFilteredByOwner = {...petsFilteredByOwner, [key]:allPetsToFilter[key]} : null
    }
    printPetCard(petsFilteredByOwner)
    disableButton()
})