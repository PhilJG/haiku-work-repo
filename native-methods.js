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

// function returnLength(x) {
//    return typeof x === 'string' ? x.length : typeof x
// }

// console.log(
//     returnLength('hello'),	// 5
//     returnLength(''),	// 0
//     returnLength(10),	// 'number'
//     returnLength([1,2,3]),	// 'object'
//     returnLength(true),	// 'boolean'
//     );

////////////////
// Is Longer Than
// Create a JavaScript function called isLongerThan.
// This function should take two parameters: a string and a number.
// It should return true if the length of the string is greater than the given number, and false otherwise.

// function isLongerThan(string, num) {
//     return string.length > num ? true : false
// }

// // test	expected
// console.log(
//     isLongerThan('hello',3), //true
//     isLongerThan('hello',5), //false
//     isLongerThan('',1), //false
//     isLongerThan('',0), //false
//     );

/////////////////////
// String into Array
// Create a JavaScript function named splitStringIntoArray.
// This function should take two parameters: a string and a delimiter. It should divide the string into an array of substrings, separated by the specified delimiter, and return the resulting array.
// function splitStringIntoArray(string, delimiter) {
//     return string.split(delimiter)
// }

// // test	expected
// console.log(
//     splitStringIntoArray('apple,banana,cherry',','),	//['apple','banana','cherry']
//     splitStringIntoArray('Hello World',' '),	//['Hello','World']
//     splitStringIntoArray('one-two-three','-'),	//['one','two','three']
//     );

/////////////////////
// Search
// Create a function search that takes two parameters: an array of strings, and a string keyword.
// The function should return the string from the array that contains the keyword.
// Assume that there is only 1 string containing the keyword.
// function search(arr, keyword) {
//     let result
//     for (let string of arr) {
//         if (string.includes(keyword)) {
//             result = string
//         }
//     }
//     return result
// }

// console.log(
// search(['hello world','good morning'],'world'),	//'hello world'
// search(['123456','911'],'9'),	//'911'
// );
