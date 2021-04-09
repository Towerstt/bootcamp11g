let articlesObject = {}
//"https://ajaxclass-1ca34.firebaseio.com/11g/t5/marketplace.json"

const setArticle = () =>{
    let inputs = document.querySelectorAll("form input[type='text']")
    inputs.forEach(input =>articlesObject[input.name] = input.value)
    let select = document.getElementById("category-article")
    let category = select.options[select.selectedIndex].value

    articlesObject = {...articlesObject, category}
    console.log(articlesObject)    
    inputs.forEach(input =>input.value = "")
    saveArticle(articlesObject)
}
document.getElementById("save-article").addEventListener("click", setArticle)
const saveArticle = (element) => {
    let xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/t5/marketplace.json", true);
    xhttp.send( JSON.stringify(element) );
}
const getArticlesCollection = () => {
    let articlesCollection;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            articlesCollection = JSON.parse( xhttp.response)
        }
    }
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/t5/marketplace.json", false );
    xhttp.send();
    console.log(articlesCollection)
    return articlesCollection    
}
getArticlesCollection()

let cardsContainer = document.getElementById("cards-container")

const printCards = dataToPrint =>{
    let cardsContainer = document.getElementById("cards-container")
   
    while (cardsContainer.lastElementChild) {
        cardsContainer.removeChild( cardsContainer.lastElementChild );
    }

    for( key in dataToPrint ){
        console.log( key )
        console.log( dataToPrint[key] )
        let {name, url, description, price, category} = dataToPrint[key]

        let divCard = document.createElement("div")
        divCard.classList.add("card", "w-25")
        let imgCard = document.createElement("img")
        imgCard.classList.add("card-img-top")
        imgCard.src = url
        let divCardBody = document.createElement("div")
        divCardBody.classList.add("card-body")
        let h1CardName = document.createElement("h1")
        h1CardName.classList.add("card-title")
        let h3CardPrice = document.createElement("h3")
        let pCardDescription = document.createElement("p")
        pCardDescription.classList.add("card-text")
        let pCardCategory = document.createElement("p")
        pCardCategory.classList.add("card-text", "text-muted")

        let h1CardNameTx = document.createTextNode(name)
        let h3CardPriceTx = document.createTextNode(price)
        let pCardDescriptionTx = document.createTextNode(description)
        let pCardCategoryTx = document.createTextNode(category)

        h1CardName.appendChild(h1CardNameTx)
        h3CardPrice.appendChild(h3CardPriceTx)
        pCardDescription.appendChild(pCardDescriptionTx)
        pCardCategory.appendChild(pCardCategoryTx)

        divCardBody.appendChild(h1CardName)
        divCardBody.appendChild(h3CardPrice)
        divCardBody.appendChild(pCardDescription)
        divCardBody.appendChild(pCardCategory)

        divCard.appendChild(imgCard)
        divCard.appendChild(divCardBody)

        cardsContainer.appendChild(divCard)

    }
    
}

printCards(getArticlesCollection())
