
  //Create a function countWindows that counts, then returns, the total number of windows in the house parameter object, by accessing each room's windows:

//   let house = {
//     livingRoom: {
//       windows: 4
//     },
//     bedroom: {
//       windows: 2
//     },
//     kitchen: {
//       windows: 1
//     }
//   }

//   function countWindows(house) {
   
    
//     return  house.livingRoom.windows + house.bedroom.windows + house.kitchen.windows

//   }
// console.log(countWindows(
//     {
//         'livingRoom':{
//             'windows':4},
//         'bedroom':{
//             'windows':2},
//         'kitchen':{
//             'windows':1}
//         }
//             )
//   );

  // expected: 7

//   Accessing Nested Object Properties
// Your task is to create a function named getNestedProperty.
// This function should take an object as its parameter.
// The object will have a nested structure, with an object inside the main object.
// You need to access the email property inside the nested object and return its value.

// function getNestedProperty(property) {
//     console.log(typeof property.contact.email);
//     return property.contact.email
// }

// getNestedProperty({'contact':{'email':'alice@example.com'}})	
// // 'alice@example.com'
// getNestedProperty({'contact':{'email':'bob@example.com'}})	
// // 'bob@example.com'

// Calculating Total Price from Array of Objects
// Create a function named calculateTotalPrice.
// This function should take an array of objects as its parameter.
// Each object in the array represents an item, and each item has a price property.
// The function should calculate the total price of all items in the array by summing up their individual prices and return the total sum.

// function calculateTotalPrice(arr) {
//     let total = 0
//     for (let el of arr) {
//         total = total + el.price
//     }
//     return total
// }

// let a = [{"name": "Bag", "price": 90}, {"name": "Shoes", "price": 100}]
// console.log(
//     calculateTotalPrice(a) // 190
// );

// let b = [{"name": "Car", "price": 1000}, {"name": "Apple", "price": 5}, {"name": "Laptop", "price": 500}]
// console.log(
//     calculateTotalPrice(b) // 1505
// );


// Summing Positive Numbers in Nested Arrays
// Your task is to create a function named sumPositiveNumbers.
// This function should take an object as its parameter.
// Within this object, there are two properties array1 and array2, each containing an array of numbers.
// The function should calculate the sum of all positive numbers from both arrays combined and return the total sum.

function sumPositiveNumbers(obj) {
    let total = 0

    function positiveValue(num){
        if(num >= 0) {
          return num
        }
        return 0
    }

    for (let el of obj.array1) {
      total = total + positiveValue(el)
    }

    for (let el of obj.array2) {
        total = total + positiveValue(el)       
    }

    return total
}

let a = {
    array1: [1, -3, 5, 7],
    array2: [10, -2, 4, -5]
}
console.log(
    sumPositiveNumbers(a) // 27
);


let b = {
    array1: [10, 20, -9],
    array2: [200, 1]
}
sumPositiveNumbers(b) // 241