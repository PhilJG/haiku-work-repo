///////////////////
// Refactoring Map
// You are provided with a function that takes an array of numbers and returns a new array with each number doubled.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the map() method instead.

// function doubleNumbers(arr) {
//     const doubled = [];
//     for (let i = 0; i < arr.length; i++) {
//         doubled.push(arr[i] * 2);
//     }
//     return doubled;
// }

// function doubleNumbers(arr) {
//     const doubled = arr.map(num => num * 2)
//     return doubled;
// }



// console.log(

//     doubleNumbers([1,2,3,4]),	//  [2,4,6,8]
//     doubleNumbers([10,10,10]),	// [20,20,20]
//     doubleNumbers([0,100]),	// [0,200]
//     doubleNumbers([]),	// []
//     );

/////////////////
// To Fahrenheit
// Create a JavaScript function named convertToFahrenheit.
// This function will take an array of temperatures in Celsius and return a new array with these temperatures converted to Fahrenheit.
// The conversion formula to use is Fahrenheit = Celsius * 9 / 5 + 32.
// Use the map method.

// function convertToFahrenheit(arr){
//    let f = arr.map(c => c * 9 / 5 + 32)
//    return f
// }

// console.log(
//     convertToFahrenheit([15,40,12,5]),	// [59,104,53.6,41]
//     convertToFahrenheit([42,0,-10]),	// [107.6,32,14]
//     );

///////////////
// Square Numbers Bug
// You are provided with a function that is intended to take an array of numbers and return a new array with each number squared.
// However, there's an error in how the map() method is currently being used.
// Your task is to identify the error and correct the code.

// function squareNumbers(numbers) {
//    let result =  numbers.map(number => {
//         return number * number
//     })
//     return result
// }

// console.log(
//     squareNumbers([1,2,3,4]),   // [1,4,9,16]
//     squareNumbers([9,0]),	//[81,0]
//     );

/////////////////////
// Refactoring Filter
// You are given a function that takes an array of numbers and returns a new array containing only even numbers.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the filter() method instead.

// function getEvenNumbers(numbers) {
//     const evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
//     return evenNumbers;
// }

// function getEvenNumbers(numbers) {
//     return evenNumbers = numbers.filter(number => number % 2 === 0)
// }

// console.log(
//     getEvenNumbers([1,2,3,4,5,6]),  //	[2,4,6]
//     getEvenNumbers([0,-10,11,-12,13]),  //	[0,-10,-12]
//     getEvenNumbers([]), //	[]

// );

/////////////////////////
// Filter Negatives
// Write a JavaScript function named filterOutNegativeNumbers.
// This function should take an array of numbers and return a new array with all negative numbers filtered out, leaving only positive numbers and zeros.

// function filterOutNegativeNumbers(arr) {
//     return arr.filter(number => number >= 0)
// }

// console.log(
//     filterOutNegativeNumbers([1,2,3]),	//[1,2,3]
//     filterOutNegativeNumbers([1,-2,-3,4]),	//[1,4]
//     filterOutNegativeNumbers([-10,-20,-30,-40]),	//[]
//     );

/////////////////////
// Long Strings Bug
// You are given a function that is intended to return an array of strings that are longer than 4 characters.
// However, there's a mistake in the implementation of the filter() method.
// Your task is to identify and correct the error in the function.

// function getLongStrings(strings) {
//     return strings.filter(string => string.length > 4)
//     }

// console.log(
//     getLongStrings(['Hello','Hola','Ciao']),	// ['Hello']
//     getLongStrings(['Grazie','Merci','Tak']),	// ['Grazie','Merci']
//     getLongStrings(['Grazie','Merci','Tak','Kop Khun']),	// ['Grazie','Merci','Kop Khun']
// );

//////////////////////////////////
// Filter and Square Evens
// Create a JavaScript function named filterAndSquareEvens. This function should take an array of numbers as its input. It should first filter out all odd numbers, and then square each of the remaining even numbers. The function should return a new array with these squared even numbers.
// function filterAndSquareEvens(arr) {
//     let even = arr.filter(number => number % 2 === 0)
//     return even.map(number => number * number )
// }

// console.log(
//     filterAndSquareEvens([1,2,3,4,5,6]),	//[4,16,36]
//     filterAndSquareEvens([10,-10,20,-20]),	//[100,100,400,400]
//     filterAndSquareEvens([0,11,22,0]),	//[0,484,0]

// )

//////////////////////////////////
// Find Refactoring
// You are provided with a function that takes an array of objects (representing people) and a name (string).
// The function returns the first person object whose name matches the provided name.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the find() method instead.

