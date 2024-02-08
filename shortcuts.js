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

function decrementValue(number) {
    number--
    console.log(number);
    return number
}

decrementValue(5)	// 4
decrementValue(100)	// 99