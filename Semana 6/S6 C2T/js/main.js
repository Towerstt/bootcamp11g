//Generar una colección de objetos de tipo Product que tenga las siguientes propiedades:
function Product(name, description, cost, classification, profit, last6MonthsPrices, lastWeekSells, expirationDate){
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.classification = classification;
    this.profit = profit;
    this.sellingPrice = cost * (1+profit)
    this.last6MonthsPrices = last6MonthsPrices;
    this.lastWeekSells = lastWeekSells;
    this.expirationDate = expirationDate;



    this.calculateDaysToExpire = function(){
        today = new Date()
        expDate = new Date(expirationDate)
        daysLeft = today.getMonth() === expDate.getMonth() ? today.getDate() < expDate.getDate() ? expDate.getDate() - today.getDate() : expDate.getDate() - today.getDate() + 30 : expDate.getDate() - today.getDate() + 30
        return daysLeft
    }

    this.last6MonthsAverage = function(){
        let avg = last6MonthsPrices.reduce((accum, current) => accum + current)/last6MonthsPrices.length
        return avg
    }
}
productsCollection = []
const gerber = new Product ("Gerber", "Bote de 200 g.", 7.55, "Bebés", .15, [6.53, 7.93, 8.29, 8.52, 8.73, 8.41, 7.86, 5.65, 8.4, 8.68], [106, 63, 113, 97, 91, 56, 95], "2021/04/22")
productsCollection.push (gerber)
const azucar = new Product("Azúcar", "Bolsa de 1 kg.", 25.72, "Canasta Básica", .22, [27.4, 27.25, 26.31, 26.5, 27.97, 26.67, 26.81, 26.61, 24.68, 24.37], [103, 69, 81, 51, 130, 75, 150], "2021/04/12")
productsCollection.push(azucar)
const cereal = new Product("Cereal", "Caja de 550 g.", 58.25, "Granos", .33, [55.78, 59.43, 58.32, 57.5, 58.71, 55.65, 57.71, 59.33, 55.85, 58.5], [42, 90, 100, 117, 4, 80, 16], "2021/04/17")
productsCollection.push(cereal)
const biberon = new Product("Biberón", "1 pieza", 35.29, "Bebés", .25, [33.94, 36.01, 38.45, 38.77, 36.92, 34.28, 31.57, 39.64, 35.44, 31.39], [123, 88, 75, 91, 33, 106, 99], "2021/04/03")
productsCollection.push(biberon)
const harina = new Product("Harina", "Bolsa de 1 kg.", 26.95, "Granos", .12, [24.6, 26.71, 23.04, 26.24, 26.73, 25.67, 25.98, 25.39, 25.78, 26.56], [71, 104, 105, 56, 53, 44, 38], "2021/04/02")
productsCollection.push(harina)
const avena = new Product("Avena", "Bolsa de 1 kg.", 19.95, "Granos", .17, [17.11, 18.3, 21.88, 17.46, 21.96, 18.95, 21.68, 17.96, 20.69, 20.51], [30, 126, 147, 142, 105, 66, 77], "2021/04/06")
productsCollection.push (avena)
const aceite = new Product("Aceite", "Botella de 1 L.", 32.25, "Canasta Básica", .26, [32.92, 33.04, 30.76, 34.04, 32.59, 33.05, 34.67, 32.49, 33.87, 30.43], [146, 76, 78, 94, 35, 129, 145], "2021/04/13")
productsCollection.push()
productsCollection.push(new Product("Sonaja", "1 pieza", 39.46, "Bebés", .35, [38.03, 38.37, 35.9, 44.98, 44.39, 35.94, 44.04, 39.26, 37.9, 40.48], [127, 150, 172, 141, 97, 61, 110], "2021/05/02"))
productsCollection.push (new Product("Arroz", "Bolsa de 1 kg.", 29.62, "Canasta Básica", .11, [27.86, 30.86, 28.63, 30.38, 30.91, 28.4, 31.94, 29.38, 30.5, 28.93], [9, 27, 23, 112, 42, 85, 30], "2021/04/09"))
productsCollection.push(new Product("Frijol", "Bolsa de 1 kg", 31.50, "Granos", .22, [37.89, 32.27, 33.91, 36.51, 35.57, 37.3, 28.5, 29.87, 37.5, 33.43], [39, 35, 97, 127, 35, 58, 47], "2021/05/01"))




const sellingAvg = array => array.map(element => element.lastWeekSells.reduce((accum, current) => accum += current))
const mostSellingItems = array => array.filter(element => element/7 <100)
const lessSelledItems = array => array.filter(element => element/7 < 50)
const expiration15 = array => array.filter((element) => element.calculateDaysToExpire() < 15)



