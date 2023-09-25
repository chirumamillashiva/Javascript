let day = 'thursday'
console.log(day)
console.log(day.length)
console.log(day.indexOf('u'))
console.log(day.slice(0,4))
console.log(day.split('r'))
let quote= day+ 'is a great day'
console.log(quote.indexOf('great'))
let dayindex=quote.indexOf('day')
let count =0
while(dayindex !=-1){
    count++
    dayindex=quote.indexOf('day', dayindex+1)
}
console.log(count)
console.log(quote)
console.log(count)
// calculating difference between two dates 
let date1= new Date('09/21/2023')
let date2= new Date('09/21/2021')
let timediff= date1.getTime()- date2.getTime()
timeindays= timediff/(1000*3600*24)
console.log(timediff)

