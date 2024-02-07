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

function updateNestedArray(obj, num, stg) {
    obj.fruits[num] = stg
    return obj
}


// The object contains a nested array of strings. The function should update the element in the array at the index specified by the number parameter to the value provided by the string parameter.

// After updating, the function should return the modified object.
let a = {"fruits": ["apple", "banana"]}
updateNestedArray(a, 1, "cherry") // {"fruits": ["apple", "cherry"]}
let b = {"fruits": ["pineapple", "strawberry"]}
updateNestedArray(b, 0, "kiwi") // {"fruits": ["kiwi", "strawberry"]}