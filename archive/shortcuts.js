//////////////////////// 
///Shortcut in a Loop
///////////////////////

// Use a shortcut in the following function to replace the increment of i in the loop and the increment of sum.

// function timer() {
//   let sum = 0
//   for (let i = 0; i < 10; i++) {
//     sum++
//   }
//   return sum
// }

// //////////////////////
// Decrementing a Value
////////////////////////

// Create a JavaScript function called decrementValue.
// This function should take a single parameter, a number, and use the decrement operator to decrease the value of the number by one.
// The function should then return the decremented value.

// function decrementValue(number) {
//     number--
//     console.log(number);
//     return number
// }

// decrementValue(5)	// 4
// decrementValue(100)	// 99

/////////////////////
// Addition Assignment
/////////////////////
// Replace the sum calculation in the following code with the Addition Assignment operator.
// Don't delete the variable c.

// function addTen(a) {
//     let c = 10
//     c += a    
//     return c
// }

// // test	expected
// addTen(5)	//15
// addTen(10)	//20

/////////////////
// If to Ternary
/////////////////

// In the following function, convert the if condition into a ternary operator.

// function numerToBoolean(n) {
//     return n > 0 ? true : false
// }

// // test	expected
// numerToBoolean(5)	// true
// numerToBoolean(-30)	// false

///////////////
// Half or Double
// Create a function halfOrDouble that takes an array of numbers.
// The function should then check the value of each number and, if it's greater than 10, it should halve it, otherwise it should double it.
// The function should then return the updated array.
// Use a ternary operator.

// function halfOrDouble(array) {
//     let result = []
//     let index = 0
//     for (let number of array) {   
//         result[index] = number > 10 ? number/2 : number*2
//         index++     
//     }
//     return result
// }

// halfOrDouble([10,5,2,14])	//  [20,10,4,7]
// halfOrDouble([-20,1,70,2,9,0,16])	//  [-40,2,35,4,18,0,8]
// halfOrDouble([])	// []

// /////////////////
// Function to Arrow
// Convert the following function into an arrow function.

// const add = (a, b) => a + b


// console.log(
//     add(5,2)	//7
//     );

//     console.log(
//         add(1,2)	//3
//         );

///////////////////////
// Fix the Arrow Function 1
// The following arrow function is broken. Can you fix it?

// const subtract = (a, b) => a - b

// console.log(subtract(5,2)	);
// console.log(subtract(10,1)	);

// const multiply = (a, b) => a * b

// console.log(multiply(10,2)	);
// console.log(multiply(9,3)	);

// const divide = (a, b) =>  a / b 

// console.log(divide(10,2));
// console.log(divide(18,3));

const checkPositive = (n) => {
    return n >= 0 ? true : false
}

console.log(
    checkPositive(20)	// true
);

console.log(

    checkPositive(-5)	// false
);