// function findPerson(people, name) {
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].name === name) {
//             return people[i]
//         }
//     }
// }

// function findPerson(people, name) {
//     return people.find(p => p.name === name)
// }

// console.log(
//     findPerson([{'name':'Alice','age':25},{'name':'Alice','age':30}],'Alice'), //	{'name':'Alice','age':25}, 
//     findPerson([{'name':'Alice','age':25},{'name':'Bob','age':37}],'Alice'), //	{'name':'Alice','age':25},
//     findPerson([{'name':'Bob','age':37},{'name':'Alice','age':25}],'Alice'), //	{'name':'Alice','age':25},
    
//     )

//////////////////////////////////
// Find Product By Id
// Write a JavaScript function named findProductById.
// This function will take an array of product objects and a specific product ID.
// It should use the find() method to search through the array and return the product object that has the matching ID.
// If no product with the given ID is found, the function should return null.

// function findProductById(arr, id) {
//     let result = arr.find(x => x.id === id)
//     return result ? result : null 
// }

// console.log(
//     findProductById([{'id':1,'name':'Smartphone'},{'id':2,'name':'Laptop'},{'id':3,'name':'Tablet'}],2), //	{'id':2,'name':'Laptop'}
//     findProductById([{'id':109,'name':'Keyboard'},{'id':107,'name':'Duck'}],109), //	{'id':109,'name':'Keyboard'}
//     findProductById([{'id':109,'name':'Keyboard'},{'id':107,'name':'Duck'}],20), //	null

// )

//////////////////////////////////
// Find User Bug
// You are given a function that attempts to find and return a user object from an array of users by a given username.
// However, the find() method is being used incorrectly in this function.
// Your task is to identify the mistake and correct the function so that it properly uses find().

// function findUserByUsername(users, username) {
//     users.find(username => {
//         return username === username
//     })
// }

// function findUserByUsername(users, username) {
//     return users.find(user => {
//                return user.username === username
//             })
// }

// console.log(
//     findUserByUsername([{'username':'spiderman','password':'web'},{'username':'batman','password':'dark'}],'batman'), 
//         //	{'username':'batman','password':'dark'}
//     findUserByUsername([{'username':'wonderwoman','password':'amazon'},{'username':'superman','password':'krypto'}],'wonderwoman'), 
//     //	{'username':'wonderwoman','password':'amazon'}

// )

//////////////////////////////////
// Replace Product Price
// Write a JavaScript function named replaceProductPrice.
// This function should take two parameters: an array of product objects and a product ID.
// Each product object contains an id, a name, and a price.
// The function should find the product with the given ID and increase its price by 10%.
// The function should return a new array with the updated product objects.

// function replaceProductPrice(array, id) {
//     let newDiscount = array.find(product => product.id === id )
//     newDiscount.price *= 1.1
//     newDiscount.price = Math.floor(newDiscount.price)    
//     return array
// }

// console.log(
//     replaceProductPrice([{'id':1,'price':100},{'id':2,'price':200}],1),
//     //	[{'id':1,'price':110},{'id':2,'price':200}]
//     // replaceProductPrice([{'id':1,'price':100},{'id':2,'price':200}],2),
//     // //	[{'id':1,'price':100},{'id':2,'price':220}]

// )

//////////////////////////////////
// Contains High Value
// Create a function called containsHighValue.
// This function will take an array of numbers and check if the array contains any number greater than a specified value.
// The function should use the some() method to perform this check and return true if such a number exists, or false otherwise.

// function containsHighValue(arr, num) {
//     arr.some(n => n > num)
// }

// console.log(

//     containsHighValue([1,2,3,4,5],4),	//true
//     containsHighValue([10,100,1000],55),	//true
//     containsHighValue([10,100,1000],2000),	//false
//     containsHighValue([1,2,3],10),	//false
    
// )

//////////////////////////////////
// Check And Transform
// Create a JavaScript function named checkAndTransform.
// This function will take two parameters: an array of numbers and a threshold value.
// First, it should check if any number in the array is greater than the threshold.
// If such a number exists, then use the map() method to double each number in the array.
// The function should return the transformed array if there's a number greater than the threshold, or the original array otherwise.

// function checkAndTransform(arr, threshold) {
//    let check = arr.some(n => n > threshold)
//    if(check) {
//     return arr.map(n => n * 2)
//    } else {
//     return arr
//    }
// }

// console.log(
//     checkAndTransform([1,4,6,8],5), //	[2,8,12,16]
//     checkAndTransform([2,3,4],10), //	[2,3,4]

// )

//////////////////////////////////
// All Pass
// Create a JavaScript function named allPass.
// This function will take two parameters: an array of students scores and a numerical threshold.
// It should check whether all numbers in the array are greater than the given threshold (all students have passed the exam).
// The function should return true if all numbers meet this criterion, or false otherwise.
// function allPass(array,threshold) {
//     return array.every(num => num > threshold)
// }

// console.log(
//     allPass([7,8,8,6,10],5), //	true
//     allPass([7,8,8,2],5), //	false
//     allPass([10,7,8,10,10,9],5), //	true

// )

//////////////////////////////////
// Search Houses
// Create a JavaScript function called searchHouses.
// This function should take 3 parameters: an array of houses (objects, each having an id, a price and a location), a number (price) and a string (location).
// It should return true of all the houses contain the location string in the name of their location and if they all below the price; otherwise return false.

// function searchHouses(array, price, location) {
//     return array.every(house => house.location.includes(location) && house.price < price)
// }

// console.log(
//     searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Koh'),   //	true
//     searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Bali'),  //	false
//     searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],90,'Koh'),    //	false
//     searchHouses([{'price':100,'location':'Bali'},{'price':80,'location':'Koh Samui'}],90,'Bali'),  //	false

// )

//////////////////////////////////
// Refactoring Reduce
// You are provided with a function that takes an array of numbers and calculates the sum of all the numbers.
// Currently, the function uses a for loop to accomplish this.
// Your task is to refactor this function to use the reduce() method instead, to make the code more concise and functional.

// function sumNumbers(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     return sum
// }

// function sumNumbers(numbers) {
//     return numbers.reduce((acc, num) => acc += num)
// }

// console.log(
//     sumNumbers([1,2,3,4,5]),	//15
//     sumNumbers([10,10]),	//20
//     sumNumbers([-5,-3,8]),	//0

// )

//////////////////////////////////
// Sum of Even Numbers
// Create a JavaScript function named sumOfEvenNumbers.
// This function will take an array of numbers as its input.
// It should first use the filter() method to keep only the even numbers from the array.
// Then, use the reduce() method to calculate and return the sum of these even numbers.





console.log(
    sumOfEvenNumbers([1,2,3,4,5,6]),	//12
    sumNumbers([20,1,20,1]),	//40

)