// #1

let numbers = [1, 2, 3, 4, 5,]

numbers.splice(3, 0, 'a', 'b', 'c')

console.log('slice', numbers)

// #2

let numbers1 = [1, 2, 3, 4, 5]

let sum = 0

numbers1.forEach(numbers1 => sum += numbers1)

console.log('forEach', sum)

// #3

for (let i = 100; i >= 1; i--) {
    console.log('from 100 to 1',i)
}

// #4

let numbers2 = [2, 15, 10, 24]

let newNumbers2 = numbers2.filter(number => number !== 10)

console.log('delete 10', newNumbers2)

// #5

let numbers3 = [12, 25, 3, 6, 8, 14, 7, 23]

let newNumbers3 = numbers3.map(number => number / 3)

console.log('Map', newNumbers3)

// #6

let languages =['html','css', 'javascript', 'python', 'php']

let filteredLanguages = languages.filter(word => word.length > 3)

console.log('filtered languages', filteredLanguages)

// #7

let words =['madrid','rome', 'milan', 'berlin']

let filteredWords = words.filter(word => word.includes('m') || word.includes('n'))

console.log('filter words', filteredWords)

// #8

let numb1 = [1,2]
let numb2 = [3,4]
let numb3 = [5,6]

let newNumb = numb1.concat(numb2, numb3)

console.log('contact', newNumb)


// #9

let numbers4 = [-1, -2, -3, 4]

let newNumbers4 = numbers4.some(number => number > 0)

console.log('some', newNumbers4)
