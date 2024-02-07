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

function markAsValue(bill, value) {
    bill.status = value    
    return bill
}


let a = {"total": "99", "status": "pending"}
markAsValue(a, "accepted") // {"total": "99", "status": "accepted"}
let b = {"total": "71.5", "status": "pending"}
markAsValue(b, "denied") // {"total": "71.5", "status": "denied"}