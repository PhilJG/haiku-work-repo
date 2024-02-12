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

function filterOutNegativeNumbers(arr) {
    return arr.filter(number => number >= 0)
}

console.log(
    filterOutNegativeNumbers([1,2,3]),	//[1,2,3]
    filterOutNegativeNumbers([1,-2,-3,4]),	//[1,4]
    filterOutNegativeNumbers([-10,-20,-30,-40]),	//[]
    );