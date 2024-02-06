
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

function getNestedProperty(property) {
    console.log(typeof property.contact.email);
    return property.contact.email
}

getNestedProperty({'contact':{'email':'alice@example.com'}})	
// 'alice@example.com'
getNestedProperty({'contact':{'email':'bob@example.com'}})	
// 'bob@example.com'