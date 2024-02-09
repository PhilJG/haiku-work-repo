////////////////
// Return Length
// Create a function returnLength that takes an array as its only parameter, then returns the length of the array as a number, or 'the array is empty' if there are no elements in the array

function returnLength(arr) {
    return arr.length === 0 ? 'array is empty' : arr.length
}


console.log(
    
    returnLength([1,2,3,4])	//  4
    );
console.log(
    
    returnLength(['a'])	//  1
    );
console.log(
    returnLength([])	//  'the array is empty'
    );