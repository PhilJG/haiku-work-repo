// Mark as Paid
// Your task is to create a function called markAsPaid.
// This function should take an object as its only parameter (a bill), update the status property of the bill to paid, and then return the updated object.

// function markAsPaid(bill) {
//     bill.status = "paid"
//     return bill
// }

// let a = {"total": "105", "status": "pending"}
// markAsPaid(a) // {"total": "105", "status": "paid"}
// let b = {"total": "33.2", "status": "pending"}
// markAsPaid(b) // {"total": "33.2", "status": "paid"}

// Mark as Value
// Your task is to create a function called markAsValue.
// This function should take 2 parameters: an object (a bill), and a string (a value).
// The function should update the status property of the bill to value parameter, and then return the updated object.

// function markAsValue(bill, value) {
//     bill.status = value    
//     return bill
// }


// let a = {"total": "99", "status": "pending"}
// markAsValue(a, "accepted") // {"total": "99", "status": "accepted"}
// let b = {"total": "71.5", "status": "pending"}
// markAsValue(b, "denied") // {"total": "71.5", "status": "denied"}

///////////////////////////////////////
// Updating a Nested Array in an Object
///////////////////////////////////////

// Create a JavaScript function named updateNestedArray.
// This function should take three parameters:

// an object
// a number
// and a string.

// function updateNestedArray(obj, num, stg) {
//     obj.fruits[num] = stg
//     return obj
// }


// // The object contains a nested array of strings. The function should update the element in the array at the index specified by the number parameter to the value provided by the string parameter.

// // After updating, the function should return the modified object.
// let a = {"fruits": ["apple", "banana"]}
// updateNestedArray(a, 1, "cherry") // {"fruits": ["apple", "cherry"]}
// let b = {"fruits": ["pineapple", "strawberry"]}
// updateNestedArray(b, 0, "kiwi") // {"fruits": ["kiwi", "strawberry"]}

////////////////////////////////
// Reducing Product Prices by 10%
///////////////////////////////

// Write a function named reducePrices.
// The function takes an array of objects as a parameter. Each object represents a product with a price property.
// function reducePrices(arr) {
//     for (let el of arr) {
//         let newPrice = el.price
//         el.price = newPrice * .9
//     }
//     return arr  
// }

// // The task is to reduce the price property of each product by 10%.
// // Return the array with the updated product objects.


// reducePrices([{'name':'Laptop','price':1000},{'name':'Phone','price':500}])
// reducePrices([{'name':'Camera','price':800},{'name':'Headphones','price':200}])


// ///////////////////////////
// Add Age
// ////////////////////////////
// Your task is to create a JavaScript function named addAge.
// This function should take two parameters: an object and a number.
// The function should add the provided number to the object as age and return the updated object.

// function addAge(obj, num) {
//     obj.age = num   
//     return obj 
// }

// addAge({'name':'Alice'},25)
// addAge({'name':'Bob','job':'coder'},51)

// ///////////////////////////////
// Add Ages
// //////////////////////////////
// Your task is to create a JavaScript function named addAges.
// This function should take two parameters: an array of objects and an array of numbers of equal length.
// The function should add the numbers in the second array to the objects as age, following the corresponding index, and return the updated array of objects.

// function addAges(objs, nums) {
//     let counter = 0
//     for (let obj of objs) {
//         obj.age = nums[counter]
//         counter++
//     }
//     console.log(objs);
    
//     return objs
// }

// addAges([{'name':'Tom'},{'name':'Tim'},{'name':'Tam'}],[30,31,32])

// //////////////////////////////
// Format the Data
// /////////////////////////////

// Create a function formatData that receives an array of products from a database.
// Unfortunately, the data is corrupt, some of the objects in the array have a price field of type number but others are strings.
// Some of the products have an inStock field of type boolean, others are the string 'yes' or 'no' and others don't have the field at all.
// The functions should:
// convert all products prices to numbers
// convert all products inStock property to booleans ('yes' -> true, 'no' -> false) and add a default true if the property doesn't exist

// function formatData(objs) {
//     for (let obj of objs ) {
        
//         if (typeof obj.price === 'string'){
//             obj.price = Number(obj.price) 
//         }
//         if (obj.inStock === 'yes' || obj.inStock === undefined) {
//             obj.inStock = true
//         } else if (obj.inStock === 'no') {
//             obj.inStock = false
//         }

//     }

//     return objs
// }

// // then return the updated and properly formatted array

// formatData([{'name':'shoes','price':10,'inStock':true},{'name':'skirt','price':'50','inStock':'yes'}])	
// formatData([{'name':'jacket','price':'90.5','inStock':'no'}])	
// formatData([{'name':'keyboard','price':22.35}])	

// /////////////////////////////////////
// Delete User Password
// ////////////////////////////////////

// A query has been made to a database and a user object was returned, including the password property, which should not be shared for security reasons.
// Create a function removePassword that takes a user in the format of an object, deletes the password from the user, then returns the user with all its fields but not the password.

function removePassword(user) {
    delete user.password    
    return user
}

removePassword({'name':'Jack','age':45,'password':'777888'})	