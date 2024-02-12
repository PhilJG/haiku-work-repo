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

function convertToFahrenheit(arr){
   let f = arr.map(c => c * 9 / 5 + 32)
   return f
}

console.log(
    convertToFahrenheit([15,40,12,5]),	// [59,104,53.6,41]
    convertToFahrenheit([42,0,-10]),	// [107.6,32,14]
    );