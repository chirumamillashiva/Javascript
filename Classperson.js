export class person{
    constructor(firstName, lastName, age,gender){
        this.firstName= firstName
        this.lastName= lastName
        this.age= age
        this.gender= gender
    }
    fullName(){
        let fullName= this.firstName+this.lastName
        return fullName
    }
    location(){
        return 'Australia'
    }
}
let shiva= new person ('shiva','dhanush',27,'m')
console.log(shiva.fullName())