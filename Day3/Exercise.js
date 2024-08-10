let thisYear = new Date()
console.log(thisYear.getFullYear())


let monthToday = new Date()
console.log(monthToday.getMonth())

let dateToday = new Date()
console.log(dateToday.getDate())

let dayToday = new Date()
console.log(dayToday.getDay())

let hourNow =  new Date()
console.log(hourNow.getHours())

let minutesNow = new Date()
console.log(minutesNow.getMinutes())

let numberOfSeconds = new Date()
console.log(numberOfSeconds.getSeconds())


let base = prompt('Enter the base of the triangle')
let height = prompt('Enter the height of the triangle')
let area = 0.5 * base * height
alert(`The area of the triangle is ${area} cm`)


let sideA = prompt('Enter the first side of the triangle')
let sideB = prompt('Enter the second side of the triangle ')
let sideC = prompt('Enter the third side of the triangle')
let perimeter = sideA + sideB + sideC
alert(`The perimeter of the triangle is ${perimeter} cm`)


// creating human readable time
// YYYY-MM-DD HH:mm

let times = new Date();
let format1 = times.getFullYear() + '-' +
    String(times.getMonth() + 1).padStart(2, '0') + '-' +
    String(times.getDate()).padStart(2, '0') + ' ' +
    String(times.getHours()).padStart(2, '0') + ':' +
    String(times.getMinutes()).padStart(2, '0');

alert(`Today's date is ${format1}`);


//DD-MM-YYYY HH:mm

let now = new Date()
let format2 = now.getDay() + '-' +
String(now.getMonth() + 1).padStart( 2, 0) + '-' +
String(now.getFullYear()).padStart( 2, 0) + ' ' +
String(now.getHours()).padStart( 2, 0) + ':' +
String(now.getHours()).padStart( 2, 0)
console.log(`Todays date is ${format2}`)








