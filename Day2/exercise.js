

let challenge = '30 Days of JavaScript'


console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(3,5))

console.log(challenge.substr(3,19))

console.log(challenge.includes('Script'))

console.log(challenge.split(' '))

console.log(challenge.split(', '))

console.log(challenge.split())

console.log(challenge.split(''))

let socialMedia = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(socialMedia.split(','))

console.log(socialMedia.split())

console.log(challenge.charAt(15))

console.log(challenge.indexOf('a'))

console.log(challenge.charCodeAt('j'))

console.log(challenge.lastIndexOf('a'))

console.log()

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

console.log(sentence.lastIndexOf('because'))


console.log(sentence.search('because'))

console.log(sentence.trim())

console.log(sentence.startsWith('You'))
console.log(sentence.endsWith('conjunction'))

console.log(sentence.match('a'))

let phrase = '30 days of'
console.log(phrase.concat(' javascript'))

console.log(challenge.repeat(2))

//Exercise level 2

//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quote = "'There is no exercise better for the heart than reaching down and lifting people up.'"
let author ="by John Holmes"


console.log(`The quote ${quote} ${author} teaches us to help one another.`)
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."


let owner = 'Mother Teresa'
firstP =   `"Love is not patronizing and charity isn't about pity, it is about love.Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`


console.log(`${firstP} `)

let number = '10'
let numb =  10

result = typeof(number) == typeof(numb)
console.log(result)
 
let digi = parseFloat('9.8')
let roundNum = Math.round(digi)
let


fin = numb == roundNum 
console.log(fin)

let w1 = 'python'
let w2 = 'jargon'


let isPython = w1.includes('on')
let isJargon = w2.includes('on')

console.log(isPython && isJargon)

let sent = 'I hope this course is not full of jargon. Check if jargon is in the sentence.'
console.log(sent.includes('jargon'))


let tNumber = Math.floor(Math.random() * 101)

console.log(tNumber)


let theNum = Math.floor(Math.random() * 51)
console.log(theNum)


let thatNum = Math.floor(Math.random() * 256)
console.log(thatNum)


words = 'javascript'
randomNumber = Math.floor(Math.random()*words.length)
randomcharacter = words[randomNumber]
console.log(randomcharacter)

/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

console.log( ' 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125'
)

let sentences = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentences.substr(31,23))

let matches = sentences.match(/because/g)
let count = matches ? matches.length : 0
console.log(count)

/*
let monthlySala = 5000
let anualbonus = 10000
let monthCourse = 15000

let totalMonthlySalary = 5000 * 12
let totalMonthlyCourse = 15000 * 12

totalAnnualIncome =  totalMonthlySalary + totalMonthlyCourse + anualbonus

console.log(`The total annual income of the person is ${totalAnnualIncome}`)
*/


let monthlySalary = 5000;
let annualBonus = 10000;
let monthlyCourse = 15000;

let totalMonthlySalary = monthlySalary * 12;
let totalMonthlyCourse = monthlyCourse * 12;

let totalAnnualIncome = totalMonthlySalary + totalMonthlyCourse + annualBonus;

console.log(`The total annual income of the person is ${totalAnnualIncome} euros`);