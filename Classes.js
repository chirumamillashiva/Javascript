class Car{
    constructor(color, fuelMode, price, availability){
        this.color= color
        this.fuelMode= fuelMode
        this.price= price
        this.availability= availability
    }
}
let Tesla= new Car('Black','premium',55000,'available')
console.log(Tesla.color)
let Bmw = new Car('Red','Premium','90000','Available')
console.log(Bmw.price)