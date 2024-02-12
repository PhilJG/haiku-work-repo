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