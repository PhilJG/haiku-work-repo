////////////////
// Return Length
// Create a function returnLength that takes an array as its only parameter, then returns the length of the array as a number, or 'the array is empty' if there are no elements in the array

// function returnLength(arr) {
//     return arr.length === 0 ? 'array is empty' : arr.length
// }


// console.log(
    
//     returnLength([1,2,3,4])	//  4
//     );
// console.log(
    
//     returnLength(['a'])	//  1
//     );
// console.log(
//     returnLength([])	//  'the array is empty'
//     );

// //////////////
// Sports Lenghts
// Create a function addSportsLengths that takes an array of objects.
// Each object contains an array of sports.
// The function should add a property sportsLength to each object, with the length of its sports array.

// function addSportsLengths(arr) {
//     for (let player of arr) {
//          player.sportsLength = player.sports.length
//     }
//    return arr
// }

// // test	expected
// console.log(
//     addSportsLengths([{'name':'Bob','sports':[]}])	
//     );
// //[{'name':'Bob','sports':[],'sportsLength':0}]

// console.log(
//     addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}])
//     );
// //[{'name':'John','sports':['football'],'sportsLength':1},{'name':'Alice','sports':['tennis','golf'],'sportsLength':2}]

//////////////////
// Reverse Array
// Create a function reverseArray that takes an array and returns the array reversed.

// function reverseArray(arr) {
//     arr.rreverse()
// }

// console.log(
//     reverseArray([1,2,3,4])	// [4,3,2,1]
//     );
// console.log(
//     reverseArray(['a','b','c'])	// ['c','b','a']
//     );

////////////////
// String Repeat
// Create a function stringRepeat that takes a number and a string, then returns the string repeated as many times as the number.

// function stringRepeat(num, string) {
//     let arr = []    
//     for(let i = 0; i < num; i++){
//         arr.push(string)
//     };
//     let s = arr.join('')
//     return s
// }

// console.log(
//     stringRepeat(5, 'hi'), // 'hihihihihi'
//     stringRepeat(2, 'hola') // 'holahola'
// );

////////////////
// Reverse Array
// Create a function reverseArray that takes an array and returns the array reversed.
// function reverseArray(arr) {
//     arr.reverse()
//     return arr
// }


// reverseArray([1,2,3,4])	// [4,3,2,1]
// reverseArray(['a','b','c'])	// ['c','b','a']

// //////////////
// Return String Length
// Create a returnLength function that takes a parameter and returns its length if it's a string. In any other case it returns the type of the parameter.

function returnLength(x) {
   return typeof x === 'string' ? x.length : typeof x
}

console.log(
    returnLength('hello'),	// 5
    returnLength(''),	// 0
    returnLength(10),	// 'number'
    returnLength([1,2,3]),	// 'object'
    returnLength(true),	// 'boolean'
    );