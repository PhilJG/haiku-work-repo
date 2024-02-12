// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    
    //String() '39'
    //split ['3', "9"]
    //Number [3, 9]
    //Multiply 27
    //If single digit stop else repeat from step 1
let count = 0

        let string = String(num)
        console.log(string);
        let splitString = string.split('')
        console.log(splitString);
        let newNum = splitString.map(num => Number(num))
        console.log(newNum);
        let product = newNum[0] * newNum[1] 
        console.log(product);
       let productString = String(product)
    
    if(productString.length > 1 ){
        count++
        return persistence(productString)
    } else {
       return count
        // return Number(productString) 
    }

}

<<<<<<< Updated upstream
console.log(persistence(39));
=======

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// let count = 1
// function persistence(num) {
    
//     //String() '39'
//     //split ['3', "9"]
//     //Number [3, 9]
//     //Multiply 27
//     //If single digit stop else repeat from step 1

//         let string = String(num)
//         console.log(string);
//         let splitString = string.split('')
//         console.log(splitString);
//         let newNum = splitString.map(num => Number(num))
//         console.log(newNum);
//         let product = newNum[0] * newNum[1] 
//         console.log(product);
//        let productString = String(product)
    
//     if(productString.length > 1 ){
//         count++
//         return persistence(productString)
//     } else {
//        return count
//         // return Number(productString) 
//     }

// }

// console.log(persistence(25));

// Coding interview

// console log everything
// add personality
// google quickly
// stragegy (pesuedocode) 
// short comments and what expected

// get to level 6
>>>>>>> Stashed changes
