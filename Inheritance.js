import{person} from './Classperson.js'
class student extends person{
    constructor(firstName,lastName, age,gender,marks){
        super(firstName,lastName,age,gender)
        this.marks=marks
    }
    location(){
        return 'QLD'
    }

}
let student1= new student('john','park',18,'m',999)
console.log(student1)
console.log(student1.location())